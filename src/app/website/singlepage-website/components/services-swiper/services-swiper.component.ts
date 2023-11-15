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
