import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';
import HomeLayout from './containers/HomeLayout';
function Loading() {
  return <div>Loading...</div>;
}
const Category = Loadable({
  loader: () => import('./views/Category'),
  loading: Loading,
});
const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});
const willness = Loadable({
  loader: () => import('./views/Willingness'),
  loading: Loading,
});
const apperences = Loadable({
  loader: () => import('./views/Apperences'),
  loading: Loading,
});
const models = Loadable({
  loader: () => import('./views/Models'),
  loading: Loading,
});
const addmodel = Loadable({
  loader: () => import('./views/Addmodel'),  
  loading: Loading,   
});
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: HomeLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/superadmin/category', exact: true, name: 'Category', component: Category },
    { path: '/superadmin/willness', exact: true, name: 'Willness', component: willness },
  { path: '/superadmin/apperences', exact: true, name: 'apperences', component: apperences },
      { path: '/superadmin/models', exact: true, name: 'models', component: models },
      { path: '/superadmin/addmodel', exact: true, name: 'models', component: addmodel },

];

export default routes;
