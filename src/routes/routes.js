import Home from "../pages/Home"
import Cart from '../pages/Cart'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import News from '../pages/News'
import Pokemon from "../pages/Pokemon/"
import routes from '../Contants/routes'
import HeaderOnly from '../layout/HeaderOnly'
import NormalLayout from '../layout/NormalLayout'

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.products, component: Products },
    { path: routes.cart, component: Cart, layout: NormalLayout },
    { path: routes.news, component: News, layout: NormalLayout },
    { path: routes.contact, component: Contact, layout: NormalLayout },
    { path: routes.pokemon, component: Pokemon, layout: HeaderOnly }
]
// const privateRoute = []
export { publicRoutes }