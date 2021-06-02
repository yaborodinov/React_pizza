import React from "react";
import { Route } from "react-router-dom";

import { fetchPizzas  } from "./redux/actions/pizzas"
import {  useDispatch } from "react-redux";

import { Header } from "./components";
import{Cart, Home} from "./pages"

function App() {

  const dispatch = useDispatch();   





  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [dispatch])
  return (


      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact/>
          <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
  )
}



export default App;









