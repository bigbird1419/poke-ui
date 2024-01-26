import classNames from "classnames/bind"
import { useContext } from "react"
import { Link } from 'react-router-dom'

import style from './Cart.module.css'
import Button from "../../../components/Button/Button"
import * as CartService from '../../../services/cartService'
import { CartContext } from '../../../common/DataCartContext'

const cx = classNames.bind(style)

function Cart({ onShow = {} }) {
    const { dataCart, handleDeleteOnCart } = useContext(CartContext)

    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>Giỏ hàng</p>
            <div className={cx('cart-view')}>
                <div className={cx('cart-scroll')}>
                    {dataCart.length > 0 &&
                        dataCart.map((item, index) => (
                            <div className={cx('cart-item')} key={index}>
                                <img className={cx('img')} src={item.pokemon.sprites.other.dream_world.front_default} alt="" />
                                <div>
                                    <div className={cx('item-content')}>
                                        <Link to={`/products/${item.pokemon.name}`}>
                                            <span>{item.pokemon.name}</span>
                                        </Link>
                                        <span className={cx('clear')} onClick={() => handleDeleteOnCart(index)}>x</span>
                                    </div>
                                    <div className={cx('item-quantity')}>
                                        <span>{item.quantity}</span>
                                        <span className={cx('item-money')}>
                                            {item.pokemon.id}$
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {/* <div className={cx('cart-item')}>
                        <img className={cx('img')} src="https://product.hstatic.net/200000346081/product/p8981_187-85417_01_bfcddcaba4b04d479eb0899942732f10_master.jpg" alt=""/>
                        <div>
                            <div className={cx('item-content')}>
                                <span>HỘP THẺ BÀI POKEMON TCG ELITE TRAINER BOX : SCARLET & VIOLET PARADOX RIFT PHIÊN BẢN POKEMON CENTER</span>
                                <span className={cx('clear')}>x</span>
                            </div>
                            <div className={cx('item-quantity')}>
                                <span>1</span>
                                <span className={cx('item-money')}>2,600,000₫</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('cart-item')}>
                        <img className={cx('img')} src="https://product.hstatic.net/200000346081/product/p8981_187-85417_01_bfcddcaba4b04d479eb0899942732f10_master.jpg" alt=""/>
                        <div>
                            <div className={cx('item-content')}>
                                <span>HỘP THẺ BÀI POKEMON TCG ELITE TRAINER BOX : SCARLET & VIOLET PARADOX RIFT PHIÊN BẢN POKEMON CENTER</span>
                                <span className={cx('clear')}>x</span>
                            </div>
                            <div className={cx('item-quantity')}>
                                <span>1</span>
                                <span className={cx('item-money')}>2,600,000₫</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('cart-item')}>
                        <img className={cx('img')} src="https://product.hstatic.net/200000346081/product/p8981_187-85417_01_bfcddcaba4b04d479eb0899942732f10_master.jpg" alt=""/>
                        <div>
                            <div className={cx('item-content')}>
                                <span>HỘP THẺ BÀI POKEMON TCG ELITE TRAINER BOX : SCARLET & VIOLET PARADOX RIFT PHIÊN BẢN POKEMON CENTER</span>
                                <span className={cx('clear')}>x</span>
                            </div>
                            <div className={cx('item-quantity')}>
                                <span>1</span>
                                <span className={cx('item-money')}>2,600,000₫</span>
                            </div>
                        </div>
                    </div> */}
                    {dataCart.length === 0 &&
                        <div className={cx('no-product')}>
                            <p>Hiện chưa có sản phẩm</p>
                        </div>
                    }
                </div>
                <div className={cx('cart-total')}>
                    <div className={cx('cart-money')}>
                        <span className={cx('money-title')}>TỔNG TIỀN:</span>
                        <span className={cx('money')}>{CartService.getTotalCoin()}$</span>
                    </div>
                    <div className={cx('cart-btn')}>
                        <Button className={cx('btn-buy')} text to={'/cart'}
                            onClick={onShow}
                        >Thanh toán</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart