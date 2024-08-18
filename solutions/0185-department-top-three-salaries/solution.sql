# Write your MySQL query statement below
SELECT
    Department.name AS Department,
    e1.name AS Employee,
    salary AS Salary
FROM
    Employee e1
INNER JOIN
    Department
    ON e1.departmentId = Department.id
WHERE
    (SELECT
        COUNT(DISTINCT e2.salary)
    FROM
        Employee e2
    WHERE
        e2.departmentId = e1.departmentId AND e2.salary > e1.salary) < 3
