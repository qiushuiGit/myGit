import Home from '../components/home';
import Line from '../components/line'
import Sunburst from '../components/sunburst'
import Pie from '../components/pie'
import Amap from '../components/map'
import NotFound from '../components/notfound'

export const router = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/line',
        component: Line
    },
    {
        path: '/sunburst',
        component: Sunburst
    },
    {
        path: '/pie',
        component: Pie
    },
    {
        path: '/map',
        component: Amap
    },
    {
        path: '*',
        component: NotFound
    }
]