import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { useCallback, useContext, useState } from 'react'

import Search from '../Search'
import routes from '../../../Contants/routes'
import styles from './Header.module.css'
import NavMenu, { MenuItem } from './NavMenu'
import Button from '../../../components/Button/Button'
import Cart from '../Cart/Cart'
import { CartContext } from '../../../common/DataCartContext'

const cx = classNames.bind(styles);
const navItem = [
    {
        title: 'Trang chủ',
        to: routes.home
    },
    {
        title: 'Sản phẩm',
        to: routes.products,
        children: [
            {
                title: 'Sản phẩm mới',
                to: routes.products
            },
            {
                title: 'Hộp thẻ bài Pokemon',
                to: routes.products
            },
            {
                title: 'Phụ kiện Pokemon',
                to: routes.products
            },
            {
                title: 'Mô hình Pokemon',
                to: routes.products
            }
            ,
            {
                title: 'Bilister',
                to: routes.products
            }
            ,
            {
                title: 'Gói thẻ bài Pokemon',
                to: routes.products
            }
        ]
    },
    {
        title: 'Bài viết',
        to: routes.news
    },
    {
        title: 'Shopee',
        to: 'https://shopee.vn'
    },
    {
        title: 'Facebook',
        to: 'https://facebook.com'
    },
    {
        title: 'Youtube',
        to: 'https://youtube.com'
    },
    {
        title: 'Liên hệ',
        to: routes.contact
    },
]
function Header() {
    const [showSearch, setShowSearch] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const { totalQuantity } = useContext(CartContext)
    const [showNavMobile, setShowNavMobile] = useState(false)

    const handleShowSearch = useCallback(() => {
        setShowSearch(cur => !cur)
        setShowCart(false)
    }, [])
    const handleShowCart = useCallback(() => {
        setShowCart(cur => !cur)
        setShowSearch(false)
    }, [])
    const handleShowNavMobile = useCallback(() => {
        setShowNavMobile(cur => !cur)
    }, [])

    return (
        <div className={cx('container')}>
            <div className={cx('logo')}>
                <Link to='/' className={cx('logo-text')}>
                    Pokemon TCG
                </Link>
                <div className={cx('bar-mobile')}>
                    <Button icon rounded onClick={handleShowNavMobile}>
                        {
                            showNavMobile ? <i className="fa-solid fa-x"></i> :
                                <i className="fa-solid fa-bars"></i>
                        }
                    </Button>
                    {showNavMobile && <div className={cx('nav-menu-mobile')}>
                        <NavMenu>
                            {navItem.map((nav, index) => (
                                <MenuItem key={index} title={nav.title} to={nav.to} children={nav.children} />
                            ))}
                        </NavMenu>
                    </div>}
                </div>
            </div>
            <div className={cx('nav-menu')}>
                <NavMenu>
                    {navItem.map((nav, index) => (
                        <MenuItem key={index} title={nav.title} to={nav.to} children={nav.children} />
                    ))}
                </NavMenu>
            </div>
            <div className={cx('action')}>
                <div className={cx('action-item', 'action-search')}>
                    <Button rounded icon
                        onClick={handleShowSearch}
                    >
                        {
                            showSearch ? <i className="fa-solid fa-x"></i> :
                                <i className="fa-solid fa-magnifying-glass"></i>
                        }
                    </Button>
                    {showSearch && <div className={cx('dropdown')}>
                        <Search onShow={handleShowSearch} />
                    </div>}
                </div>
                {/* <div className={cx('action-item', 'action-login')}>
                    <Button rounded icon><i className="fa-regular fa-user"></i></Button>
                </div> */}
                <div className={cx('action-item', 'action-cart')}>
                    <Button rounded icon onClick={handleShowCart}>
                        {
                            !showCart &&
                            <span className={cx('cart-total', totalQuantity > 0 && 'active')}>
                                {totalQuantity}
                            </span>
                        }
                        {
                            showCart ? <i className="fa-solid fa-x"></i> :
                                <i className="fa-solid fa-cart-shopping"></i>
                        }
                    </Button>
                    {showCart && <div className={cx('dropdown')}>
                        <Cart onShow={handleShowCart} />
                    </div>}
                </div>
                <div className={cx('action-item', 'action-buy')}>
                    <Button to={'/products'} text primary className={cx('btn-buy')}>Chọn mua</Button>
                </div>
            </div>
        </div>
    )
}
export default Header