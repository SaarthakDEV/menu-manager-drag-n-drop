import { useState } from 'react'
import { extractIndex, onDrop } from '../utils/helper'
import useStore from '../store/useStore'
import toast from 'react-hot-toast'

const DropMenu = ({ isChildDrop= false, pos}) => {
    const [isVisible, setIsVisible] = useState(false)
    const { menu, setMenu, activeMenu } = useStore();
    const isDropValid = (e) => {
        setIsVisible(false)
        const { parent: menuToChangeParent, ind: menuTOChangeIndex} = extractIndex(activeMenu)
        const { parent: dropParent, ind: dropIndex} = extractIndex(pos)

        if(menuToChangeParent === dropParent && (dropIndex - menuTOChangeIndex == 1 || menuTOChangeIndex - dropIndex == 0)){
            return;
        }
        if(menuTOChangeIndex == dropParent && menuToChangeParent == "#"){
            toast.error("Invalid drop location")
            return;
        }
        onDrop(pos, activeMenu, menu, setMenu)

    }
  return (
    <div className={`${isChildDrop && "child"} ${isVisible ? "visible" : "dropMenu"}`}
        onDragEnter={() => setIsVisible(true)}
        onDragLeave={() => setIsVisible(false)}
        onDragOver={(e) => {
            e.preventDefault()
        }}
        onDrop={isDropValid}
    >Drop Menu Here</div>
  )
}

export default DropMenu