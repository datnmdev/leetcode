# Write your MySQL query statement below
WITH
r1 AS (
    SELECT
        name AS results
    FROM
        MovieRating
    INNER JOIN
        Users
        ON MovieRating.user_id = Users.user_id
    GROUP BY
        MovieRating.user_id
    ORDER BY
        COUNT(*) DESC,
        name
    LIMIT 1
),
r2 AS (
    SELECT
        title AS results
    FROM
        MovieRating
    INNER JOIN
        Movies
        ON MovieRating.movie_id = Movies.movie_id
    WHERE
        YEAR(created_at) = 2020 AND MONTH(created_at) = 2
    GROUP BY
        MovieRating.movie_id
    ORDER BY
        AVG(rating) DESC,
        title
    LIMIT 1
)
SELECT * FROM r1
UNION ALL
SELECT * FROM r2
