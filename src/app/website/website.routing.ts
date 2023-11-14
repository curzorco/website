import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Componentes
import { WebsiteComponent } from './website.component';



const routes: Routes = [
    // Ruta Padre:
    { 
        path: '', 
        component: WebsiteComponent,
        loadChildren: () => import('./website-child-routes.module').then( m => m.WebsiteChildRoutesModule )
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class WebsiteRoutingModule {}
