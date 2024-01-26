import classNames from "classnames/bind"
import { Link, useLocation } from 'react-router-dom'
import { memo } from "react"

import styles from './Sidebar.module.css'

const cx = classNames.bind(styles)

function Sidebar({ content = [], className }) {
    const currentPage = useLocation().pathname

    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('category')}>
                <ul>
                    {content.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className={cx(currentPage === item.to ? 'active' : '')}
                            >
                                <Link to={item.to} className={cx('category-link')}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
export default memo(Sidebar)