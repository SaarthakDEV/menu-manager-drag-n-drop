
import { MdMenuOpen, MdOutlineMenu } from "react-icons/md";
import useStore from "../store/useStore";


const MenuItem = ({ isChild=false, icon=null, children, link, pos}) => {
    const { setActiveMenu } = useStore()
  return (
    <div className={`menuItem ${isChild && "child"}`} draggable onDragStart={() => setActiveMenu(pos)}
    >
        { icon || isChild ? <MdMenuOpen size={24}/>: <MdOutlineMenu size={24}/> }
        {children}
    </div>
  )
}

export default MenuItem