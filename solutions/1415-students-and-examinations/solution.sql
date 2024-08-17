# Write your MySQL query statement below
SELECT
    Students.student_id,
    student_name,
    subject_name,
    COUNT(*) AS attended_exams
FROM
    Students
INNER JOIN
    Examinations
    ON Students.student_id = Examinations.student_id
GROUP BY
    Students.student_id,
    subject_name
UNION
    SELECT DISTINCT
        Students.student_id,
        student_name,
        Subjects.subject_name,
        0 AS attended_exams
    FROM
        Students
    INNER JOIN
        Subjects
    LEFT JOIN
        Examinations
        ON Students.student_id = Examinations.student_id AND Subjects.subject_name = Examinations.subject_name
    WHERE
        Examinations.student_id IS NULL 
ORDER BY
    student_id,
    subject_name
