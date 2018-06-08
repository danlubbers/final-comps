-- Users table
create table users (
    user_id serial primary key,
    auth_id varchar(45),
    username varchar(45)
);

-- Products table
create table products (
    product_id serial primary key,
    title text,
    description text,
    price decimal,
    image text,
);

-- Cart table
create table cart (
    cart_id serial primary key,
    user_id integer,
    quantity integer default 1
);

insert into products (title, description, price, image) values ('The Rhake', 'Fully-featured weatherproof laptop backpack built to last a lifetime.', 365, 'https://cdn.shopify.com/s/files/1/1016/8373/products/grey_angle_09e1be36-9627-466b-b852-803e95041546_1024x1024.jpg?v=1518556761');

insert into products (title, description, price, image) values ('The Vandal', 'Our cargo packs feature a water-resistant main compartment which can be used in either "roll-top" mode, or in the traditional "flap-down" configuration.', 385, 'https://cdn.shopify.com/s/files/1/1016/8373/products/The_Vandal_Black_Camo_1024x1024_b218ceb4-b0dc-4123-a710-d9cdd0de1075_1024x1024.jpg?v=1527223175');