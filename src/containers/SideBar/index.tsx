import React, {useState} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import {INavItem} from "../../Interfaces/INavItem";
import Item from "./Item"

export const SideBar: React.FC = (props) => {


    const navigationMenus: INavItem[] = [
        {
            name: 'dashboard',
            id: 'dashboard-navigator',
            link: '/',
            icon: require('../../assets/images/icons/dashboard-interface.svg').default,
            isActive: true
        },
        {
            name: 'shopping-list',
            id: 'shopping-list-navigator',
            link: '/shopping-list',
            icon: require('../../assets/images/icons/shopping-list.svg').default,
            isActive: false
        },
        {
            name: 'group',
            id: 'group-navigator',
            link: '/group',
            icon: require('../../assets/images/icons/Group.svg').default,
            isActive: false
        }
    ]

    const [menuItems, setMenuItems] = useState<INavItem[]>(navigationMenus)

    const handleRouterChange = (item: INavItem) => {
        setMenuItems(prev =>
            prev.map(menuItem => {
                    if (menuItem.id === item.id && !menuItem.isActive) {
                        return {...menuItem, isActive: !menuItem.isActive}
                    } else if (menuItem.id === item.id && menuItem.isActive) {
                        return menuItem;
                    } else {
                        return {...menuItem, isActive: false}
                    }
                    return menuItem;
                }
            )
        )
    }


    return (
        <Router>
            <nav className="sidebar">
                <ul className="nav flex-column">
                    {menuItems.map(item =>
                        <Item
                            handleRouterChange={handleRouterChange}
                            item={item}/>
                    )}
                </ul>
            </nav>
        </Router>
    )
}