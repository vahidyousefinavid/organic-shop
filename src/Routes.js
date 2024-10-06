import Shop from "./screens/ShopPeace/ShopPro"
import Bag from "./screens/bag/bag"
import Home from "./screens/home"


const routes = [
    {
        component: <Home />,
        url: "/"
    },
    {
        component: <Bag />,
        url: "/bag"
    },
    {
        component: <Shop />,
        url: "/shop/:sort"
    },
   
]
export default routes