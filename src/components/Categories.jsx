import React from 'react'


class Categories extends React.Component{

  state = {
    activeItem:2,
  }

  activeItem = (item) => {
    this.setState({
      activeItem:item
    })
  }
 
  render() {
    
    const { items } = this.props
    
    

    return (
        <div>
            <div className="categories">
                <ul>
            <li >Все</li>
            {items.map((item, index) => <li
              className={this.state.activeItem===index?"active":""}
              onClick={()=>this.activeItem(index)}
              key={`${item}_${index}`}>{item}</li>)}
                  
                </ul>
              </div>
        </div>
      
    )
  }
}





// function Categories({ items,onCategoryClick }) {
  
//     return (
//         <div>
//             <div className="categories">
//                 <ul>
//             <li className="active">Все</li>
//             {items.map((item,index) => <li onClick={()=>onCategoryClick(item)}  key={`${item}_${index}`}>{ item}</li>)}
                  
//                 </ul>
//               </div>
//         </div>
//     )
// }

export default Categories
