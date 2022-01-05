import React from 'react'
import ContextMenu from './contextMenu'

const Action = () => {
    return (
        <>
            <ContextMenu>
                <span style={{ fontWeight: "bold", cursor: 'pointer' }}>
                    &#8285;
                </span>
            </ContextMenu>
        </>
    )
}

export default Action
