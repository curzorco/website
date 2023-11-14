import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Componentes
import { BlogEditingComponent } from './blog-editing/blog-editing.component';



const routes: Routes = [
  {
    path: '', component: BlogEditingComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditBlogRoutingModule { }
