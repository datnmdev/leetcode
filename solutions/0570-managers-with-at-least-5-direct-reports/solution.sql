# Write your MySQL query statement below
SELECT
    name
FROM
    (SELECT
        managerId,
        COUNT(*) AS count
    FROM
        Employee
    WHERE
        managerId IS NOT NULL
    GROUP BY
        managerId
    HAVING
        count >= 5) AS T
INNER JOIN
    Employee
    ON T.managerId = Employee.id

