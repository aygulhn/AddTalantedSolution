import React from "react";
import {NavLink} from "react-router-dom";
import {INavItem} from "../../Interfaces/INavItem";

type ItemProps = {
    item: INavItem,
}


const Item: React.FC<ItemProps> = ({item}) => {

    return (
        <li className="nav-item">
            <NavLink className={"nav-link " + (item.isActive ? 'active-link' : '')}
                     to={item.link} exact>
                <img src={item.icon} id={item.id}/>
            </NavLink>
        </li>
    )
}

export default Item