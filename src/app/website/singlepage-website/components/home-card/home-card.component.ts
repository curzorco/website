import { Component } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent {

  scrollTo(tag: string) {

    // Scroll a section indicada
    document.getElementById(tag)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
