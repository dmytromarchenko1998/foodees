import React from 'react';
// import Calendar from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';
 
class ReservationCalendar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
    this.onChange = this.onChange.bind(this)
  }
 
  onChange (date) {
    this.setState({
      date: date 
    })
    this.props.func(date)
  }
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default ReservationCalendar