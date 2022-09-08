import React from 'react'

export const MenuCard = ({ menuData }) => {
  return (
    <>
      {menuData.map((curElem) => (
        <div className="col-sm-4" key={curElem.id}>
          <div className="card m-2">
            <img src={curElem.image} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{curElem.id}</h5>
              <h5 className="card-title">{curElem.name}</h5>
              <h6 className="card-title">{curElem.category}</h6>
              <h3 className="card-title">{curElem.price}</h3>
              <p className="card-text">{curElem.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
