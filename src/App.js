import './App.css';
import React , { Component } from 'react';
import axios from 'axios';

class Room extends Component {
state = {
    room: [],
    status: []
  }

  componentDidMount() {
    axios
      .get('https://lambda-treasure-hunt.herokuapp.com/api/adv/init/' , { headers: { Authorization: 'Token dda434406f687265418a0e63333a042355b1fbfd' } })
      .then( res => {
        this.setState({
          room: res.data,
          status: res.data.cooldown
        });
        console.log( 'cool' , res.data.cooldown )
      })
      .catch(error => console.error(error));
  }

  // MOVE NORTH
  goN = () => (
    axios
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/' , {"direction":"n"} , { headers: { Authorization: 'Token dda434406f687265418a0e63333a042355b1fbfd' } })
      .then( res => {
        this.setState({
          room: res.data
        });
      })
      .catch(error => console.error(error))
  )

  // MOVE SOUTH
  goS = () => (
    axios
    .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/' , {"direction":"s"} , { headers: { Authorization: 'Token dda434406f687265418a0e63333a042355b1fbfd' } })
    .then( res => {
      this.setState({
        room: res.data
      });
    })
    .catch(error => console.error(error))
  )

  // MOVE EAST
  goE = () => (
    axios
    .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/' , {"direction":"e"} , { headers: { Authorization: 'Token dda434406f687265418a0e63333a042355b1fbfd' } })
    .then( res => {
      this.setState({
        room: res.data
      });
    })
    .catch(error => console.error(error))
  )

  // MOVE WEST
  goW = () => (
    axios
    .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/move/' , {"direction":"w"} , { headers: { Authorization: 'Token dda434406f687265418a0e63333a042355b1fbfd' } })
    .then( res => {
      this.setState({
        room: res.data
      });
    })
    .catch(error => console.error(error))
  )

  // COLLECT TREASURE
  collect = () => {
    axios
      .post('https://lambda-treasure-hunt.herokuapp.com/api/adv/take/' , {"name":"treasure"} , { headers: { Authorization: 'Token dda434406f687265418a0e63333a042355b1fbfd' } })
      .then( res => {
        this.setState({
          room: res.data
        });
      })
      .catch(error => console.error(error))
  }


  render() {
    console.log( this.state.room )
    return (
      <div className = 'App-header'>
        <img src={ 'https://cdnb.artstation.com/p/assets/images/images/007/931/391/original/adam-jufer-floatingmagepost.gif?1509428026' } className = 'avatar' />
        <div className = 'roomInfo'>
          <p>Id: { this.state.room.room_id }</p>
          <p>Title: { this.state.room.title }</p>
          <p>Description: { this.state.room.description }</p>
          <p>Coordinates: { this.state.room.coordinates }</p>
          <p>Exits: { this.state.room.exits }</p>
          <p>Messages: { this.state.room.messages }</p>
          <p>Cooldown: { this.state.room.cooldown }</p>
          <p>Terrain: { this.state.room.terrain }</p>
          <p>Items: { this.state.room.items }</p>
        </div>
        <div className='controls' >
          <button onClick = { this.goN } >North</button>
          <button onClick = { this.goS } >South</button>
          <button onClick = { this.goE } >East</button>
          <button onClick = { this.goW } >West</button>
          <button onClick = { this.collect } >Collect Treasure</button>
        </div>
      </div>
    );
  }
}

export default Room;
