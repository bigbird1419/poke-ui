import classNames from "classnames/bind"
import { useEffect, useState } from "react"

import styles from './Search.module.css'
import Button from "../../../components/Button/Button"
import { getNameForSearch } from '../../../services/searchService'

const cx = classNames.bind(styles)

function Search({onShow = {}}) {
    const [valSearch, setValSearch] = useState('')
    const [dataSearch, setDataSearch] = useState([])
    const [resultSearch, setResultSearch] = useState([])

    const handleFindResultSearch = (e) => {
        setValSearch(e.target.value)
        const rs = dataSearch.filter(name => name.includes(valSearch))
        setResultSearch(rs)
    }

    console.log(resultSearch)

    useEffect(() => {
        const getdata = async () => {
            const data = await getNameForSearch();
            setDataSearch(data)
        }
        getdata()
    }, [])

    return (
        <div className={cx('wrapper')}>
            <p className={cx('title')}>TÌM KIẾM</p>
            <form className={cx('form')}>
                <input className={cx('form-input')}
                    placeholder="Enter..."
                    value={valSearch}
                    onChange={(e) => handleFindResultSearch(e)}
                />
                <Button icon className={cx('form-btn')} to={'/product'}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
            </form>
            {resultSearch.length > 0 &&
                <div className={cx('search-result')}>
                    <ul className={cx('result-list')}>
                        {resultSearch.map((item, index) => (
                            <li key={index} className={cx('result-item')}>
                                <Button
                                    text to={`/products/${item}`}
                                    className={cx('result-link')}
                                    onClick={onShow}
                                >
                                    {item}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}
export default Search