import classNames from "classnames/bind"
import { useCallback, useEffect, useRef, useState } from "react"
import LazyLoad from "react-lazyload"

import styles from './WrapperProduct.module.css'
import Product from "./Product"
import { getAllPokemons, getTotalPage } from '../../../services/getAllPokeService'
import Button from "../../../components/Button"
import { CUR_PAGE } from '../../../Contants/constVarStorage'
import Loader from '../../../components/Loader'

const cx = classNames.bind(styles)

function WrapperProduct() {
    const [data, setData] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const [curPage, setCurPage] = useState(JSON.parse(localStorage.getItem(CUR_PAGE)) || 0);
    const [showPages, setShowPages] = useState([])
    const scrollToTopRef = useRef()
    const [isLoading, setIsLoading] = useState(true)

    const handleSetCurPage = useCallback((page) => {
        localStorage.setItem(CUR_PAGE, JSON.stringify(page))
        setCurPage(page)
        setIsLoading(true)
    }, [setCurPage])

    useEffect(() => {
        const getData = async () => {
            try {
                const totalPages = await getTotalPage();
                setTotalPage(totalPages);

                const pokemonDetails = await getAllPokemons(curPage);
                setData(pokemonDetails)
            } catch (error) {
                console.log('Error:', error);
            }
        };
        getData();
        const arr = []
        for (let i = curPage - 1; i < totalPage; i++) {
            if (arr.length < 5 && i > 0) {
                arr.push(i)
            }
        }
        setShowPages(arr)
        if (!isLoading && scrollToTopRef.current) {
            scrollToTopRef?.current.scrollIntoView({ behavior: 'smooth' })
        }
        const id = setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(id)
    }, [curPage, totalPage, isLoading])

    return (
        <div>
            {isLoading ?
                (<Loader />) :
                (<div className={cx('wrapper')} ref={scrollToTopRef}>
                    <div className={cx('row')}>
                        {data.length > 0 &&
                            data.map((pokemon, index) => (
                                <div
                                    key={index}
                                    className={cx('col-xl-4 col-lg-4 col-md-6 col-sm-12')}
                                >
                                    <LazyLoad>
                                        <Product pokemon={pokemon} />
                                    </LazyLoad>
                                </div>
                            ))
                        }
                    </div>
                    <div className={cx('paging')}>
                        {showPages.length > 0 &&
                            showPages.map(item => (
                                <Button key={item} normal onClick={() => handleSetCurPage(item - 1)}
                                    className={cx('btn-page', item === curPage + 1 ? 'active' : '')}
                                >
                                    {item}
                                </Button>
                            ))
                        }
                    </div>
                </div>)}
        </div>
    )
}

export default WrapperProduct