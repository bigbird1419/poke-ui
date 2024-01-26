import classNames from "classnames/bind"
import {BounceLoader} from 'react-spinners'

import styles from './Loader.module.css'

const cx = classNames.bind(styles)

function Loader(){
    return (
        <div className={cx('wrapper')}>
            <BounceLoader color="#66a55f" speedMultiplier={2}/>
        </div>
    )
}

export default Loader