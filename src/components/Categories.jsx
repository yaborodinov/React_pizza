import React from 'react'

function Ctegories({ items }) {
    return (
        <div>
            <div className="categories">
                <ul>
            <li className="active">Все</li>
            {items.map((item, index) =><li key={`${item}_${index}`}>{item}</li>)}
                  
                  
                </ul>
              </div>
        </div>
    )
}

export default Ctegories
