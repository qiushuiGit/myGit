import Home from "../components/home";
import Search from "../components/router/search";
import CategoryList from "../components/router/categorylist";
import ScareBuySub from "../components/router/scarebuySub";
import PromotionSub from "../components/router/promotionSub";
import Find from "../components/router/find";
import My from "../components/router/my";
import GoodsListSub from "../components/router/goodsListSub";


export const routePath = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/category/list:id',

        component: CategoryList
    },
    {
        path: '/scarebuy/sub:id',
        component: ScareBuySub
    },
    {
        path: '/promotion/sub:id',
        component: PromotionSub
    },
    {
        path: '/find',
        component: Find
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/goodsList:id',
        component: GoodsListSub
    }
]