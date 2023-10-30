import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  currentRate = 3.14;
  @Input() rating: any;
  @Input() isReadOnly: boolean = false;
	ariaValueText(current: number, max: number) {
		return `${current} out of ${max} hearts`;
  }
}
