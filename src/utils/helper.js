export const getAllParents = (menu) => {
    if (!menu) {
        return [];
    }

    const menuData = menu;
    const menuParents = menuData.map(menuItem => ({ id: menuItem.id, label: menuItem.label }))
    return menuParents;
}

export const addMenu = (menu, menuItem, setMenu) => {
    const updatedMenu = [...menu];
    if (menuItem.parent === "#") {
        updatedMenu.push({...menuItem, children: []})
    } else {
        const parentMenuIndex = menu.findIndex(m => m.id === menuItem.parent)
        const parentMenu = menu[parentMenuIndex]
        parentMenu.children.push({ ...menuItem, children: [] })
        updatedMenu.splice(parentMenuIndex, 1, parentMenu)
    }
    setMenu(updatedMenu)
}

export const onDrop = (pos, activeMenu, menu, setMenu) => {
  const updatedMenu = JSON.parse(JSON.stringify(menu));

  const { parent: oldParentRaw, ind: oldIndexRaw } = extractIndex(activeMenu);
  const { parent: newParentRaw, ind: newIndexRaw } = extractIndex(pos);

  const oldP = oldParentRaw === "#" ? null : Number(oldParentRaw);
  const oldI = Number(oldIndexRaw);
  let newP = newParentRaw === "#" ? null : Number(newParentRaw);
  let newI = Number(newIndexRaw);

  // ---------------------------
  // 1) Grab element to move
  // ---------------------------
  let ele;
  if (oldP === null) {
    ele = updatedMenu[oldI];
  } else {
    ele = updatedMenu[oldP].children[oldI];
  }

  // Always ensure children array exists
  if (!ele.children) ele.children = [];

  // ---------------------------
  // 2) Remove first
  // ---------------------------
  if (oldP === null) {
    updatedMenu.splice(oldI, 1);
  } else {
    updatedMenu[oldP].children.splice(oldI, 1);
  }

  // -----------------------------------
  // 3) Fix index shifting (root → root only)
  // -----------------------------------
  if (oldP === null && newP !== null && oldI < newP) {
    newP = newP - 1;
  }

  // -------------------------------------------------------------
  // 4) Adjust index when moving within same parent downward
  // -------------------------------------------------------------
  let insertIndex = newI;
  if (oldP === newP && newI > oldI) {
    insertIndex = newI - 1;
  }

  // ---------------------------
  // 5) Ensure children exist on new parent
  // ---------------------------
  if (newP !== null && !updatedMenu[newP].children) {
    updatedMenu[newP].children = [];
  }

  // ---------------------------
  // 6) NEW FEATURE:
  // Promote children if dragged item is dropped into another parent
  // ---------------------------
  if (ele.children.length > 0 && newP !== null) {
    // Add dragged element's children to new parent's children
    updatedMenu[newP].children.push(...ele.children);

    // Clear dragged element's children
    ele.children = [];
  }

  // ---------------------------
  // 7) Insert element at destination
  // ---------------------------
  if (newP === null) {
    updatedMenu.splice(insertIndex, 0, ele);
  } else {
    updatedMenu[newP].children.splice(insertIndex, 0, ele);
  }

  setMenu(updatedMenu);
};


export const extractIndex = (str) => {
    const strArray = str.split(".");
    return {
        parent: strArray[0],
        ind: strArray[1]
    }
}