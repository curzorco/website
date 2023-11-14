import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { BlogComponent } from './blog/blog.component';
import { WebsiteComponent } from './website.component';
import { SinglepageWebsiteComponent } from './singlepage-website/singlepage-website.component';



const childRoutes: Routes = [
  // Rutas hijas:
  {
    path: '', component: SinglepageWebsiteComponent,
  },
  {
    path: 'blog', component: BlogComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class WebsiteChildRoutesModule { }
