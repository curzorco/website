import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {

  plansData: any = [];

  constructor(public translocoService: TranslocoService) {}

  ngOnInit(): void {
    
    this.translate();
  }

  translate() {

    this.translocoService.selectTranslation()
                         .subscribe(value => {

                          this.plansData = value['plans.plansData'];
                         });
  }
}
