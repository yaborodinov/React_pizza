import React from 'react'
import PropTypes from "prop-types";


const Categories = React.memo(function ({ activeCategory, items, onClickCategory }) {



  return (
    <div>
      <div className="categories">
        <ul>
          <li
            className={activeCategory === null ? "active" : ""}
            onClick={() => onClickCategory(null)}
          >
            Все
          </li>
          {items &&
            items.map((item, index) => (
              <li
                className={activeCategory === index ? "active" : ""}
                onClick={() => onClickCategory(index)}
                key={`${item}_${index}`}
              >
                {item}
              </li>
            ))}
          {/* проверка на  undefind*/}
        </ul>
      </div>
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func ,
};

Categories.defaultProps = { activeCategory: null, items: [], }


export default Categories
