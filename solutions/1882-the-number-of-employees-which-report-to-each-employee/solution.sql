# Write your MySQL query statement below
SELECT
    Employees.reports_to AS employee_id,
    E2.name,
    COUNT(*) AS reports_count,
    ROUND(AVG(Employees.age)) AS average_age
FROM
    Employees
INNER JOIN
    Employees AS E2
    ON Employees.reports_to = E2.employee_id
WHERE
    Employees.reports_to IS NOT NULL
GROUP BY
    Employees.reports_to
ORDER BY
    employee_id
