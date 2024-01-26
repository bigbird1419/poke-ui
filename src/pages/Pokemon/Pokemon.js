import classNames from "classnames/bind"
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext, useCallback } from "react";

import styles from './Pokemon.module.css'
import { getPokemonDetails } from '../../services/getAllPokeService'
import Button from "../../components/Button";
import { CartContext } from '../../common/DataCartContext'
import Loader from '../../components/Loader'

const cx = classNames.bind(styles)

function Pokemon() {
    const { pokemonName } = useParams();
    const [pokemon, setPokemon] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const { handleSaveOrUpdate } = useContext(CartContext)
    const [isLoading, setIsLoading] = useState(true)

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
        const message = handleSaveOrUpdate(pokemon, quantity)
        alert(message)
    }
    document.title = pokemon?.name || 'POKEMON TCG'

    useEffect(() => {
        const getPokemon = async () => {
            try {
                const pokemonDetails = await getPokemonDetails(pokemonName);
                setPokemon(pokemonDetails)
            } catch (error) {
                console.log('Error:', error);
            }
        }
        getPokemon()
        let id = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(id)
    }, [pokemonName])

    return (
        <div>
            {isLoading ?
                <Loader /> :
                (<div className={cx('wrapper')}>
                    <div className={cx('container')}>
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                {pokemon &&
                                    <div className={cx('row', 'product-detail')}>
                                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                            <div className={cx('product-imgs')}>
                                                <div className={cx('img-box')}>
                                                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                            <div className={cx('product-content')}>
                                                <div className={cx('product-title')}>
                                                    <h1>{pokemon.name}</h1>
                                                    <div className={cx('gif-box')}>
                                                        <img src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} />
                                                    </div>
                                                </div>
                                                <div className={cx('product-price')}>
                                                    <span>Giá: {pokemon.id}$</span>
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
                                                <div className={cx('product-action')}>
                                                    <div className={cx('select-quantity')}>
                                                        <Button icon onClick={handleDeCreaQuantity}>
                                                            <i className="fa-solid fa-minus"></i>
                                                        </Button>
                                                        <span>{quantity}</span>
                                                        <Button icon onClick={handleInCreaQuantity}>
                                                            <i className="fa-solid fa-plus"></i>
                                                        </Button>
                                                    </div>
                                                    <Button normal onClick={() => handlerAddCart(pokemon)}>
                                                        <p>CHỌN MUA</p>
                                                        <p>{pokemon.id * quantity}$</p>
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {pokemon === null &&
                                    <h1>Không có dữ liệu</h1>
                                }
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default Pokemon