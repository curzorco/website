import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  backgroundImg = `background-image: url("/assets/images/sections/projects/proyectosCardBkg.svg"), 
                   linear-gradient(rgba(248, 244, 227, 0.7), rgba(248, 244, 227, 0.7))`;

  projectData: any = [];

  constructor(public translocoService: TranslocoService) {}

  ngOnInit(): void {
    
    this.translate();
  }

  translate() {

    this.translocoService.selectTranslation()
                         .subscribe(value => {

                          this.projectData = value['projects.projectData'];
                         });
  }
}
