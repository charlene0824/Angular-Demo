import {provideRouter,RouterConfig} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HeroesComponent} from './heroes.component'
import{HeroDetailComponent} from './hero-detail.component'

const routes: Routerconfig = [
	{
		path: 'heroes',
		component: HeroesComponent,
		children:[]
	},
	{
		path:'dashboard',
		component: DashboardComponent,
		children:[]
	},
	{
		path:'detail/:id',
		component: HeroDetailComponent
	}
	{
		path:'',
		component: DashboardComponent,
	}
];
export const appRouterProviders = [
	provideRouter(routes)
]