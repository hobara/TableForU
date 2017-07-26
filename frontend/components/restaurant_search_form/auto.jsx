import React from 'react';
import { connect } from 'react-redux';
import { requestAllRestaurant, requestSingleRestaurant } from '../../actions/restaurant_actions';
// import ReactCSSTransitionGroup from 'react-addons-css-trainsition-group';


class AutoComplete extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {


    return(
        <div>

        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
  restaurant: state.restaurant,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestAllRestaurant: () => dispatch(requestAllRestaurant()),
  requestSingleRestaurant: (id) => dispatch(requestSingleRestaurant(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoComplete);
