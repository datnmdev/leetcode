# Write your MySQL query statement below
SELECT
    product_id,
    new_price AS price
FROM
    Products p1
WHERE
    change_date <= "2019-08-16"
    AND
    (
        SELECT
            COUNT(*)
        FROM
            Products p2
        WHERE
            p2.change_date <= "2019-08-16" AND p1.product_id = p2.product_id AND p2.change_date > p1.change_date
    ) = 0
UNION
SELECT
    product_id,
    10 AS price
FROM
    Products
GROUP BY
    product_id
HAVING
    MIN(change_date) > "2019-08-16"
