import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
declare var bootstrap: any;



interface CardData {
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  services: Services[]
}

interface Services {
  name: string,
  icon: string,
  only?: boolean
}

@Component({
  selector: 'app-services-swiper',
  templateUrl: './services-swiper.component.html',
  styleUrls: ['./services-swiper.component.scss']
})
export class ServicesSwiperComponent implements OnInit {

  cardDataSlide_1: CardData[] = [
    {
      "title": "Web",
      "subtitle": "Desarrollo Web",
      "icon": "fa-solid fa-earth-americas fa-lg",
      "description": "Productos con experiencias digitales intuitivas y funcionales para tus usuarios.",
      "services": [
        {
          "name": "Websites\nLanding Pages", 
          "icon": "fa-solid fa-computer fa-lg"
        },
        {
          "name": "Apps", 
          "icon": "fa-solid fa-mobile-screen-button fa-lg"
        },
        {
          "name": "Ecommerce", 
          "icon": "fa-solid fa-desktop fa-lg"
        }
      ]
    }
  ];
  cardData: CardData[] = [];

  set setCardData(value: any) {
    this.cardData = value;
  }

  constructor(public translocoService: TranslocoService) {}

  ngOnInit(): void {

    this.translate();
    this.initializeCarousel();
  }

  translate() {

    this.translocoService.selectTranslation()
                         .subscribe(value => {

                          this.cardData = value['services.cardData'];
                         });
  }

  initializeCarousel() {

    const carouselElement = document.querySelector('#carousel');

    const carousel = new bootstrap.Carousel(carouselElement, {
      interval: 2000,
      touch: true
    })
  }
}
