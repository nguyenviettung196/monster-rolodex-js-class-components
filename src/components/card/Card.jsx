import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div key={id} className='card-container'>
        <img src={`https://robohash.org/${ id }?set=set2&size=180x180`} alt={`monster ${ name }`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}
