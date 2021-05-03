import React from "react";
import { Route } from "react-router-dom";
import axios from "axios"
import { setPizzas  } from "./redux/actions/pizzas"
import { useSelector, useDispatch } from "react-redux";

import { Header } from "./components";
import{Cart, Home} from "./pages"

function App() {
  
  const dispatch = useDispatch();
 
  const {items} = useSelector(({ pizzas, filter }) => {
    return {
      items: pizzas.items,
    }
  })

  

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas))
    })
  }, [dispatch])
  return (
    
      
      <div className="wrapper">
        <Header />        
        <div className="content">
          <Route path="/" render={()=><Home items={items} />} exact/>
          <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
  )
}



export default App;









