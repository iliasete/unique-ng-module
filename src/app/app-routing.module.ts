import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'pageA',
    loadChildren: () => import('./pages/page-a/page-a.module').then(m => m.PageAModule)
  },
  {
    path: 'pageB',
    loadChildren: () => import('./pages/page-b/page-b.module').then(m => m.PageBModule)
  },
  {
    path: 'pageC',
    loadChildren: () => import('./pages/page-c/page-c.module').then(m => m.PageCModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
