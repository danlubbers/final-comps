-- Users table for One to Many with the cart
create table users (
    user_id serial primary key,
    auth_id varchar(45),
    username varchar(45)
);

-- Users Info table for one to one
create table info (
    info_id serial primary key, 
    email VARCHAR(50),
    users_id INTEGER REFERENCES users (user_id)
)

-- Products table
create table products (
    product_id serial primary key,
    title text,
    description text,
    price decimal,
    image text
);

-- Apparel table
create table apparel (
    product_id serial primary key,
    title text,
    description text,
    price decimal,
    image text
);

-- Orders table for Many to Many
create table orders (
    order_id serial primary KEY,
    user_id integer references users (user_id),
    product_id integer references products (product_id)
);

-- Cart table
create table cart (
    cart_id serial primary key,
    user_id integer,
    quantity integer default 1
);
