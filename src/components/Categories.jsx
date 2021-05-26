import React from 'react'



const Categories = React.memo(function ({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const selectItem = (index) => {
    setActiveItem(index);
    onClickItem(index);
  };


  return (
    <div>
      <div className="categories">
        <ul>
          <li
            className={activeItem === null ? "active" : ""}
            onClick={() => selectItem(null)}
          >
            Все
          </li>
          {items &&
            items.map((item, index) => (
              <li
                className={activeItem === index ? "active" : ""}
                onClick={() => selectItem(index)}
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

export default Categories
