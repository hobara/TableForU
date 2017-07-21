import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from '../greeting_form/greeting_form_container';


class CityListItem extends Component {

  componentDidMount() {
    this.props.requestSingleCity(this.props.match.params.city_id);
  }
  //
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.city_id !== nextProps.match.params.city_id) {
      this.props.requestSingleCity(nextProps.match.params.city_id);
    }
  }

  render() {
    // let city;
    // let singleCity = this.props.state.id[this.props.match.params.city_id];
    // if (singleCity) {
    //   city = singleCity;
    // } else {
    //   return null;
    // }
    return (
      <div>
        <GreetingContainer />
        {window.location.hash}
        <div className='main-background'>
        </div>
        <section className=''>
          <ul>
            <span className=''>
              <h2>{this.props.name}</h2>
            </span>
            <span className=''>
              <h3>{this.props.image}</h3>
            </span>
            <span className=''>
              <h4>{this.props.city_id}</h4>
            </span>
          </ul>
          <ul>
            <Link to={`/`}>
              <span className='go-back-to-home'>Go Back To Home</span>
            </Link>
          </ul>
        </section>
      </div>
    );
  }
}

export default CityListItem;
