import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  screenValue: string = '0';
  changeValue(input: string) {
    if(this.screenValue=="0")
    {
      this.screenValue=input;
    }
    else
    {
      this.screenValue = this.screenValue + input;
    }
  }
  backspace() {
    this.screenValue=this.screenValue.toString();
    this.screenValue = this.screenValue.slice(0,-1);
    if(this.screenValue.length==0)
    {
      this.screenValue='0';
    }
  }
  calculateResult() {
    this.screenValue=eval(this.screenValue);
  }
}
