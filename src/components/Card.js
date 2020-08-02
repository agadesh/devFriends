import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {
  return (
    <div className='card ba dib ma2 br3 bw1 b--navy shadow-5'>
      <img className='pa3' src={`https://robohash.org/set_set5/${id}?size=200x200`} alt='avatar' />
      <div>
        <h3 className='bg-light-blue pa3 mv0'>{name}</h3>
        <h5 className='bg-light-green pa2 mv2'>{email}</h5>
      </div>
    </div>
  );
};

export default Card;
