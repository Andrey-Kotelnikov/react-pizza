import React from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const FullPizza: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const { pizzaId } = useParams();

  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

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
    return <></>;
  }

  return (
    <div className='container'>
      <img src={pizza.imageUrl} alt='Пицца' />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
      <Link to='/'>
        <button className='button button--outline button--add'>
          <span>Назад</span>
        </button>
      </Link>
    </div>
  );
};

export default FullPizza;
