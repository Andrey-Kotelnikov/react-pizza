import React from 'react';

function Categories({ value, onChangeCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className='categories'>
      <ul>
        {categories.map((el, index) => (
          <li key={index} className={value === index ? 'active' : ''} onClick={() => onChangeCategory(index)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
