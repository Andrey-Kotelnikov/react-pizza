import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: any;
};

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  const categories: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

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
