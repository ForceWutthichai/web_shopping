import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './product/add-product/add-product.component';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path : 'register',component : RegisterComponent,
    // loadChildren:() =>
    //   import('./pages/welcome/welcome.routes').then((m)=>m.WELCOME_ROUTES)
  },
  {
    path :'product',component : ProductComponent
  },
  {
    path : 'addProduct',component :AddProductComponent
  }

];
