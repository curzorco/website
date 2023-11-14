import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  collapsedNavbar = false;

  constructor(public translocoService: TranslocoService) {}

  navbarToggler(tag?: any) {

    // Detectar si la navbar esta colapsada
    this.collapsedNavbar = !this.collapsedNavbar;

    // Scroll a section indicada
    document.getElementById(tag)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  translate() {

    this.translocoService.getActiveLang() === 'es'
        ? this.translocoService.setActiveLang('en')
        : this.translocoService.setActiveLang('es');
  }
}
