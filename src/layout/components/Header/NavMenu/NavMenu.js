import classNames from "classnames/bind"

import styles from './NavMenu.module.css'

const cx = classNames.bind(styles)

function NavMenu({children}){
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    )
}

export default NavMenu