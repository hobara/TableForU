import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


class ReservationRequestForm extends Component {
  constructor(props) {
    super(props);


    this.renderResult = this.renderResult.bind(this);

  }



  renderResult() {
    console.log(this.props.currentUser.reservation);
    console.log(this.state);
    return(
      <div className='hiii'>
      </div>
    );

  }


  render() {
    let today = new Date().toJSON().slice(0,10);

    return(
        <div className='reservation-request-search'>
          <div className='reservation-request-header'>
            <h3>Make a reservation</h3>
          </div>
          <div className='reservation-request-bar'>
            <form className='reservation-request-form'>
              <select className='reservation-request-seats' defaultValue='2'>
                <option value='1'>1 person</option>
                <option value='2'>2 people</option>
                <option value='3'>3 people</option>
                <option value='4'>4 people</option>
                <option value='5'>5 people</option>
                <option value='6'>6 people</option>
                <option value='7'>7 people</option>
                <option value='8'>8 people</option>
                <option value='9'>9 people</option>
                <option value='10'>10 people</option>
              </select>
              <input type='date' className='reservation-request-date' defaultValue={today}/>
              <select className='reservation-request-time'>
                <option value='6'>6:00 PM</option>
                <option value='7'>7:00 PM</option>
                <option value='8'>8:00 PM</option>
                <option value='9'>9:00 PM</option>
                <option value='10'>10:00 PM</option>
                <option value='11'>11:00 PM</option>
              </select>
              <input type='submit' value='Find a Table'className='reservation-request-button' onClick={this.handleClick} />
            </form>
          </div>
          {this.renderResult()}
        </div>
    );
  }
}


export default ReservationRequestForm;
