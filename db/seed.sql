CREATE TABLE item (
item_id SERIAL PRIMARY key,
name TEXT,
size TEXT,
price numeric
);

INSERT INTO item (name,size, price)
VALUES ('ball','large',10),('snowboard','small',200),('sports bag','XXL',70);