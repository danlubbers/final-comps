require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      controller = require('./controller'),
      session = require('express-session'),
      Auth0Strategy = require('passport-auth0'),
      passport = require('passport'),
      cors = require('cors'),
      checkSessions = require('./middlewares-session/check-for-sessions'),
      requestMiddleware = require('./middleware');

const app = express();

function middleware(req, res, next) {
      console.log('Top Level Middleware');
      next();
}

const {SESSION_SECRET, CONNECTION_STRING, SERVER_PORT, DOMAIN, CLIENT_ID, CLIENT_SECRET, CALLBACK_URL} = process.env;

app.use(bodyParser.json());
app.use(cors());
app.use(middleware);

// Allows use of Sessions
app.use(session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      cookie: {maxAge: 20000}
}));

app.use(checkSessions);

app.use(passport.initialize());
// Interact with sessions
app.use(passport.session());

// Set up Auth0
passport.use(new Auth0Strategy({
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
      // Where our database calls. 'profile' is where we access 'google's user information. 
      // Go to Heroku and create a database to connect too.
      // add CONNECTION_STRING to .env and copy/paste heroku/settings/URI
      const db = app.get('db')
      // This finds the user data in the find_user.sql file
      const {id, displayName} = profile;
      // The promise will always return an array
      // console.log(id)
      db.find_user([id]).then(users => {
            // console.log('user', users[0])
            if(users[0]) {
                  // console.log('user found', users[0].id)

                  return done(null, users[0].user_id)
            } else {
                  // create_user([must be in order to the sql file. auth_id = id and username = displayName]) this is in the db folder as create_user.sql
                  return db.create_user([id, displayName]).then(createUser => {
                        return done(null, createUser[0].user_id)
                  }).catch(console.log)
            }
      }).catch(console.log)
}
))

// Takes user profile data and directly inserts it to the session. serializeUser put information on the session
// Change 'profile' to 'id' and we are only putting the user id on the session instead of all the users infomation
passport.serializeUser((id, done) => {
      // console.log('DUDESSSSS')
      return done(null, id)
})

// In charge of running before any endpoint gets hit.
// Deserialize is for after a user logs in
passport.deserializeUser((id, done) => {
//    return done(null, id) - don't need this now
      // console.log('DUDE ')
      // find_session_user references the sql file of same name
      app.get('db').find_session_user([id]).then(user => {
            // Puts the user[0] object on req
            // console.log('ds', user[0])
            done(null, user[0]);
      }).catch((err)=>{
            console.error(err)
      })
})

// Add Login Endpoints here:
// test in browser: http://localhost:3500/auth
app.get('/auth', passport.authenticate('auth0'));

// This is where we want to redirect the user
app.get('/auth/callback', passport.authenticate('auth0', {
      // Add # since we are using HashRouter
      successRedirect:  process.env.SUCCESS_REDIRECT,
      failureRedirect:  process.env.FAILURE_REDIRECT
}))

// req.user comes from the serializeUser/deserializeUser user[0]
app.get('/auth/me', function(req, res) {
      if (req.user) {
            res.status(200).send(req.user)
      } else {
            res.status(401).send('Banned!!!')
      }
})

// This Endpoint kills the session
app.get('/logout', function(req, res) {
      req.logOut();
      // Redirects you back to the Homepage
      res.redirect(process.env.FAILURE_REDIRECT)
})


// Add Front-end Endpoints here:

app.get(`/api/getAllProducts`, requestMiddleware, controller.getAllProducts)
app.get(`/api/getOneProduct/:id`, controller.getOneProduct)

// STORING SESSIONS
// app.get(`/`, function(req, res) {
//       console.log(req.session)
//       if(req.session.page_views){
//           req.session.page_views++;
//           res.send(`You visited this page ${req.session.page_views} times`)
//       } else {
//           req.session.page_views = 1;
//           res.send(`Welcome to this page for the first time!`);
//       }
//   })

// app.post()
app.put(`/api/editProductByQuery/:id`, controller.editProduct) 
// app.delete()

massive(CONNECTION_STRING).then(db=>{
      app.set('db', db);
      app.listen(SERVER_PORT, ()=>{console.log(`It would be so nice if something made sense for a change on PORT: ${SERVER_PORT}`)});
})