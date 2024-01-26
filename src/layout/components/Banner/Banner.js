import classNames from "classnames/bind"

import styles from './Banner.module.css'
import Button from '../../../components/Button'

const cx = classNames.bind(styles)

function Banner(){

    return (
        <div className={cx('wrapper')}>
            <Button to={'/'} img className={cx('banner')}>
                <img src="https://theme.hstatic.net/200000346081/1000775587/14/home_bannerslider_1_picture.jpg?v=118" alt="//" />
            </Button>
        </div>
    )
}

export default Banner