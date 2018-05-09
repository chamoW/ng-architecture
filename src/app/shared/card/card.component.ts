import { ResourceService } from './../resource.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() header;
  @Input() url;
  @Input() parameter;

  data$;

  constructor(private resourceService: ResourceService) {
    console.log(this.header, this.url, this.parameter);
    // this.data$ = this.resourceService.getResource(this.url, this.parameter);
  }

  ngOnInit() {
    console.log(this.header, this.url, this.parameter);
    this.data$ = this.resourceService.getResource(this.url, this.parameter);
  }

}
