import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
    const setActive = (active) => active.isActive  ? 'active' : '';   
    const car = {
        name:'BMW',
        color:'Black'
    }
    const {name, color} = car;

    // const name = car
    // const color = car.color
    console.log(name)
    console.log(color)

    return(
        <>
            {/* Header */}
            <header className="w3-container w3-center w3-padding-32 menu" >
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/catalog" className={setActive}>Каталог</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={setActive}>О нас</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form" className={setActive}>Обратная связь</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;