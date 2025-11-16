import { Fragment } from "react";
import useStore from "../store/useStore";
import { getAllParents } from "../utils/helper";
import DropMenu from "./DropMenu";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { menu } = useStore();
  return (
    <div className="menu">
      {menu.map((menuItem, idx) => {
        if (menuItem.children.length === 0)
          return <Fragment key={idx}>
          <DropMenu pos={`#.${idx}`}/>
          <MenuItem pos={`#.${idx}`}>{menuItem.label}</MenuItem>
          <DropMenu isChildDrop={true }pos={`${idx}.${0}`}/>
          </Fragment>;
        return (
          <Fragment key={idx}>
          <DropMenu pos={`#.${idx}`}/>
            <MenuItem pos={`#.${idx}`}>{menuItem.label}</MenuItem>
            <DropMenu isChildDrop={true} pos={`${idx}.0`}/>
            {menuItem.children.map((childItem, ind) => (
              <Fragment key={ind}>
              <MenuItem isChild={true} pos={`${idx}.${ind}`}>
                {childItem.label}
              </MenuItem>
              <DropMenu isChildDrop={true} pos={`${idx}.${ind+1}`}/>
              </Fragment>
            ))}
          </Fragment>
        );
      })}
          <DropMenu pos={`#.${menu.length}`}/>

    </div>
  );
};

export default Menu;
