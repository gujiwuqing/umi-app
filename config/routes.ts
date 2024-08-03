const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    name: '首页',
    path: '/dashboard',
    component: './Dashboard',
  },
  {
    name: '登陆',
    path: '/login',
    component: './Login',
    menuRender: false, //隐藏菜单
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
];

export default routes;
