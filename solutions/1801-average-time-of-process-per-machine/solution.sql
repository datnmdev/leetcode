# Write your MySQL query statement below
SELECT
    machine_id,
    ROUND(AVG(completed_time), 3) AS processing_time
FROM
    (SELECT
        start_activities.machine_id as machine_id,
        (end_activities.timestamp - start_activities.timestamp) AS completed_time
    FROM
        (SELECT
            *
        FROM
            Activity
        WHERE
            activity_type = 'start') AS start_activities
    INNER JOIN
        (SELECT
            *
        FROM
            Activity
        WHERE
            activity_type = 'end') AS end_activities
        ON start_activities.machine_id = end_activities.machine_id AND start_activities.process_id = end_activities.process_id) AS tmp_table
GROUP BY
    machine_id
