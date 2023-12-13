import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div>
            <div className='container'>
                <nav className='d-flex justify-content-between align-items-center'>
                    <div  className='nav-left d-flex' >
                        <h1 className='logo'>Shortly</h1>
                        <ul className='header-ul d-flex align-items-center'>
                            <li><a href="">Features</a></li>
                            <li> <a href="">Pricing</a></li>
                            <li><a href="">Resources</a></li>
                        </ul>
                    </div>
                    <div className='d-flex gap-3'>
                        <button className='btn btn-gray'>Login</button>
                        <button className='btn btn-info'>Sign Up</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header