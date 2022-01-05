import React from 'react'

const Layout = (props) => {
    return (
        <>
            <header className='header px-2'>
                <div className='d-flex align-items-center'>
                    <i className='fas fa-bars pe-3'></i>
                    <div className='fw-bolder fs-5'>Patients</div>
                </div>
                <div className='d-flex pe-3 align-items-center'>
                    <div className='fs-5 fw-bolder px-3'>Medicity Hospital</div>
                    <div className='px-3 d-flex align-items-center'>
                        <i className='fas fa-user-circle fs-4'></i>
                        <div className='px-1'>Megha Soni</div>
                        <i className='fas fa-sort-down ps-1'></i>
                    </div>
                    <i className="fas fa-bell fs-5 mx-3 position-relative">
                        <span class="position-absolute top-0 start-100 translate-middle bg-danger rounded-circle">
                            5
                        </span>
                    </i>
                </div>
            </header>
            <main className='main BgColour'>
                {props.children}
            </main>
            <footer className='footer px-2'>
                version 1.0.14
            </footer>
        </>
    )
}

export default Layout
