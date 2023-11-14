import { Component, Inject, Input, SimpleChanges, OnChanges, OnInit, ChangeDetectorRef } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observer } from 'rxjs';
import { delay, filter, tap } from 'rxjs/operators';

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

    
  }

  translate() {

    this.translocoService.selectTranslation()
                         .subscribe(value => {

                          this.cardData = value['services.cardData'];

                          this.updateSwiper();
                         });
  }

  updateSwiper() {

    const swiperEl: any = document.querySelector('swiper-container');

    const swiperParams = {
      effect: 'cube',
      cubeEffect: {
        slideShadows: false,
      },
      on: {
        init() {
          // ...
        },
      },
    };

    setTimeout(() => {
      
      Object.assign(swiperEl, swiperParams);
      swiperEl!.initialize();
    }, 10);
  }
}
