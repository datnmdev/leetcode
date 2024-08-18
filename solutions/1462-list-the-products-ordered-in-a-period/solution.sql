# Write your MySQL query statement below
SELECT
    product_name,
    unit
FROM
    (SELECT
        product_id,
        SUM(unit) AS unit
    FROM
        Orders
    WHERE
        YEAR(order_date) = 2020 AND MONTH(order_date) = 2
    GROUP BY
        product_id
    HAVING
        unit >= 100) AS T
INNER JOIN
    Products
    ON T.product_id = Products.product_id
