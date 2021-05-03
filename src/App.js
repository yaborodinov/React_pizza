import React from "react";
import { Route } from "react-router-dom";
import axios from "axios"
import { setPizzas  } from "./redux/actions/pizzas"
import {connect} from "react-redux"

import { Header } from "./components";
import{Cart, Home} from "./pages"
// import { render } from "@testing-library/react";
class App extends React.Component{

  // React.useEffect(() => {
  //   axios.get("http://localhost:3000/db.json").then(({data})=>setPizzas(data.pizzas))
  // },[])


  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    })
  
  }

  
  render() {
  return (
      
      <div className="wrapper">
        <Header />        
        <div className="content">
          <Route path="/" render={()=><Home items={this.props.items} />} exact/>
          <Route path="/cart" component={Cart} exact/>
        </div>
      </div>
  );
}
  
}


const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters:state.filters,
  }
}


const mapDispatchToProps = {
  setPizzas,
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
