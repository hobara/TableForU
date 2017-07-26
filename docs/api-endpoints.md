<Auto restaurants={this.props.restaurants} autoValue={this.state.autoValue}/>

<h2>API Endpoints</h2>

<h3>Root</h3>

* GET / load React web application

<h3>User</h3>

* POST /api/user
* PATCH /api/user

<h3>Session</h3>

* POST /api/session
* DELETE /api/session

<h3>City</h3>

* GET /api/city
* GET /api/city/:id
* PATCH /api/city/:id

<h3>Restaurant</h3>

* GET /api/restaurant
* POST /api/restaurant
* GET /api/restaurant/:id
* PATCH api/restaurant/:id
* DELETE api/restaurant/:id

<h3>Reservation</h3>

* GET /api/user/reservation
* POST /api/user/reservation
* GET /api/user/reservation/:id
* DELETE api/user/reservation/:id

<h3>Review</h3>

* GET /api/restaurant/review
* POST /api/restaurant/review
* GET /api/restaurant/review/:id
* PATCH api/restaurant/review/:id
* DELETE api/restaurant/review/:id

<h3>Favorite</h3>

* GET /api/user/favorite
* POST /api/user/favorite
* DELETE api/user/favorite/:id
