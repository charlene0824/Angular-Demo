"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
var heroes_component_1 = require('./heroes.component');
var hero_detail_component_1 = require('./hero-detail.component');
var routes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent,
        children: []
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        children: []
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: '',
        component: dashboard_component_1.DashboardComponent,
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map