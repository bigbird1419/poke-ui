import { CART_POKE } from '../Contants/constVarStorage'

export const getCart = () => {
    const data = JSON.parse(localStorage.getItem(CART_POKE)) || []
    return data
}

export const saveCart = (pokemon, quantity) => {
    try {
        let data = getCart()
        if (data) {
            if (data.some(item => item.pokemon.name === pokemon.name)) {
                data = data.filter(item => item.pokemon.name !== pokemon.name)
            }
            data = [
                {
                    pokemon,
                    quantity
                },
                ...data
            ]
        } else {
            data = [
                {
                    pokemon,
                    quantity
                }
            ]
        }
        localStorage.setItem(CART_POKE, JSON.stringify(data))
        return 'Thêm thành công'
    } catch (error) {
        return 'Có lỗi xảy ra, vui lòng thử lại'
    }
}

export const delCart = (index) => {
    try {
        let data = getCart()
        if (data) {
            data.splice(index, 1)
            localStorage.setItem(CART_POKE, JSON.stringify(data))
        }
        return 'Xóa thành công'
    } catch (error) {
        return 'Có lỗi xảy ra, vui lòng thử lại'
    }
}

export const delAll = () => {
    localStorage.removeItem(CART_POKE)
}

export const getTotalCoin = () => {
    try {
        let data = getCart()
        if (data) {
            let tmp = data.reduce((cur, item) => {
                return cur + item.pokemon.id * item.quantity
            }, 0)
            return tmp
        }
    } catch (error) {
        return 0
    }
}

export const getTotalQuantity= () => {
    try {
        let data = getCart()
        if (data) {
            return data.reduce((cur, item) => {
                return cur + item.quantity
            }, 0)
        }
    } catch (error) {
        return 0
    }
}

export const getOnePokemon = (pokemon) => {
    try {
        let data = getCart()
        if (data) {
            let tmp = data.filter(item => item.name === pokemon.name)
            return tmp[0]
        }
    } catch (error) {
        return 0
    }
}