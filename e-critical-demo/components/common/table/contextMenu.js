import React from 'react'
import { Button, ButtonGroup, Dropdown } from 'react-bootstrap'

const ContextMenu = (props) => {
    const menu = [{ className:'fas fa-pen opacity-75', displayName: 'Edit', action: 'edit' }, {className:'fas fa-user-minus opacity-75', displayName: 'Discharge', action: 'discharge' }, {className:'fas fa-tasks opacity-75', displayName: 'Report Status', action: 'status' },{className:'fas fa-exchange-alt opacity-75', displayName: 'Ward Transfer', action: 'transfer' }, {className:'fas fa-user opacity-75', displayName: 'Patient Condition', action: 'edit' }]
    return (
        <>
            <Dropdown as={ButtonGroup}>
                {/* <Button variant="success">Split Button</Button> */}

                <Dropdown.Toggle split id="dropdown-split-basic">
                    {props.children}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    {menu.map(menu => <Dropdown.Item href={`hospitals/${menu.action}`}><span className={`me-2 ${menu.className}`}></span>{menu.displayName}</Dropdown.Item>)}
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default ContextMenu
