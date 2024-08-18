# Write your MySQL query statement below
SELECT
    Sales.product_id,
    T.first_year,
    Sales.quantity,
    Sales.price
FROM
    (SELECT
        product_id,
        MIN(year) AS first_year
    FROM
        Sales
    GROUP BY 
        product_id) AS T
INNER JOIN
    Sales
    ON T.product_id = Sales.product_id AND T.first_year = Sales.year

