import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modulos
import { EditBlogRoutingModule } from './edit-blog-routing.module';
// Componentes
import { BlogEditingComponent } from './blog-editing/blog-editing.component';




@NgModule({
  declarations: [ BlogEditingComponent ],
  imports: [
    CommonModule,
    EditBlogRoutingModule
  ]
})
export class EditBlogModule { }
