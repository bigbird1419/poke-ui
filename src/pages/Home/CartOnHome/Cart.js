import classNames from "classnames/bind"
import { useCallback, useContext, useState } from 'react'

import styles from './Cart.module.css'
import Button from "../../../components/Button"
import { CartContext } from '../../../common/DataCartContext'

const cx = classNames.bind(styles)

function CartOnHome({ onShowInfoCartOnMobile={} }) {
    const [showInfoCartOnMobile, setShowInfoCartOnMobile] = useState(false)
    const {
        dataCart,
        handleInCreaQuantity,
        handleDeCreaQuantity,
        handleDeleteOnCart,
        totalCoin,
        totalQuantity
    } = useContext(CartContext)

    const handleShowCartInfoOnMobile = useCallback(() => {
        setShowInfoCartOnMobile(cur => !cur)
        onShowInfoCartOnMobile()
    }, [onShowInfoCartOnMobile])

    return (
        <div className={cx('wrapper', showInfoCartOnMobile ? 'active' : '')}>
            <div className={cx('wrapper-tag')} onClick={handleShowCartInfoOnMobile}>
                <span>{totalQuantity} sản phẩm</span>
                <span>{totalCoin}$</span>
            </div>
            <div className={cx('cart-content')}>
                <div className={cx('cart-content--scroll')}>
                    {dataCart.length > 0 &&
                        dataCart.map((item, index) => (
                            <div className={cx('cart-item')} key={index}>
                                <div className={cx('cart-item-title')}>
                                    <h4>{item.pokemon.name}</h4>
                                    <div className={cx('cart-price')}>
                                        <p>{item.pokemon.id}$</p>
                                    </div>
                                </div>
                                <div className={cx('cart-item-quantity')}>
                                    <div className={cx('cart-item-remove')}>
                                        <Button normal className={cx('icon-remove')}
                                            onClick={() => handleDeleteOnCart(index)}>
                                            <i className="fa-regular fa-circle-xmark"></i>
                                        </Button>
                                    </div>
                                    <div className={cx('select-quantity')}>
                                        <Button normal className={cx('btn-quantity')}
                                            onClick={() => handleDeCreaQuantity(item.pokemon, item.quantity)}
                                        >
                                            <i className="fa-solid fa-minus"></i>
                                        </Button>
                                        <span className={cx('quantity-val')}>{item.quantity}</span>
                                        <Button normal className={cx('btn-quantity')}
                                            onClick={() => handleInCreaQuantity(item.pokemon, item.quantity)}
                                        >
                                            <i className="fa-solid fa-plus"></i>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {/*
                    <div className={cx('cart-item')}>
                        <div className={cx('cart-item-title')}>
                            <h4>Hộp 6 gói thẻ bài Pokemon TCG: Scarlet&Violet 151-Booster Bundle</h4>
                            <div className={cx('cart-price')}>
                                <p>1,200,000₫</p>
                            </div>
                        </div>
                        <div className={cx('cart-item-quantity')}>
                            <div className={cx('cart-item-remove')}>
                                <Button normal className={cx('icon-remove')}>
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </Button>
                            </div>
                            <div className={cx('select-quantity')}>
                                <Button normal className={cx('btn-quantity')}>
                                    <i className="fa-solid fa-minus"></i>
                                </Button>
                                <span className={cx('quantity-val')}>1</span>
                                <Button normal className={cx('btn-quantity')}>
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </div>
                        </div>
                    </div> */}
                    {dataCart.length === 0 &&
                        <div className={cx('no-product')}>
                            <p>Giỏ hàng của bạn đang trống</p>
                        </div>
                    }
                </div>
                <div className={cx('cart-content-bottom')}>
                    Tổng cộng:
                    <span>{totalCoin}$</span>
                </div>
            </div>
            <div className={cx('cart-summary')}>
                <Button text className={cx('btn-buy')} to={'/cart'}>Thanh toán</Button>
            </div>
        </div >
    )
}

export default CartOnHome