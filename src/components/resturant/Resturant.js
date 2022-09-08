import React, { useState } from 'react';
import Menu from "./menuApi"
import { MenuCard } from './MenuCard';
import { NavbarCustom } from './NavbarCustom';

// Style
import "./styles.scss";


const uniqueList = [...new Set(Menu.map((curElem) => {
  return curElem.category;
})), "All"]


export const Resturant = () => {

  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    })
    setMenuData(updatedList);
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-sm-12">
          <NavbarCustom filterItem={filterItem} menuList={menuList} />
        </div>
        <MenuCard menuData={menuData} />
      </div>
    </div>
  )
}