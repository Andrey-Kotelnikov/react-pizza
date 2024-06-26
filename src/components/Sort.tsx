import React from 'react';
import { useDispatch } from 'react-redux';
import { TSort, sortPropertyEnum } from '../redux/filter/types';
import { setSort } from '../redux/filter/slice';

export const sortList: TSort[] = [
  { name: 'популярности ▼', sortProperty: sortPropertyEnum.RATING_DESC },
  { name: 'популярности ▲', sortProperty: sortPropertyEnum.RATING_ASC },
  { name: 'цене ▼', sortProperty: sortPropertyEnum.PRICE_DESC },
  { name: 'цене ▲', sortProperty: sortPropertyEnum.PRICE_ASC },
  { name: 'алфавиту ▼', sortProperty: sortPropertyEnum.TITLE_DESC },
  { name: 'алфавиту ▲', sortProperty: sortPropertyEnum.TITLE_ASC },
];

type SortProps = {
  value: TSort;
};

const Sort: React.FC<SortProps> = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const sortRef = React.useRef<HTMLDivElement>(null);
  const sortPopupRef = React.useRef<HTMLDivElement>(null);

  const [openPopup, setOpenPopup] = React.useState(false);

  const onClickSortItem = (obj: TSort) => {
    dispatch(setSort(obj));
    setOpenPopup(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const current = sortRef.current;
      const path = event.composedPath();
      if (current && !path.includes(current)) {
        setOpenPopup(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className='sort' ref={sortRef}>
      <div className='sort__label'>
        <svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z'
            fill='#2C2C2C'
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpenPopup((prev) => (prev = !prev))}>{value.name}</span>
      </div>
      {openPopup && (
        <div className='sort__popup' ref={sortPopupRef}>
          <ul>
            {sortList.map((obj, i) => (
              <li
                key={i}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}
                onClick={() => onClickSortItem(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});
export default Sort;
