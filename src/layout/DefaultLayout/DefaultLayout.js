import classNames from 'classnames/bind'

import styles from './DefaultLayou.module.css'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import routes from '../../Contants/routes'
import Footer from '../components/Footer/footer'

const cx = classNames.bind(styles)

function DefaultLayout({ heading = 'ABCXYZ', children }) {
    let contentSidebar = [
        {
            title: 'Trang chủ',
            to: routes.home
        },
        {
            title: 'Pokemon TCG',
            to: routes.products
        },
        {
            title: 'Bài viết',
            to: routes.news
        },
        {
            title: 'Giỏ hàng',
            to: routes.cart
        },
        {
            title: 'Liên hệ',
            to: routes.contact
        },
        {
            title: 'Admin',
            to: routes.admin
        }
    ]
    // if (children.type === Home) {
    //     contentSidebar = [
    //         {
    //             title: 'Trang chủ',
    //             to: routes.home
    //         },
    //         {
    //             title: 'Hộp thẻ bài Pokemon TCG',
    //             to: routes.product
    //         },
    //         {
    //             title: 'Bai viet',
    //             to: routes.product
    //         },
    //         {
    //             title: 'Gói thẻ bài Pokémon TCG',
    //             to: routes.product
    //         },
    //         {
    //             title: 'Phụ kiện Pokemon TCG',
    //             to: routes.product
    //         }
    //     ]
    // } else if (children.type === Product) {

    // }

    return (
        <div className={cx('wrapper')}>
            <Header />
            <Banner />
            <div className={cx('container')}>
                <div className={cx('heading')}>
                    <h2>{heading}</h2>
                </div>
                <div className={cx('content')}>
                    <div className='row'>
                        <div className='col-lg-3 col-xl-3 col-md-3 col-sm-12'>
                            <Sidebar content={contentSidebar} className={'fixed-top'} />
                        </div>
                        <div className='col-lg-9 col-xl-9 col-md-9 col-sm-12'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default DefaultLayout