import React from "react";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  PizzaLoadingBlock
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";



const categoryNames = ["Мясные", "Веганские", "Гриль", "Острые", "Закрытые"];

const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цена", type: "price", order: "desc" },
  { name: "алфавит", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();

  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({ filters }) => filters);
 

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  },[dispatch]);
  
  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  },[dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />

        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
          : Array(10)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}


export default Home;
