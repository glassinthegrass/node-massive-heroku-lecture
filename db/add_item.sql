INSERT INTO item(name,size,price)
VALUES ($1,$2,$3)
returning *;