import classNames from "classnames/bind"
import { useCallback, useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import styles from './Home.module.css'
import Button from '../../components/Button'
import Cart from "./CartOnHome"
import ProductDetail from "../../components/ProductDetail"
import { getAllPokemons } from '../../services/getAllPokeService'
import Loader from "../../components/Loader/Loader"

const cx = classNames.bind(styles)

function Home() {
    const [allPokemons, setAllPokemons] = useState([]);
    const [showProductDetail, setShowProductDetail] = useState(false)
    const [curPokemon, setCurPokemon] = useState({})
    const [curIndexLoadPoke, setCurIndexLoadPoke] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [showCartOnMobile, setShowCartOnMobile] = useState(false)

    const handleShowProductDetail = useCallback((pokemon) => {
        setCurPokemon(pokemon)
        setShowProductDetail(cur => !cur)
    }, [])
    const handleShowMore = useCallback(() => {
        setCurIndexLoadPoke(cur => cur + 1)
    }, [])
    const handleShowCartOnMobile = useCallback(() => {
        setShowCartOnMobile(cur => !cur)
    }, [])

    useEffect(() => {
        const getData = async () => {
            try {
                const pokemonDetails = await getAllPokemons(curIndexLoadPoke);
                setAllPokemons((cur) => {
                    return [...cur, ...pokemonDetails]
                });
                setIsLoading(false)
            } catch (error) {
                console.log('Error:', error);
            }
        };
        getData()
    }, [curIndexLoadPoke])
    document.title = "POKEMON TCG"

    return (
        <div>
            {isLoading ?
                (<Loader />) :
                (<div className={cx('wrapper')}>
                    <div className={cx('content')}>
                        <div className={cx('row')}>
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                                <div className={cx('products')}>
                                    <div className={cx('heading')}>
                                        <h3>Hộp thẻ bài Pokemon TCG</h3>
                                    </div>
                                    {allPokemons.length > 0 &&
                                        <div className={cx('product-list')}>
                                            {
                                                allPokemons.map((pokemon, index) => (
                                                    <div className={cx('product-item')}
                                                        key={index}
                                                    >
                                                        <div className={cx('product-img')}>
                                                            <div className={cx('img-box')}>
                                                                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                                                            </div>
                                                        </div>
                                                        <div className={cx('product-info')}>
                                                            <h3>
                                                                <Link to={`/products/${pokemon.name}`}>{pokemon.name}</Link>
                                                            </h3>
                                                            <p className={cx('product-desc')}>
                                                                <span>Loại: {pokemon.types[0].type.name}
                                                                </span>
                                                                <span>
                                                                    Chiều cao: {(pokemon.height * 10).toFixed(2)}cm
                                                                    {' - '}
                                                                    Cân nặng: {(pokemon.weight * 0.1).toFixed(2)}kg
                                                                </span>
                                                            </p>
                                                            <div className={cx('product-action')}>
                                                                <p>{pokemon.id}$</p>
                                                                <Button primary rounded icon
                                                                    onClick={() => handleShowProductDetail(pokemon)}
                                                                    className={cx('btn-icon')}
                                                                >
                                                                    <i className="fa-solid fa-plus" ></i>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    }
                                    <div className={cx('more')}>
                                        <Button text onClick={handleShowMore}
                                            className={cx('btn-more')}>Xem thêm
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                                <div
                                    className={cx('cart', 'fixed-top', showCartOnMobile ? 'active' : '')}
                                >
                                    <Cart onShowInfoCartOnMobile={handleShowCartOnMobile}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {showProductDetail && <ProductDetail onShow={() => handleShowProductDetail({})} pokemon={curPokemon} />}
                </div>)
            }
        </div>
    )
}
export default Home