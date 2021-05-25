import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestForms';
  public title2: string | undefined;
  public title3: string | undefined;

  public save({valid,value}:{valid:boolean|null,value:any}) {
    alert(JSON.stringify(value));
  }

  public buttonClicked() {
    alert('button clicked!');
  }
}
