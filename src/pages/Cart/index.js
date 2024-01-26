import classNames from "classnames/bind"
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useReactToPrint } from 'react-to-print'

import styles from './Cart.module.css'
import { CartContext } from '../../common/DataCartContext'
import Button from '../../components/Button'
import Loader from "../../components/Loader"

const cx = classNames.bind(styles)

function Cart() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [showAccount, setShowAccount] = useState(true)
    const { dataCart, totalCoin, handleDelAllCart } = useContext(CartContext)
    const componentRef = useRef()
    const [isLoading, setIsLoading] = useState(true)

    const handleShowAccount = useCallback(() => {
        setShowAccount(cur => !cur)
    }, [])

    const handleCheckOut = useCallback((e) => {
        e.preventDefault()
        let data = dataCart.map((item) => {
            let pokemonName = item.pokemon.name
            let pokemonId = item.pokemon.id
            let pokemonImg = item.pokemon.sprites.other.dream_world.front_default
            let quantity = item.quantity
            return {
                name: name,
                email: email,
                phone: phone,
                address: address,
                pokemonId,
                pokemonName,
                pokemonImg,
                quantity
            }
        })
        try {
            axios.post('https://sheet.best/api/sheets/9983d4e6-cd3e-49b8-909e-97aa80516a5e', data)
                .then(res => res)
            setName('')
            setPhone('')
            setEmail('')
            setAddress('')
            handleDelAllCart()
        } catch (error) {
            console.log(error)
        }
    }, [name, email, phone, address, handleDelAllCart, dataCart])

    const handleGeneratePDF = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Thông tin thanh toán'
    })

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
                (<div className={cx('wrapper')} ref={componentRef}>
                    <div className={cx('container')}>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className={cx('info')}>
                                    <div className={cx('info-heading')}>
                                        <h3>Thông tin giao hàng</h3>
                                    </div>
                                    <div className={cx('info-form')}>
                                        <form className={cx('form-box')}>
                                            <input type="text" placeholder="Họ và tên"
                                                value={name} onChange={e => setName(e.target.value)} required
                                            />
                                            <input type="text" placeholder="Email"
                                                value={email} onChange={e => setEmail(e.target.value)} required
                                            />
                                            <input type="text" placeholder="Số điện thoại"
                                                value={phone} onChange={e => setPhone(e.target.value)} required
                                            />
                                            <input type="text" placeholder="Địa chỉ"
                                                value={address} onChange={e => setAddress(e.target.value)} required
                                            />
                                        </form>
                                    </div>
                                    <div className={cx('check-out')}>
                                        <h3>Phương thức thanh toán</h3>
                                        <div className={cx('radio-box')}>
                                            <label className={cx('radio-label')} htmlFor="payment">
                                                <input type="radio" id="payment" name="checkout"
                                                    checked={showAccount}
                                                    onChange={handleShowAccount}
                                                />
                                                <div className={cx('radio-content')}>
                                                    <img src="https://hstatic.net/0/0/global/design/seller/image/payment/other.svg?v=6" alt="payment" />
                                                    <span>Chuyển khoản qua ngân hàng</span>
                                                </div>
                                            </label>
                                        </div>
                                        <div className={cx('account', showAccount && 'active')}>
                                            Quý khách vui lòng chuyển khoản qua các tài khoản dưới đây và liên hệ Hotline để được giao hàng nhanh nhất: <br />
                                            MB Bank <br />
                                            Chủ tài khoản: Trương Quốc Tuấn <br />
                                            Số tài khoản: 0721005128859
                                        </div>
                                        <div className={cx('radio-box')}>
                                            <label className={cx('radio-label')} htmlFor="COD">
                                                <input type="radio" id="COD" name="checkout"
                                                    checked={!showAccount}
                                                    onChange={handleShowAccount}
                                                />
                                                <div className={cx('radio-content')}>
                                                    <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=6" alt="COD" />
                                                    <span>Thanh toán COD</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className={cx('products')}>
                                    {dataCart.length > 0 &&
                                        <div>
                                            {dataCart.map((item, index) => (
                                                <div className={cx('product-item')} key={index}>
                                                    <div className={cx('product-img')}>
                                                        <img src={item.pokemon.sprites.other.dream_world.front_default} alt={item.pokemon.name} />
                                                        <span
                                                            className={cx('product-quantity')}
                                                        >{item.quantity}</span>
                                                    </div>
                                                    <div className={cx('product-name')}>
                                                        {item.pokemon.name}
                                                    </div>
                                                    <div className={cx('product-price')}>
                                                        {item.pokemon.id}$
                                                    </div>
                                                </div>
                                            ))}
                                            <div className={cx('totalcoin')}>
                                                <span>Tổng cộng</span>
                                                <span>{totalCoin}$</span>
                                            </div>
                                            <div className={cx('btn-buy')}>
                                                <Button normal onClick={handleGeneratePDF}>
                                                    Xuất PDF
                                                </Button>
                                                <Button normal onClick={e => handleCheckOut(e)}>
                                                    Hoàn tất đơn hàng
                                                </Button>
                                            </div>
                                        </div>
                                    }
                                    {dataCart.length <= 0 &&
                                        <h5>Giỏ hàng của bạn đang trống,
                                            <Link to={'/products'}>tiếp tục mua hàng</Link>
                                        </h5>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
export default Cart