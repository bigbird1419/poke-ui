import classNames from "classnames/bind"

import styles from './Product.module.css'
import WrapperProduct from "./WrapperProduct"

const cx = classNames.bind(styles)

function Product() {

    document.title = "POKEMON TCG"

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <WrapperProduct/>
                </div>
            </div>
        </div>
    )
}
export default Product