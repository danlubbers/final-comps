let sessionID = 1
module.exports = function(req, res, next) {
    // This prints the req.session in nodemon when the page is refreshed
    console.log(req.session)
    if(!req.session.user) {
        req.session.user = {sessionID: ''}
        req.session.user.sessionID = sessionID
        sessionID++
    }
    next()
}