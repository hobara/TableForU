import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class ReviewLists extends Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    const allIds = Object.keys(this.props.restaruant.reviews);
    let reviewList = [];
    allIds.forEach((assignedId) => {
      let obj = {};
      obj[assignedId] = this.props.restaruant.reviews[assignedId];
      reviewList.push(obj);
    });
    let totalRate = 0;
    reviewList.forEach((review) => {
      totalRate = totalRate + Object.values(review).rate;
    });
    const averageRate = Math.floor(totalRate / reviewList.length);


    <section className='review-rate'>
      Overall Rate: {averageRate}
    </section>;
    reviewList.map((review, idx) =>
      <section key={idx} className='review-item'>
        <section className='review-item-header'>
          {review.rate}
          {review.user_id}
          {review.created_at}
        </section>
        <section className='review-item-comment'>
          {review.comment}
        </section>
      </section>
    );

  }



  render() {


    console.log(this.props);
    return(
      <div className='review-lists-container'>
        <section className='review-lists-title'>
          {this.props.restaurant.name} Ratings and Reviews
        </section>

      </div>
    );

  }
}

export default ReviewLists;
