/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const mapRouter = {
  path: '/map',
  component: Layout,
  redirect: '/map/tianditu/marker',
  name: 'Map',
  meta: {
    title: '地图',
    icon: 'map'
  },
  children: [
    {
      path: 'tianditu',
      component: () => import('@/views/map/tianditu/marker/index'), // Parent router-view
      name: 'Tianditu',
      meta: { title: '天地图' },
      redirect: '/map/tianditu/marker',
      children: [
        {
          path: 'marker',
          component: () => import('@/views/map/tianditu/marker/index'),
          name: 'Marker',
          meta: { title: '标记' }
        },
        {
          path: 'menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2'),
          name: 'Menu1-2',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: { title: '菜单 1-2' },
          children: [
            {
              path: 'menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
              name: 'Menu1-2-1',
              meta: { title: '菜单 1-2-1' }
            },
            {
              path: 'menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
              name: 'Menu1-2-2',
              meta: { title: '菜单 1-2-2' }
            }
          ]
        },
        {
          path: 'menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3'),
          name: 'Menu1-3',
          meta: { title: '菜单 1-3' }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'Menu2',
      component: () => import('@/views/nested/menu2/index'),
      meta: { title: '菜单 2' }
    }
  ]
}

export default mapRouter
