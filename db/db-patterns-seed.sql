-- SQLtabs One to One
select * from users
inner join info on info.users_id = users.user_id;

-- Postgres way to do the same thing above for one to one
select auth_id, email
from users, info
where users.user_id = info.users_id

-- ONE TO MANY --

-- JOIN --
select * from products
join cart on cart.product_id = products.product_id
where user_id = $1

-- Order by id maintains consistent order after updates database
order by cart_id;

-- MANY TO MANY --
select * from users
left outer join orders on users.user_id = orders.user_id
left outer join products on products.product_id = orders.product_id


-- ALTER TABLE ADD COLUMN
alter table products
    add sub_title text;

update products 
set sub_title = 'Weatherproof Laptop Backpack'
where product_id = 1;

update products 
set sub_title = 'Expandable Cargo Pack w/ Cobra Buckle'
where product_id = 2;

-- SubQuery
select title from products
where product_id = (
    select product_id from apparel
    where title = 'The Orion'
);