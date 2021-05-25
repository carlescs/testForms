import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestForms';

  public save({valid,value}:{valid:boolean|null,value:any}) {
    alert(JSON.stringify(value));
  }
}
