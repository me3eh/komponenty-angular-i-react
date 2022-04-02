import { Directive, Input, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateFormat]'
})
export class DateFormatDirective implements AfterViewInit {
  @Input() date: string;
  @Input() sep: string;
  @Input() color: string;
  @Input() font: string;
  oldColor = '';
  oldFont = '';


  constructor(private element: ElementRef) {
    this.date='';
    this.sep='';
    this.color='';
    this.font='';
  }

  ngAfterViewInit(): void {
    console.log(this.date, this.sep);
    const elDate: string[] = this.date.split('-');
    let outDate = '';
    elDate.forEach((el, index) =>
      index < (elDate.length - 1) ? outDate += el + this.sep : outDate += el);
    this.element.nativeElement.innerText = 'Date of birth: ' + outDate;
  }

  changeLook(old: boolean): void {
    if (!old) {
      this.oldColor = this.element.nativeElement.style.color;
      this.oldFont = this.element.nativeElement.style.fontFamily;
      this.element.nativeElement.style.color = this.color;
      this.element.nativeElement.style.fontFamily = this.font;
    } else {
      this.element.nativeElement.style.color = this.oldColor;
      this.element.nativeElement.style.fontFamily = this.oldFont;
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeLook(false);
  }

  @HostListener('mouseleave') onMouseleave() {
    this.changeLook(true);
  }

}
