import { Component, OnInit, ViewEncapsulation, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import sparkly from 'sparkly';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {



  someRange = [ 0, 300 ];
  startHandle;
   endHandle;
   baseAmt = 0;
   maxAmt = 300;
   sparklines;
   myArr = [];
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
     this.startHandle = this.someRange[0];
     this.endHandle = this.someRange[1];
  }

  ngOnInit() {


    // const source = Observable.range(0, 300).filter( n => n > 220).subscribe(
    //   (val) => {
    //        this.myArr.push(val);
    //        this.sparklines = sparkly( this.myArr, {min: 0, max: 300});
    //   }
    // )

    this.sliderCondition();
     this.sparklines = sparkly([100, 250, 300, 15, 20, 30, 50,300, 250, 250, 190, 230, 300, 250, 270, 290,10,30,50, 70, 50, 40, 70, 200, 150, 300, 270, 99, 150, 199,15, 20, 30, 50,300, 250, 250, 190, 230, 300, 250, 270, 290,10,30,50,290,10,30,50, 70, 50, 40, 70, 200, 150, 300, 270, 99, 150, 199,15, 20, 30,150, 300, 270, 99, 150, 199,15, 20, 30], {min: 0, max: 300})

  }



  onChange(event) {
    this.baseAmt = event[0];
    this.maxAmt = event[1];

  }

  sliderCondition() {
    if(this.baseAmt !== 0 || this.maxAmt !== 300){
      return true;
    }
    else{
      return false;
    }

  }

}
