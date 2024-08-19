# Write your MySQL query statement below
SELECT
    person_name
FROM
    (SELECT
        *
    FROM
        Queue
    ORDER BY
        turn) AS T
WHERE
    1000 >= (
        SELECT
            SUM(weight)
        FROM
            Queue
        WHERE
            Queue.turn <= T.turn
    )
ORDER BY
    turn DESC
LIMIT 1 OFFSET 0
