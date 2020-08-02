import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return robots.map(bot => <Card key={bot.id} id={bot.id} name={bot.name} email={bot.email} />);
};
export default CardList;
