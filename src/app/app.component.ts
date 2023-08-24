import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'barcode';

  value: string = "";
  isError = false;

  onError(error: any) {
    console.error(error);
    this.isError = true;
  }
  
}
