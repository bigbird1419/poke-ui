import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './Contact.module.css'
import Button from '../../components/Button'
import Loader from "../../components/Loader"

const cx = classNames.bind(styles)

function Contact() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const id = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(id)
    })

    return (
        <div>
            {isLoading ?
                (<Loader />) :
                (<div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className={cx('map')}>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59567.99605151401!2d105.71952537488383!3d21.0726720735304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345522c2c40fdb%3A0xf09734667a0bd56!2zQuG6r2MgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1706197753798!5m2!1svi!2s" width="600" height="500" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="address"></iframe>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className={cx('contact')}>
                                    <div className={cx('contact-heading')}>
                                        <h1>Liên Hệ</h1>
                                    </div>
                                    <div className={cx('contact-info')}>
                                        <ul>
                                            <li>
                                                <p>Địa chỉ chúng tôi</p>
                                                <p>
                                                    <strong>Bắc Từ Liêm, Hà Nội</strong>
                                                </p>
                                            </li>
                                            <li>
                                                <p>Email chúng tôi</p>
                                                <p>
                                                    <strong>tuan@gmail.com</strong>
                                                </p>
                                            </li>
                                            <li>
                                                <p>Điện thoại</p>
                                                <p>
                                                    <strong>19009898</strong>
                                                </p>
                                            </li>
                                            <li>
                                                <p>Thời gian làm việc</p>
                                                <p>
                                                    <strong>Thứ 2 đến Thứ 6 từ 9h đến 18h; Thứ 7 từ 09h00 đến 17h00.</strong>
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={cx('contact-send')}>
                                        <h2>Gửi thắc mắc cho chúng tôi</h2>
                                        <div className={cx('contact-send--form')}>
                                            <form>
                                                <div className='row'>
                                                    <div className="col-md-12 col-12">
                                                        <div className={cx('form-input')}>
                                                            <input type="text" placeholder="Tên của bạn" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className={cx('form-input')}>
                                                            <input type="text" placeholder="Email của bạn" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-12">
                                                        <div className={cx('form-input')}>
                                                            <input type="text" placeholder="Số điện thoại của bạn" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 col-12">
                                                        <div className={cx('form-input')}>
                                                            <textarea type="text" placeholder="Nội dung" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <Button text primary className={cx('btn-buy')}>Gửi cho chúng tôi</Button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default Contact