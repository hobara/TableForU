<h2>Component Hierarchy</h2>

<h3>HomeContainer</h3>

* HeaderContainer
* RestaurantSearchContainer
* CityIndex
* AddRestaurantContainer

<h3>CityContainer</h3>

* HeaderContainer
* RestaurantSearchContainer
* RestaurantIndex
* ReviewContainer

<h3>RestaurantContainer</h3>

* HeaderContainer
* RestaurantItems
* ReviewContainer

<h3>UserContainer</h3>

* ReservationContainer
* RestaurantContainer
* FavoriteContainer

<h4>AuthFormContainer</h4>

* AuthForm

<h4>HeaderContainer</h4>

* HeaderItem

<h4>RestaurantSearchContainer</h4>

* RestaurantSearchItem

<h4>AddRestaurantContainer</h4>

* AddRestaurantItem

<h4>ReservationContainer</h4>

* ReservationIndex
* ReservationIndexItem

<h4>ReviewContainer</h4>

* ReviewIndex
* ReviewIndexItem

<h4>FavoriteContainer</h4>

* FavoriteIndex
* FavoriteIndexItems


<h2>Routes</h2>

| Path | Component |
| --- | ---|
| "/sign-up" | AuthFormContainer |
| "/sign-in" | AuthFormContainer |
| "/home" | HomeContainer |
| "/city" | CityContainer |
| "/restaurant/:reservation_id" | RestaurantContainer |
| "/user" | UserContainer |
| "/user/:user_id/reservation" | ReservationContainer |
| "/user/:user_id/favorite" | FavoriteContainer |
| "/restaurant/restaurant_id/review" | ReviewContainer |
