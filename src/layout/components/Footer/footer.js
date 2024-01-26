import classNames from "classnames/bind"

import styles from './footer.module.css'
import Button from '../../../components/Button'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col-xl-6 col-lg-6 col-md-12 col-sm-12')}>
                        <div className={cx('footer-logo')}>
                            <Button text to={'/'} className={cx('footer-logo--link')}>Pokemon TCG</Button>
                        </div>
                        <div className={cx('footer-des')}>
                            <p>Pokémon chuyên các loại thẻ bài Pokémon TCG chính hãng.</p>
                        </div>
                    </div>
                    <div className={cx('col-xl-3 col-lg-3 col-md-12 col-sm-12')}>
                        <div className={cx('footer-title')}>
                            <h3>CHÍNH SÁCH</h3>
                        </div>
                        <div className={cx('footer-content')}>
                            <ul>
                                <li>Tìm kiếm</li>
                                <li>Giới thiệu</li>
                                <li>Chính sách đổi trả</li>
                                <li>Chính sách bảo mật</li>
                                <li>Điều khoản dịch vụ</li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('col-xl-3 col-lg-3 col-md-12 col-sm-12')}>
                    <div className={cx('footer-title')}>
                            <h3>Sản phẩm</h3>
                        </div>
                        <div className={cx('footer-content')}>
                            <ul>
                                <li>Sản phẩm mới</li>
                                <li>Hộp thẻ bài TCG</li>
                                <li>Bilster</li>
                                <li>Gói thẻ bài TCG</li>
                                <li>Phụ kiện Pokemon TCG</li>
                                <li>Bilster</li>
                                <li>Gói thẻ bài TCG</li>
                                <li>Phụ kiện Pokemon TCG</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer