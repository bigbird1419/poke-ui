import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './NavMenu.module.css'

const cx = classNames.bind(styles)

function MenuItem({ title, to, children = [] }) {
    const currentPage = useLocation().pathname

    return (
        <span className={cx('menu-item')}>
            <Link to={to} className={cx('menu-item-link', currentPage === to ? 'active' : '')}>
                {title}
                {children.length > 0 &&
                    <span className={cx('menu-icon')}>
                        <i className="fa-solid fa-chevron-down"></i>
                    </span>
                }
            </Link>
            {children.length > 0 &&
                <div className={cx('menu-children')}>
                    <ul className={cx('list-children')}>
                        {children.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        to={item.to}
                                        className={cx('item-children')}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            }
        </span>
    )
}

export default MenuItem