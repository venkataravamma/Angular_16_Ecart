import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-sample',
  templateUrl: './switch-sample.component.html',
  styleUrls: ['./switch-sample.component.css'],
})
export class SwitchSampleComponent {
  title = 'angular-switch-directive';
  tab: string = '';
  onInfoClicked() {
    this.tab = 'info';
  }

  onServiceClicked() {
    this.tab = 'service';
  }
  onPrivacyClicked() {
    this.tab = 'privacy';
  }
  onUserAggrementClicked() {
    this.tab = 'user';
  }
}
