export const getAllParents = (menu) => {
    if (!menu) {
        return [];
    }

    const menuData = menu;
    const menuParents = menuData.map(menuItem => ({ id: menuItem.id, label: menuItem.label }))
    return menuParents;
}

export const addMenu = (menuItem) => {
    alert(JSON.stringify(menuItem, null, 2))
}