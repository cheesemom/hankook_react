import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const NAVLINK = [
    { content: "COMPANY", link: "/Intro" },
    { content: "PRODUCT", link: "" },
    { content: "BRANDS", link: "" },
    { content: "B2B / B2C", link: "" },
    { content: "COMMUNITY", link: "/Notice" },
    { content: "CUSTOMER", link: "" },
]

const MainNav = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export default MainNav