import React from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function FullPizza() {
  const navigate = useNavigate();
  const { pizzaId } = useParams();

  const [pizza, setPizza] = React.useState();

  React.useEffect(() => {
    axios
      .get(`https://65fae2e83909a9a65b1bd70a.mockapi.io/items/${pizzaId}`)
      .then((res) => setPizza(res.data))
      .catch((err) => {
        alert('Ошибка');
        navigate('/');
      });
  }, []);

  if (!pizza) {
    return '';
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt='Пицца' />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
}

export default FullPizza;
