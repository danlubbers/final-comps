insert into users (auth_id, username) values ($1, $2)

returning *;