import React from 'react'

const SearchFilter = ( { filter,setFilter }) => {
    return (
        <span className='searchFilterOuter d-flex align-items-end'>
            <input className='BgColour searchFilter' value={filter || ''} placeholder='Filter' onChange={e=>setFilter(e.target.value)}/>
            <span className='fas fa-times opacity-75 pe-1' onClick={()=>setFilter('')} role='button'></span>
        </span>
    )
}

export default SearchFilter
