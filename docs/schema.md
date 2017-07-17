<h2>Schema Information</h2>

<h3>users</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| username | string | not null, unique |
| email | string | not null, unique |
| password_digest | string | not null |
| session_token | string | not null |

<h3>restaurants</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| owner_id | integer | not null, foreign key |
| city_id | integer | not null, foreign key |
| name | string | not null |
| about | text | not null |
| hours | integer | not null |
| price | integer | not null |
| type | string | not null |
| photos | text | not null |
| address | string | not null |

<h3>reservations</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key |
| restaurant_id | integer | not null, foreign key |
| time | time | not null |
| date | date | not null |

<h3>reviews</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key |
| restaurant_id | integer | not null, foreign key |
| reservation_id | integer | not null, foreign key |
| rating | integer | not null |
| review | text | |

<h3>favorites</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| user_id | integer | not null |
| restaurant_id | integer | not null |


<h3>cities</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| name | string | not null |
| photos | string | not null |
