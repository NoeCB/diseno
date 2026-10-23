import { Routes } from '@angular/router';

/**
 * Rutas de la aplicacion.
 *
 * El starter "tabs" dejaba la ruta vacia apuntando a las pestañas. Para esta
 * practica la pagina de inicio es `home`, asi que:
 *   - ''      -> redirige a /home   (pathMatch: 'full' para que solo afecte a
 *                la URL vacia exacta y no actue como prefijo)
 *   - 'home'  -> carga HomePage de forma diferida (lazy loading con
 *                loadComponent, propio de componentes standalone)
 *   - ''      -> las rutas del starter se mantienen al final para que
 *                /tabs/tab1, /tabs/tab2 y /tabs/tab3 sigan funcionando
 *
 * El ORDEN importa: Angular evalua las rutas de arriba a abajo y una ruta con
 * path '' sin pathMatch 'full' hace de prefijo y capturaria tambien /home.
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];
