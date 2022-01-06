import React from 'react'

const Layout = (props) => {
    return (
        <>
            <header className='header px-2'>
                <div className='d-flex align-items-center'>
                    <span className='fas fa-bars pe-3'></span>
                    <div className='fw-bolder fs-5'>Patients</div>
                </div>
                <div className='d-flex pe-3 align-items-center'>
                    <div className='fs-5 fw-bolder px-3'>Medicity Hospital</div>
                    <div className='px-3 d-flex align-items-center'>
                        <span className='fas fa-user-circle fs-4'></span>
                        <div className='px-1'>Megha Soni</div>
                        <span className='fas fa-sort-down ps-1'></span>
                    </div>
                    <span className="fas fa-bell fs-5 mx-3 position-relative">
                        <span className="position-absolute top-0 start-100 translate-middle bg-danger rounded-circle">
                            5
                        </span>
                    </span>
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
