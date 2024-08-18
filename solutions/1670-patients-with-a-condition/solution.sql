# Write your MySQL query statement below
SELECT
    *
FROM
    Patients
WHERE
    SUBSTR(conditions, 1, 5) = 'DIAB1' OR conditions LIKE '% DIAB1%'
