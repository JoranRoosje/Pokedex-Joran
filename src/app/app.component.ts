import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  implements AfterViewInit {

  constructor(private elementRef: ElementRef){

  }

  ngAfterViewInit(): void {
      //this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'dimgrey';
  }
}
