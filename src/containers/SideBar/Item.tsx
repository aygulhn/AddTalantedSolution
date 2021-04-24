import React from "react";
import {NavLink} from "react-router-dom";
import {INavItem} from "../../Interfaces/INavItem";

type ItemProps = {
    item: INavItem,
    handleRouterChange?: (item: INavItem) => void,
}


const Item: React.FC<ItemProps> = ({item, handleRouterChange}) => {

    return (
        <li className="nav-item">
            <NavLink className={"nav-link " + (item.isActive ? 'active-link' : '')}
                     to={item.link} exact
                     onClick={() => {
                         if (handleRouterChange) handleRouterChange(item)
                     }}>
                <img src={item.icon} id={item.id}/>
            </NavLink>
        </li>
    )
}

export default Item