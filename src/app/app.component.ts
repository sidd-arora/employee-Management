import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  showData : boolean = false;
  showDiv(): void {
    this.showData = this.showData == false ? true : false;
  }
}


