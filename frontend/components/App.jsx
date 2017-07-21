import React from 'react';
import { Route, Link } from 'react-router-dom';
import GreetingContainer from './greeting_form/greeting_form_container';
import SignUpModalContainer from './signup_form/signup_modal_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>

    <header>
      <GreetingContainer />
    </header>

    <div className='main-background'>
    </div>

    <div>
      <div className='city-lists'>
        <section className='city-lists-title'>
          Featured Cities
        </section>
        <section id='featured-cities'>
          <div className='row-1'>
            <span className='city-lists-1-1'>New York</span>
            <span className='city-lists-1-2'>Los Angeles</span>
            <span className='city-lists-1-3'>Chicago</span>
          </div>
          <div className='row-2'>
            <span className='city-lists-2-1'>San Francisco</span>
            <span className='city-lists-2-2'>Washington DC</span>
            <span className='city-lists-2-3'>Austin</span>
          </div>
        </section>
        <section className='featured-cities-lists'>
          <section className='city-row1'>
            <span className='city'>San Francisco</span>
            <span className='city'>Los Angeles</span>
            <span className='city'>Seattle</span>
            <span className='city'>Chicago</span>
          </section>
          <section className='city-row2'>
            <span className='city'>Austin</span>
            <span className='city'>New York</span>
            <span className='city'>Washington DC</span>
            <span className='city'>Toronto</span>
          </section>
        </section>

        <section className='city-lists-title'>
          International Cities
        </section>
        <section className='international-cities'>
          <div className='row-3'>
            <span className='city-lists-3-1'>Singapore</span>
            <span className='city-lists-3-2'>Tokyo</span>
            <span className='city-lists-3-3'>Paris</span>
          </div>
        </section>
        <section className='city-row3'>
          <span className='city'>Singapore, SG</span>
          <span className='city'>Tokyo, JP</span>
          <span className='city'>Osaka, JP</span>
          <span className='city'>Paris, FR</span>
        </section>
      </div>
    </div>

  </div>
);

export default App;
