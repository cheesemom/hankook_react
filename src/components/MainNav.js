import React from 'react'
import { Link } from 'react-router-dom'


const MainNav = () => {
    return (
        <ul>
            <li><Link to='/'>COMPANY</Link></li>
            <li>PRODUCT</li>
            <li>BRANDS</li>
            <li>B2B / B2C</li>
            <li><Link to='/'>COMMUNITY</Link></li>
            <li>CUSTOMER</li>
        </ul>
    )
}

export default MainNav