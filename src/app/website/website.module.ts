import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslocoRootModule } from '../transloco-root.module';
// Modulos
import { SharedModule } from './shared/shared.module';
// Componentes
import { BlogComponent } from './blog/blog.component';
import { ContactFormComponent } from './singlepage-website/components/contact-form/contact-form.component';
import { HomeCardComponent } from './singlepage-website/components/home-card/home-card.component';
import { ModalContactComponent } from './singlepage-website/components/contact-form/modal-contact/modal-contact.component';
import { AboutCardComponent } from './singlepage-website/components/about-card/about-card.component';
import { ProjectCardComponent } from './singlepage-website/components/project-card/project-card.component';
import { PlanCardComponent } from './singlepage-website/components/plan-card/plan-card.component';
import { ServicesSwiperComponent } from './singlepage-website/components/services-swiper/services-swiper.component';
import { SinglepageWebsiteComponent } from './singlepage-website/singlepage-website.component';
import { WebsiteComponent } from './website.component';



@NgModule({
  declarations: [
    BlogComponent,
    ContactFormComponent,
    HomeCardComponent,
    ModalContactComponent,
    AboutCardComponent,
    ProjectCardComponent,
    PlanCardComponent,
    ServicesSwiperComponent,
    SinglepageWebsiteComponent,
    WebsiteComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
    TranslocoRootModule
  ],
  exports: [
    WebsiteComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class WebsiteModule { }
