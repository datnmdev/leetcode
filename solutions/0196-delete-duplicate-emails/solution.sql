# Write your MySQL query statement below
DELETE p
FROM
    Person p
LEFT JOIN
    (SELECT MIN(id) AS id FROM Person GROUP BY email) AS p_tmp
    ON p.id = p_tmp.id
WHERE
    p_tmp.id IS NULL
