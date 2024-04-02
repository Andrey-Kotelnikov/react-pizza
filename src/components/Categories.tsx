import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (i: number) => void;
};

const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
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
};

export default Categories;
