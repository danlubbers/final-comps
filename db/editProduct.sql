update products set title = $2, price = $3
where product_id = $1
returning title, price;