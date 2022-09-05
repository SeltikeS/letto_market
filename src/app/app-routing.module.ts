import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {RouterPaths} from './entities/enums/router.enum';

const routes: Routes = [
	{path: '', redirectTo: 'main', pathMatch: 'full'},
	{
		path: RouterPaths.MAIN,
		loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule),
	},
	{
		path: RouterPaths.CATALOG,
		loadChildren: () => import('./pages/catalog/catalog.module').then((m) => m.CatalogModule),
	},
	{
		path: RouterPaths.AUTH,
		loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
	},
	{
		path: RouterPaths.ORDERS,
		loadChildren: () => import('./pages/orders/orders.module').then((m) => m.OrdersModule),
	},
	{
		path: RouterPaths.PREMIUM,
		loadChildren: () => import('./pages/premium/premium.module').then((m) => m.PremiumModule),
	},
	{
		path: RouterPaths.CHATS,
		loadChildren: () => import('./pages/chats/chats.module').then((m) => m.ChatsModule),
	},
	{
		path: RouterPaths.FAVORITES,
		loadChildren: () => import('./pages/favorites/favorites.module').then((m) => m.FavoritesModule),
	},
	{
		path: RouterPaths.PROFILE,
		loadChildren: () => import('./pages/profile/profile.module').then((m) => m.ProfileModule),
	},
	{
		path: RouterPaths.PRODUCT_CARD,
		loadChildren: () =>
			import('./pages/product-card/product-card.module').then((m) => m.ProductCardModule),
	},
	{
		path: RouterPaths.ADMIN_PANEL,
		loadChildren: () =>
			import('./pages/admin-panel/admin-panel.module').then((m) => m.AdminPanelModule),
	},
	{
		path: RouterPaths.TERMS_AND_CONDITIONS,
		loadChildren: () =>
			import('./pages/terms-and-conditions/terms-and-conditions.module').then(
				(m) => m.TermsAndConditionsModule,
			),
	},
	{
		path: RouterPaths.TERMS_OF_USE,
		loadChildren: () =>
			import('./pages/terms-of-use/terms-of-use.module').then((m) => m.TermsOfUseModule),
	},
	{
		path: RouterPaths.FAQ,
		loadChildren: () => import('./pages/faq/faq.module').then((m) => m.FAQModule),
	},
	{
		path: RouterPaths.NEWS,
		loadChildren: () => import('./pages/news/news.module').then((m) => m.NewsModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule],
})
export class AppRoutingModule {}
