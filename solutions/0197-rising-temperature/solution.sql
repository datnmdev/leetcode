# Write your MySQL query statement below
SELECT
    W1.id as id
FROM
    Weather W1
INNER JOIN
    Weather W2
    ON ADDDATE(W1.recordDate, INTERVAL -1 DAY) = W2.recordDate AND W1.temperature > W2.temperature
