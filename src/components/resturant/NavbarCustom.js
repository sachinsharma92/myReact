import React from 'react'

export const NavbarCustom = ({ filterItem, menuList }) => {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {menuList.map((curElem) => (
        <button type="button" className="btn btn-primary" onClick={() => filterItem(curElem)}>{curElem}</button>
      ))}
    </div>
  )
}
