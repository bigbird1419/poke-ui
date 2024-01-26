import classNames from "classnames/bind";
import {Link} from 'react-router-dom'
import { memo } from "react";

import styles from './Button.module.css'

const cx = classNames.bind(styles)

function Button({
    to,
    href,
    primary = false,
    text = false,
    icon = false,
    img = false,
    disabled = false,
    rounded = false,
    normal = false,
    className,
    children,
    onClick = () => {},
    ...passProps
}){
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        icon,
        text,
        img,
        rounded,
        normal,
        disabled,
    });
    return (
        <Comp className={classes} {...props} onClick={onClick}>
            {icon && <span className={cx('')}>{children}</span>}
            {text && <span className={cx('title')}>{children}</span>}
            {img && <picture className={cx('wrap-img')}>{children}</picture>}
            {normal && <span className={cx('')}>{children}</span>}
        </Comp>
    )
}

export default memo(Button)