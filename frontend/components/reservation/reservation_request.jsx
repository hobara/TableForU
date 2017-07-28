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
    maxWidth: '305px',
    border: '1px solid #ccc',
    padding: '10px',
    zIndex: 10,
    overflow: 'auto'
  }
};

let contentLabel = 'reserve';

class ReservationRequestForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: '',
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
    this.goToProfile = this.goToProfile.bind(this);
    // this.handleReserved = this.handleReserved.bind(this);
  }

  componentWillMount() {
    this.props.requestAllReservation();
  }
  //
  // componentWillUnmount() {
  //   this.props.resetReservation();
  // }



  closeModal() {
    this.setState({ modalOpen: '' });
  }

  openModal(name) {
    this.setState({ modalOpen: name });
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
    this.setState({seats: event.currentTarget.value});
  }

  handleDate(event) {
    this.setState({date: event.currentTarget.value});
  }

  handleTime(event) {
    this.setState({time: event.currentTarget.value});
  }


  handleClick() {
    if (this.state.date === '' && this.state.time === '') {
      window.alert('Please select date and time.');
    } else if (this.state.date === '') {
      window.alert('Please select date.');
    } else if (this.state.time === '') {
      window.alert('Please select time.');
    } else {
     this.openModal('reserve');
   }

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
        <div className='available-slot'>
          <section className='slot-list-name'>Name: &nbsp; {window.store.getState().currentUser.username}</section>
          <section className='slot-list-date'>Date: &nbsp; {this.state.date}</section>
          <section className='slot-list-guest'>Number of Guests: &nbsp; {this.state.seats}</section>
          <section className='slot-list'>
            {availableSlots.map((slot, i) =>
              <span key={i} onClick={this.handleReserve} className='slot-item'>{slot}</span>
            )}
          </section>
        </div>
      );
    }
  }

  handleReserve() {
    let res = {};
    res.date = this.state.date;
    res.seats = parseInt(this.state.seats);
    res.time = this.state.time;
    res.user_id = this.props.currentUser.id;
    res.restaurant_id = this.props.restaurant.id;
    console.log(res);
    this.props.createReservation({reservation: res});
    // console.log(this.props);
    // this.props.currentUser.reservations.push({})
    // this.handleReserved();
    this.openModal('reserved');
  }

  goToProfile() {
    window.location.href = window.location.origin + `/#/users/${this.props.currentUser.id}`;
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
            isOpen={this.state.modalOpen === 'reserve'}
            className='reservation-form'
            onRequestClose={() => this.closeModal()}
            >
            <span className='reservation-modal-container'>
              <span className='reservation-select-time'>Select time for reservation</span>
              {this.renderResult()}
            </span>
          </Modal>

          <Modal
            style={style}
            contentLabel={contentLabel}
            isOpen={this.state.modalOpen === 'reserved'}
            className='reservation-form'
            onRequestClose={() => this.closeModal()}
            >
            <span className='reservation-modal-container'>
              <span className='reservation-select-time'>Thank you for reservation!</span>
              <span className='go-to-user-profile' onClick={() => this.goToProfile()}>View reservation</span>
            </span>
          </Modal>

        </div>
    );
  }
}


export default ReservationRequestForm;
