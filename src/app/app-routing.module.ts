import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteRoutingModule } from './website/website.routing';



const routes: Routes = [
  { path: '', // WebsiteRoutingModule
    redirectTo: '',
    pathMatch: 'full'
  },
  // TODO: Pasar rutas a archivos independientes como en WebsiteModule
  { path: 'login', loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ) },
  { path: 'edit-blog', loadChildren: () => import('./edit-blog/edit-blog.module').then( m => m.EditBlogModule ) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
    WebsiteRoutingModule // Rutas de Modulo Website 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
