# Write your MySQL query statement below
SELECT
    ROUND(COUNT(*) / (SELECT COUNT(*) FROM (SELECT DISTINCT player_id FROM Activity) AS T), 2) AS fraction
FROM
    (SELECT
        player_id,
        MIN(event_date) AS min_event_date
    FROM
        Activity
    GROUP BY
        player_id) AS T
INNER JOIN
    Activity
    ON T.player_id = Activity.player_id AND ADDDATE(T.min_event_date, INTERVAL 1 DAY) = Activity.event_date
