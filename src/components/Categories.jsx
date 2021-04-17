import React from 'react'


// class Categories extends React.Component{

//   state = {
//     activeItem:2,
//   }

//   activeItem = (item) => {
//     this.setState({
//       activeItem:item
//     })
//   }
 
//   render() {
    
//     const { items } = this.props
    
    

//     return (
//         <div>
//             <div className="categories">
//                 <ul>
//             <li >Все</li>
//             {items.map((item, index) => <li
//               className={this.state.activeItem===index?"active":""}
//               onClick={()=>this.activeItem(index)}
//               key={`${item}_${index}`}>{item}</li>)}
                  
//                 </ul>
//               </div>
//         </div>
      
//     )
//   }
// }





function Categories({ items }) {
  const [activeItem, setActiveItem] = React.useState(null);


 

  const selectItem = (index) => {
    setActiveItem(index)
  }



    return (
        <div>
          <div className="categories">
            <ul>
            <li className={activeItem===null?"active":""} onClick={() => selectItem(null)}>Все</li>
              {items && items.map((item,index) => <li className={activeItem===index?"active":""} onClick={()=>selectItem(index)}  key={`${item}_${index}`}>{ item}</li>)}  {/* проверка на  undefind*/}
            </ul>
          </div>
        </div>
    )
}

export default Categories
