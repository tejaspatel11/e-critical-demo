import React from 'react'
import ContextMenu from './contextMenu'
import ContextRight from './ContextRight'

const Action = () => {
    return (
        <>
            {/* <ContextMenu>
                <span style={{ fontWeight: "bold", cursor: 'pointer' }}>
                    &#8285;
                </span>
            </ContextMenu> */}

            <ContextRight type='onLeftClick'>
                <span style={{ fontWeight: "bold", cursor: 'pointer' }}>
                    &#8285;
                </span>
            </ContextRight>
        </>
    )
}

export default Action
