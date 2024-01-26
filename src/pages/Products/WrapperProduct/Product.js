import classNames from "classnames/bind"
import { useState, useCallback, useEffect } from 'react'
import { BounceLoader } from 'react-spinners'

import styles from './WrapperProduct.module.css'
import Button from '../../../components/Button'
import ProductDetail from "../../../components/ProductDetail"

const cx = classNames.bind(styles)

function Product({ pokemon = {} }) {
    const [curPoke, setCurPoke] = useState({})
    const [showPokeDetail, setShowPokeDetail] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const handleShowPokeDetail = useCallback((pokemon) => {
        setCurPoke(pokemon)
        setShowPokeDetail(cur => !cur)
    }, [])
    
    useEffect(() => {
        setIsLoading(true)
        const id = setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        return () => clearTimeout(id)
    }, [pokemon])

    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <Button normal to={`/products/${pokemon.name}`} className={cx('btn-product--img')}>
                    {isLoading ?
                        <div className={cx('img-box')}>
                            <BounceLoader color="#66a55f"/>
                        </div> :
                        <div className={cx('img-box')}>
                            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                        </div>
                    }
                </Button>
                <div className={cx('product-detail')}>
                    <div className={cx('product-name')}>
                        <Button text to={`/products/${pokemon.name}`} className={cx('product-name--link')}>
                            {pokemon.name}
                        </Button>
                    </div>
                    <div className={cx('product-price')}>
                        <span>{pokemon.id}$</span>
                    </div>
                    <div className={cx('product-action')}
                        onClick={() => handleShowPokeDetail(pokemon)}
                    >
                        <Button normal className={cx('btn-buy')}>
                            <span className={cx('btn-buy--icon')}><i className="fa-solid fa-cart-plus"></i></span>
                            <span>CHỌN MUA</span>
                        </Button>
                    </div>
                </div>
            </div>
            {showPokeDetail &&
                <ProductDetail pokemon={curPoke} onShow={() => handleShowPokeDetail({})} />
            }
        </div>
    )
}

export default Product