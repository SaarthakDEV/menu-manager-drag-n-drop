import { create } from "zustand";
import getMenuData from "../data/MenuData";


const useStore = create((set) => ({
    activeMenu: null,
    setActiveMenu: (ind) => set(() => ({ activeMenu: ind })),
    menu: getMenuData(),
    setMenu: (menuData) => set(() => ({ menu: menuData }))
}))

export default useStore;