import classNames from "classnames/bind"
import { memo, useCallback, useContext, useState } from "react"
import { Link } from 'react-router-dom'

import styles from './ProductDetail.module.css'
import Button from "../Button"
import { CartContext } from '../../common/DataCartContext'

const cx = classNames.bind(styles)

function ProductDetail({ onShow, pokemon }) {
    const [quantity, setQuantity] = useState(1)
    const { handleSaveOrUpdate } = useContext(CartContext)

    const handleInCreaQuantity = useCallback(() => {
        setQuantity(quantity => quantity + 1)
    }, [])
    const handleDeCreaQuantity = useCallback(() => {
        setQuantity(quantity => {
            if (quantity > 1) {
                return quantity - 1
            }
            return 1
        })
    }, [])
    const handlerAddCart = (pokemon) => {
        handleSaveOrUpdate(pokemon, quantity)
        // alert(message)
        onShow()
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('product-title')}>
                    <img src={pokemon.sprites.other.dream_world.front_default}
                        alt={pokemon.name} />
                    <div className={cx('info')}>
                        <h4>
                            <Link to={`/products/${pokemon.name}`}>{pokemon.name}</Link>
                        </h4>
                    </div>
                </div>
                <div className={cx('product-des')}>
                    <span>Loại: {pokemon.types[0].type.name}</span>
                    <span>
                        Chiều cao: {(pokemon.height * 10).toFixed(2)}cm
                        {' - '}
                        Cân nặng: {((pokemon.weight * 0.1).toFixed(2))}kg
                    </span>
                    <h4>Thuộc tính</h4>
                    <span>
                        HP: {pokemon.stats[0].base_stat}
                        {' - '}
                        Tốc độ: {pokemon.stats[5].base_stat}
                    </span>
                    <span>
                        Tấn công: {pokemon.stats[1].base_stat}
                        {' - '}
                        Tấn công đặc biệt: {pokemon.stats[3].base_stat}
                    </span>
                    <span>
                        Phòng thủ: {pokemon.stats[2].base_stat}
                        {' - '}
                        Phòng thủ đặc biệt: {pokemon.stats[4].base_stat}
                    </span>
                </div>
                <div className={cx('product-note')}>
                    <div className={cx('note-box')}>
                        <i className="fa-regular fa-pen-to-square"></i>
                        <input type="text" placeholder="Thêm ghi chú" />
                    </div>
                </div>
                <div className={cx('product-action')}>
                    <div className={cx('select-quantity')}>
                        <Button icon rounded onClick={handleDeCreaQuantity}>
                            <i className="fa-solid fa-minus"></i>
                        </Button>
                        <span>{quantity}</span>
                        <Button icon rounded onClick={handleInCreaQuantity}>
                            <i className="fa-solid fa-plus"></i>
                        </Button>
                    </div>
                    <Button normal onClick={() => handlerAddCart(pokemon)}>
                        <p>CHỌN MUA</p>
                        <p>{pokemon.id * quantity}$</p>
                    </Button>
                </div>
                <span className={cx('close')} onClick={onShow}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
            </div>
            <div className={cx('overlay')} onClick={onShow}></div>
        </div>
    )
}

export default memo(ProductDetail)