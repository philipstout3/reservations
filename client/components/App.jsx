import React from 'react';
import Date from './Date.jsx';
import Booked from './Booked.jsx';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: Math.round(Math.random() * 100) || 0,
      date: '2019-02-14',
      time: '19:00',
      partySize: 2
    };

    this.changeDate = this.changeDate.bind(this);
  }

  changeDate(event, date) {
    event.preventDefault();
    if (moment().isSameOrBefore(date, 'day')) {
      this.setState(
        {
          date: date
        },
        () => {
          console.log('save the date!', this.state.date);
        }
      );
    }
  }

  render() {
    return (
      <div>
        <h3>Make a reservation</h3>

        <div id="party">
          Party Size
          <select>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <div id="datetime">
          <Date change={this.changeDate} />
          <div id="time">
            <select>
              <option>6:30 PM</option>
              <option>7:00 PM</option>
              <option>7:30 PM</option>
            </select>
          </div>
        </div>

        <div id="find">
          <button>Find a Table</button>
        </div>

        <Booked rest={this.state.restaurantId} />

        <div id="count">You're in luck! We still have x timeslots left</div>
      </div>
    );
  }
}

export default App;
