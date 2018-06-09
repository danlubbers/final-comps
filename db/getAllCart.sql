-- ONE TO MANY --

-- JOIN --
select * from products
join cart on cart.product_id = products.product_id
where user_id = $1
-- Order by id maintains consistent order after updates database
order by cart_id;