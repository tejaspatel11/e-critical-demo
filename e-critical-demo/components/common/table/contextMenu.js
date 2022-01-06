import Link from 'next/link'
import React from 'react'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'

const ContextMenu = (props) => {
    const menu = [{ className: 'fas fa-pen opacity-75', displayName: 'Edit', action: 'edit' }, { className: 'fas fa-user-minus opacity-75', displayName: 'Discharge', action: 'discharge' }, { className: 'fas fa-tasks opacity-75', displayName: 'Report Status', action: 'status' }, { className: 'fas fa-exchange-alt opacity-75', displayName: 'Ward Transfer', action: 'transfer' }, { className: 'fas fa-user opacity-75', displayName: 'Patient Condition', action: 'edit' }]
    return (
        <>
            <Dropdown as={ButtonGroup}>

                <Dropdown.Toggle split id="dropdown-split-basic">
                    {props.children}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {/* {menu.map(menu => <Dropdown.Item href={`hospitals/${menu.action}`}><span className={`me-2 ${menu.className}`}></span>{menu.displayName}</Dropdown.Item>)} */}
                    {menu.map((menu,index) => <Dropdown.Item key={index} ><Link href={`/hospitals/${menu.action}`}><div className='w-100'><span className={`me-2 ${menu.className}`}></span>{menu.displayName}</div></Link></Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ContextMenu
