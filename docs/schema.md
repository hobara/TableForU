<h2>Schema Information</h2>

<h3>user</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| username | string | not null, unique |
| email | string | not null, unique |
| password_digest | string | not null |
| session_token | string | not null |

<h3>city</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| name | string | not null |
| images | string | not null |

<h3>restaurant</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| owner_id | integer | not null, foreign key |
| city_id | integer | not null, foreign key |
| name | string | not null |
| about | text | not null |
| hours | integer | not null |
| price | integer | not null |
| type | integer | not null |
| images | text | not null |
| address | string | not null |
| rating | integer | not null |

<h3>reservation</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key |
| restaurant_id | integer | not null, foreign key |
| time | integer | not null |
| date | string | not null |
| seats | integer | not null |

<h3>favorite</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| user_id | integer | not null |
| restaurant_id | integer | not null |

<h3>review</h3>

| Column Name | Column Type | Requires |
| --- | --- | --- |
| id | integer | not null, primary key |
| user_id | integer | not null, foreign key |
| restaurant_id | integer | not null, foreign key |
| reservation_id | integer | not null, foreign key |
| rating | integer | not null |
| comment | text | |
