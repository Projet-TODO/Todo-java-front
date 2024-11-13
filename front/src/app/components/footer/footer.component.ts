import { Component } from '@angular/core';
import { SharedDataService } from 'services/shared-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isLoading = false;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.isLoading$.subscribe((loadingState) => {
      this.isLoading = loadingState;
    });
  }
}
