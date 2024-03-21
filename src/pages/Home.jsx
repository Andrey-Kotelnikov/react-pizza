import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const [categoryId, setCategoryId] = React.useState(0);
  const [currentSort, setcurrentSort] = React.useState({
    name: "популярности ▼",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    const categoty = categoryId > 0 ? "category=" + categoryId : "";
    const sortBy = currentSort.sortProperty.replace("-", "");
    const order = currentSort.sortProperty.includes("-") ? "asc" : "desc";

    setIsLoading(true);
    fetch(
      `https://65fae2e83909a9a65b1bd70a.mockapi.io/items?${categoty}&sortBy=${sortBy}&order=${order}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, currentSort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
        />
        <Sort value={currentSort} onChangeSort={(id) => setcurrentSort(id)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
}

export default Home;
