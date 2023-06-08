import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighLight: string = "";
  constructor(private element:ElementRef) { }

  ngOnChanges() {
    console.log(this.appHighLight)
      this.element.nativeElement.style.backgroundColor = this.appHighLight;
    
  }
 

}
