import { useState } from 'react';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import { useNavigate, useLocation} from "react-router-dom"
type MenuItem = Required<MenuProps>['items'][number];
interface MainMenuProps  {
    items:  MenuItem[] 
    rootSubmenuKeys:string[] 
}
const MainMenu = (props: MainMenuProps) => {
    const { items, rootSubmenuKeys } = props
    const navigateTo = useNavigate()
    const currentRoute = useLocation()

    const menuClick = (e:{key:string})=>{
    navigateTo(e.key);
    }
    let firstOpenKey:string = "";
  // 在这里进行对比   find
  function findKey(obj:{key:string}){
    return obj.key === currentRoute.pathname
  }
  // 多对比的是多个children
  for(let i=0;i<items.length;i++){
    // 判断找到不到
    if(items[i]!['children'] && items[i]!['children'].length>0 && items[i]!['children'].find(findKey)){
      firstOpenKey = items[i]!.key as string;
      break;
    }
    }
    const [openKeys, setOpenKeys] = useState([firstOpenKey]);
    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
    return (
        <Menu
                  theme="dark"
                  defaultSelectedKeys={[currentRoute.pathname]}
                  mode="inline"
                  items={items}
                  onClick={menuClick}
                  openKeys={openKeys}
                  onOpenChange={onOpenChange}
              />
    );
};

export default MainMenu;