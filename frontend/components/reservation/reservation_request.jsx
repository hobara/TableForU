import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Modal from 'react-modal';

const TIME_SLOT = {
  "1": [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM"
  ],
  "2": [
    "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
    "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM"
  ],
  "3": [
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM"
  ],
  "4": [
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM",
    "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"
  ]
};

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(400, 400, 400, 0.30)',
    zIndex: 10
  },
  content: {
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    position: 'relative',
    marginTop: '80px',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '300px',
    border: '1px solid #ccc',
    padding: '10px',
    zIndex: 900,
    overflow: 'auto'
  }
};

let contentLabel = 'reserve';

class ReservationRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      // showResult: false,
      seats: '2',
      date: '',
      time: '',
      // timeSlots: [],
      // selectedTime: ''

      // TIME_SLOT[this.props.restaurant.hours]
    };

    this.renderResult = this.renderResult.bind(this);
    this.handleSeats = this.handleSeats.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showTimeSlot = this.showTimeSlot.bind(this);
    this.handleReserve = this.handleReserve.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  update(key) {
    return event => this.setState({
      [key]: event.currentTarget.value
    });
  }

  showTimeSlot() {
    // console.log(this.props);
    if (this.props.restaurant.hours === 1) {
      return(
        <select className='reservation-request-time'
          onChange={this.handleTime}
          value={this.state.time}
          >
          <option value='5:00 PM'>5:00 PM</option>
          <option value='6:00 PM'>6:00 PM</option>
          <option value='7:00 PM'>7:00 PM</option>
          <option value='8:00 PM'>8:00 PM</option>
        </select>
      );
    } else if (this.props.restaurant.hours === 2) {
      return(
        <select className='reservation-request-time'
          onChange={this.handleTime}
          value={this.state.time}
          >
          <option value='5:00 PM'>5:00 PM</option>
          <option value='6:00 PM'>6:00 PM</option>
          <option value='7:00 PM'>7:00 PM</option>
          <option value='8:00 PM'>8:00 PM</option>
          <option value='9:00 PM'>9:00 PM</option>
        </select>
      );
    } else if (this.props.restaurant.hours === 3) {
      return(
        <select className='reservation-request-time'
          onChange={this.handleTime}
          value={this.state.time}
          >
          <option value='6:00 PM'>6:00 PM</option>
          <option value='7:00 PM'>7:00 PM</option>
          <option value='8:00 PM'>8:00 PM</option>
          <option value='9:00 PM'>9:00 PM</option>
        </select>
      );
    } else if (this.props.restaurant.hours === 4) {
      return(
        <select className='reservation-request-time'
          onChange={this.handleTime}
          value={this.state.time}
          >
          <option value='6:00 PM'>6:00 PM</option>
          <option value='7:00 PM'>7:00 PM</option>
          <option value='8:00 PM'>8:00 PM</option>
          <option value='9:00 PM'>9:00 PM</option>
          <option value='10:00 PM'>10:00 PM</option>
        </select>
      );
    }
  }


  handleSeats(event) {
    console.log(this.state);
    this.setState({seats: event.currentTarget.value});
  }

  handleDate(event) {
    console.log(this.state);
    this.setState({date: event.currentTarget.value});
  }

  handleTime(event) {
    console.log(this.state);
    this.setState({time: event.currentTarget.value});
  }


  handleClick() {
    console.log(this.state);
    console.log(this.props);

    this.openModal();


    // this.renderResult();
    // window.location.href = window.location.href;
  }

  renderResult() {
    const selectedTime = this.state.time;
    const timeSlots = TIME_SLOT[this.props.restaurant.hours];
    if (timeSlots !== undefined) {
      const idx = timeSlots.indexOf(selectedTime);
      const availableSlots = timeSlots.slice(idx);
      return(
        <div className='available-slots'>
          <section>Name: {window.store.getState().currentUser.username}</section>
          <section>Date: {this.state.date}</section>
          <section>Guests: {this.state.seats}</section>
          {availableSlots.map((slot, i) =>
            <section key={i} className='slot-item'>
              <span onClick={this.handleReserve}>{slot}</span>
            </section>
          )}
        </div>
      );
    }
  }

  handleReserve() {
    console.log(this.state);
    console.log(this.props);
    this.closeModal();
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
              <select className='reservation-request-seats'
                onChange={this.handleSeats}
                value={this.state.seats}>
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
              <input type='date' className='reservation-request-date' value={today}
                onChange={this.handleDate}
                value={this.state.date}/>
              {this.showTimeSlot()}
              <span className='reservation-request-button'
                 onClick={this.handleClick}>Find a Table</span>
            </form>
          </div>

          <Modal
            style={style}
            contentLabel={contentLabel}
            isOpen={this.state.modalOpen === true}
            className='reservation-form'
            onRequestClose={() => this.closeModal()}
            >
            <span className='signup-modal-container'>
              <span className='signup-form-header'>Please select time</span>
              {this.renderResult()}
              <span className='signup-button' onClick={this.handleReserve}>Reserve seats!</span>
            </span>
          </Modal>

        </div>
    );
  }
}


export default ReservationRequestForm;
