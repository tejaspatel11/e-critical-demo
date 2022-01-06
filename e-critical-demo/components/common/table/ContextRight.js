import Link from "next/link";
import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const menu = [{ className: 'fas fa-pen opacity-75', displayName: 'Edit', action: 'edit' }, { className: 'fas fa-user-minus opacity-75', displayName: 'Discharge', action: 'discharge' }, { className: 'fas fa-tasks opacity-75', displayName: 'Report Status', action: 'status' }, { className: 'fas fa-exchange-alt opacity-75', displayName: 'Ward Transfer', action: 'transfer' }, { className: 'fas fa-user opacity-75', displayName: 'Patient Condition', action: 'Condition' }]

let hold;

function ContextRight(props) {
    { props.type === 'onLeftClick' ? hold = 0 : hold = -1 }
    return (
        <div>
            {/* holdToDisplay={0} */}
            <ContextMenuTrigger id="onRightClick" holdToDisplay={hold}>
                {props.children}
            </ContextMenuTrigger>

            <ContextMenu id="onRightClick" className="card py-2">
                {/* {menu.map(menu => <Dropdown.Item className="MenuItem bg-white" href={`hospitals/${menu.action}`}><span className={`me-2 ${menu.className}`}></span>{menu.displayName}</Dropdown.Item>)} */}
                {menu.map((menu, index) => <MenuItem key={index} className="MenuItem bg-white px-3"><Link href={`/hospitals/${menu.action}`}><div className='w-100'><span className={`me-2 ${menu.className}`}></span>{menu.displayName}</div></Link></MenuItem>)}
            </ContextMenu>

            {/* <ContextMenuTrigger id="onleftClick" holdToDisplay={0}>
                {props.children}
            </ContextMenuTrigger>

            <ContextMenu id="onleftClick" className="card py-2"> */}
            {/* {menu.map(menu => <Dropdown.Item className="MenuItem bg-white" href={`hospitals/${menu.action}`}><span className={`me-2 ${menu.className}`}></span>{menu.displayName}</Dropdown.Item>)} */}
            {/* {menu.map((menu, index) => <MenuItem key={index} className="MenuItem bg-white px-3"><Link href={`/hospitals/${menu.action}`}><div className='w-100'><span className={`me-2 ${menu.className}`}></span>{menu.displayName}</div></Link></MenuItem>)}
            </ContextMenu> */}

        </div>
    );
}
export default ContextRight