import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  scrollTo(tag: string) {

    // Scroll a section indicada
    document.getElementById(tag)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
