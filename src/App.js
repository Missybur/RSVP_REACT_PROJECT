import React, { Component } from 'react';
import './App.css';
import GuestList from './GuestList';

class App extends Component {

  state = {
    guests: [
      {
        name: 'Matt',
        isConfirmed: false,
        isEditing: false
      },
        {
        name: 'Nick',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Kate',
        isConfirmed: false,
        isEditing: true
      }
    ]
  };

toggleGuestPropertyAt = (property, indexToChange) => 
  this.setState({
    guests: this.state.guests.map((guest, index) => {
      if ( index === indexToChange) {
        return {
          ...guest,
          [property]: !guest[property]
        };
      }
      return guest;
    })
  });

toggleConfirmationAt = index => 
  this.toggleGuestPropertyAt("isEditing", index);

toggleEditingAt = index => 
  this.toggleGuestPropertyAt("isConfirmed", index);


getTotalInvited = () => this.state.length;
// getAttendingGuests = () =>
// getUnconfirmedGuests = () =>




  render() {
    return (
          <div className="App">
      <header>
        <h1>RSVP</h1>
        <p>A MedMen App</p>
        <form>
            <input type="text" value="Name" placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <label>
            <input type="checkbox" /> Hide those who haven't responded
          </label>
        </div>
        <table className="counter">
          <tbody>
            <tr>
              <td>Attending:</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Unconfirmed:</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>3</td>
            </tr>
          </tbody>
        </table>

        <GuestList 
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt} 
          toggleEditingAt={this.toggleEditingAt}/>
      </div>
    </div>
    );
  }
}

export default App;
