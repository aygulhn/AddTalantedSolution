import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {INavItem} from "../../Interfaces/INavItem";
import Item from "./Item"


type NavigationProps = {
    navItems: Array<string>
}

export const Navigation: React.FC<NavigationProps> = ({navItems}) => {

    const history = useHistory()


    const navigationMenus: INavItem[] = navItems.map((item, index) => ({
            title: item,
            name: item.toLowerCase(),
            id: item.toLowerCase(),
            link: `/${item.toLowerCase()}`,
            isActive: index === 0
    }))


    // const [menuItems, setMenuItems] = useState<INavItem[]>(navigationMenus)


    // const handleRouterChange = (item: INavItem) => {
    //     setMenuItems(prev =>
    //         prev.map(menuItem => {
    //                 if (menuItem.id === item.id && !menuItem.isActive) {
    //                     return {...menuItem, isActive: !menuItem.isActive}
    //                 } else if (menuItem.id === item.id && menuItem.isActive) {
    //                     return menuItem;
    //                 } else {
    //                     return {...menuItem, isActive: false}
    //                 }
    //                 return menuItem;
    //             }
    //         )
    //     )
    // }


    return (
        <Router>
            <nav className="navigation">
                <ul className="nav justify-content-between">
                    {navigationMenus.map(item =>
                        <Item
                            item={item}/>
                    )}
                </ul>
            </nav>
        </Router>
    )
}