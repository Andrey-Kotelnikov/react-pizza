import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { SearchContext } from '../App';

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  React.useEffect(() => {
    const category = categoryId > 0 ? 'category=' + categoryId : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? 'search=' + searchValue : '';

    setIsLoading(true);
    fetch(
      `https://65fae2e83909a9a65b1bd70a.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  let pizzas = [];
  if (Array.isArray(items)) {
    pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  }

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(num) => setCurrentPage(num)} />
    </div>
  );
}

export default Home;
