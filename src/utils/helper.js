import getMenuData from "../data/MenuData"

export const getAllParents = () => {
    const menuData = getMenuData();
    const menuParents = menuData.map(menuItem => ({ id: menuItem.id, label: menuItem.label }))
    return menuParents;
}