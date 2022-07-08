import React from 'react';
import Stars from './Stars';
const Starshow = () => {
  let stars = [];
  for (let i = 0; i < 40; i++) {
    stars.push(<Stars key={i} />);
  }
  return <div>{stars}</div>;
};

export default Starshow;