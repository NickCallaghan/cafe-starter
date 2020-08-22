import React, { useState } from "react"
import Lunch from "./lunch"
import Drinks from "./drinks"
import Dinner from "./dinner"

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState("lunch")
  let SelectedCategory
  if (menuCategory === "drinks") {
    SelectedCategory = Drinks
  } else if (menuCategory === "lunch") {
    SelectedCategory = Lunch
  } else if (menuCategory === "dinner") {
    SelectedCategory = Dinner
  }

  return (
    <section className="menu">
      <h2>OUR MENUS</h2>
      <ul className="menu-headers">
        <li className="menu-header" onClick={() => setMenuCategory("lunch")}>
          Lunch
        </li>
        <li className="menu-header" onClick={() => setMenuCategory("dinner")}>
          Dinner
        </li>
        <li className="menu-header" onClick={() => setMenuCategory("drinks")}>
          Drinks
        </li>
      </ul>
      <SelectedCategory />
    </section>
  )
}

export default Menu
