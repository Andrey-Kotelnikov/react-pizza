import React from 'react';
import { useParams } from 'react-router-dom';

function FullPizza() {
  const { pizzaId } = useParams();

  return (
    <div className='container'>
      <img src='' alt='' />
      <h2>{pizzaId}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptate earum laboriosam, ullam dicta quas.
        Sunt possimus, tenetur voluptatum voluptas quas amet beatae cumque quo doloribus! Vero, commodi. Quasi,
        pariatur.
      </p>
      <h4>250 ₽</h4>
    </div>
  );
}

export default FullPizza;
