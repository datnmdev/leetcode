# Write your MySQL query statement below
SELECT
    (CASE MOD(id, 2)
    WHEN 1 THEN
        CASE (SELECT COUNT(*) FROM Seat) 
        WHEN id THEN id
        ELSE id + 1
        END
    ELSE id - 1
    END) AS id,
    student
FROM
    Seat
ORDER BY
    id
