# Write your MySQL query statement below
SELECT
    T.employee_id
FROM
    (SELECT
        *
    FROM
        Employees
    WHERE
        manager_id IS NOT NULL AND salary < 30000) AS T
LEFT JOIN
    Employees
    ON T.manager_id = Employees.employee_id
WHERE
    Employees.employee_id IS NULL
ORDER BY
    T.employee_id 
