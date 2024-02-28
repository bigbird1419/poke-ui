import React from 'react'
import {
    BsCart3,
    BsGrid1X2Fill,
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsListCheck,
    BsMenuButtonWideFill,
    BsFillGearFill
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' /> SHOP
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to={'/'}>
                        <BsGrid1X2Fill className='icon' /> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/'}>
                        <BsFillArchiveFill className='icon' /> Products
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/'}>
                        <BsFillGrid3X3GapFill className='icon' /> Categories
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/'}>
                        <BsPeopleFill className='icon' /> Customers
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/'}>
                        <BsListCheck className='icon' /> Inventory
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/'}>
                        <BsMenuButtonWideFill className='icon' /> Reports
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to={'/'}>
                        <BsFillGearFill className='icon' /> Setting
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar