import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router';
import { useI18n } from 'vue-i18n';

// 自动读取目录生成路由配置
const modules = import.meta.glob('../views/**/*.vue');
const routes: RouteRecordRaw[] = [];
const sideMenuMap = new Map();

function getRouteName(path: string): string {
  const name = path.charAt(0).toUpperCase() + path.slice(1);
  return name.replace(/-(\w)/g, (_, letter) => {
    return letter.toUpperCase();
  });
}

function getRoutePath(path: string): string {
  return path.replace('index', '');
}

function addSideItem(path: string, name: string) {
  const pathArr = path.split('/').filter(Boolean);
  if (pathArr.length === 2) {
    const [module, _] = pathArr;
    const moduleName = module.charAt(0).toUpperCase() + module.slice(1);
    const old = sideMenuMap.get(moduleName);
    const item = {
      name: name,
      path: path,
    };
    sideMenuMap.set(moduleName, old ? [...old, item] : [item]);
  }
}
for (const key in modules) {
  const keyD = key.replace('../views/', '/').replace('.vue', '');
  const path = getRoutePath(keyD);
  const name = getRouteName(keyD.split('/').pop() || '');
  const component = modules[key];

  addSideItem(keyD, name);
  routes.push({
    path,
    name,
    component,
    meta: {
      title: name,
    },
  });
}
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    console.log(document.body);
    document.querySelector('.app_scroll')?.scrollTo(0, 0);
  },
});

router.beforeEach((to, from, next) => {
  const lang = localStorage.getItem('lang') || 'zh-CN';
  document.documentElement.setAttribute('lang', lang);

  next();
});

export default router;
export { routes, sideMenuMap };
