import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.scss']
})
export class AboutCardComponent {

  classFlag = false;

  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    
    if (window.innerWidth >= 768) {
      this.classFlag = true;
    } else {
      this.classFlag = false;
    }

    // console.log(this.classFlag);
  }

  ngOnInit(): void {
    
    this.onResize();
  }
}
