import { create } from "zustand";
import getMenuData from "../data/MenuData";


const useStore = create((set) => ({
    menu: getMenuData(),
    setMenu: (menuData) => set(() => ({ menu: menuData }))
}))

export default useStore;