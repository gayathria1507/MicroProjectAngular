import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

//   flag:boolean;

//   vehicles:string[];
// constructor(){
//   this.flag=true

//   this.vehicles=["TwoWheeler","ThreeWheeler","FourWheeler"];
// }
// changeflag(){
//   this.flag =! this.flag;
// }




  flag:boolean;
  vechicles:string[];
  selectedvechicle: string;
  mystyle:{};
constructor(){
  this.flag=true
  this.vechicles=["TwoWheeler","ThreeWheeler","FourWheeler"];
  this.selectedvechicle="";
  this.mystyle={'width':'40%','border':'2px solid green' ,'border-radius':'25px'};
}
changeflag()
{
  this.flag =! this.flag;
}

setSelectedItem(vec:string)
{
  this.selectedvechicle = vec;
}
changestyle(){
  this.mystyle={'width':'40%','border':'2px solid green' ,'border-radius':'25px'};
}
}
