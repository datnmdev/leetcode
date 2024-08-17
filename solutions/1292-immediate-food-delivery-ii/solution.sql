# Write your MySQL query statement below
SELECT
    ROUND(COUNT(IF(order_date = customer_pref_delivery_date, 1, NULL)) * 100 / COUNT(*), 2) AS immediate_percentage
FROM
    (SELECT
        Delivery.*
    FROM
        (SELECT
            customer_id,
            MIN(order_date) AS order_date
        FROM
            Delivery
        GROUP BY
            customer_id) AS T
    INNER JOIN
        Delivery
        ON T.customer_id = Delivery.customer_id AND T.order_date = Delivery.order_date
    ) AS T
    
