import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
// Componentes
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhatsappBtnComponent } from './whatsapp-btn/whatsapp-btn.component';
import { ModalNoticeComponent } from './footer/modal-notice/modal-notice.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    WhatsappBtnComponent,
    ModalNoticeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslocoRootModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    WhatsappBtnComponent
  ]
})
export class SharedModule { }
