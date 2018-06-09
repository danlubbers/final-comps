-- Users table for one to many with the cart
create table users (
    user_id serial primary key,
    auth_id varchar(45),
    username varchar(45)
);

-- customer table for one to one
create table customers (
    user_id serial primary key,
    name text,
    address_id text 
)

insert into customers (name, address_id) values ('Dan Lubbers', 1);
insert into customers (name, address_id) values ('Sunny Ra', 2);
insert into customers (name, address_id) values ('Que Nguyen', 3);
insert into customers (name, address_id) values ('Sarah Ventura', 4);

create table addresses (
    user_id serial primary key,
    address_id text REFERENCES customers (address_id),
    address text
)

insert into addresses (address) values ('Pomeroy Dr');
insert into addresses (address) values ('Sunfield Circle');
insert into addresses (address) values ('Boston');
insert into addresses (address) values ('Lanesville');

-- Products table
create table products (
    product_id serial primary key,
    title text,
    description text,
    price decimal,
    image text
);

insert into products (title, description, price, image) values ('The Rhake', 'Fully-featured weatherproof laptop backpack built to last a lifetime.', 365, 'https://cdn.shopify.com/s/files/1/1016/8373/products/grey_angle_09e1be36-9627-466b-b852-803e95041546_1024x1024.jpg?v=1518556761');

insert into products (title, description, price, image) values ('The Vandal', 'Our cargo packs feature a water-resistant main compartment which can be used in either "roll-top" mode, or in the traditional "flap-down" configuration.', 385, 'https://cdn.shopify.com/s/files/1/1016/8373/products/The_Vandal_Black_Camo_1024x1024_b218ceb4-b0dc-4123-a710-d9cdd0de1075_1024x1024.jpg?v=1527223175');

-- ALTER TABLE ADD COLUMN
alter table products
    add sub_title text;

update products 
set sub_title = 'Weatherproof Laptop Backpack'
where product_id = 1;

update products 
set sub_title = 'Expandable Cargo Pack w/ Cobra Buckle'
where product_id = 2;

-- Apparel table
create table apparel (
    product_id serial primary key,
    title text,
    description text,
    price decimal,
    image text
);

-- INSERT Apparel
insert into apparel (title, description, price, image) values ('The Orion', 'The Orion is packable, windproof, waterproof, and super-durable. It’s the ideal shell for biking, hiking, travel, and moving around the city.', 445, 'https://cdn.shopify.com/s/files/1/1016/8373/products/orion_slate_copy_4e388cf6-9a74-47f7-b865-d272c197d493_1024x1024.jpg?v=1515092833');

-- Cart table
create table cart (
    cart_id serial primary key,
    user_id integer,
    quantity integer default 1
);




-- SubQuery
select title from products
where product_id = (
    select product_id from apparel
    where title = 'The Orion'
);