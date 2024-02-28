import routes from '../Contants/routes'
import HeaderOnly from '../layout/HeaderOnly'
import NormalLayout from '../layout/NormalLayout'
import AdminLayout from '../layout/AdminLayout'
import Home from "../pages/Home"
import Cart from '../pages/Cart'
import Products from '../pages/Products'
import Contact from '../pages/Contact'
import News from '../pages/News'
import Pokemon from "../pages/Pokemon/"
import Admin from "../pages/Admin"

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.products, component: Products },
    { path: routes.cart, component: Cart, layout: NormalLayout },
    { path: routes.news, component: News, layout: NormalLayout },
    { path: routes.contact, component: Contact, layout: NormalLayout },
    { path: routes.pokemon, component: Pokemon, layout: HeaderOnly },
    { path: routes.admin, component: Admin, layout: AdminLayout }
]
// const privateRoute = []
export { publicRoutes }