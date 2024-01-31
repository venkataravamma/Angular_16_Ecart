import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // private element: ElementRef;
  // @Input('setBackground') backColor: string = '#36454f';
  // @Input() textColor: string = 'White';
  @Input() title: string = 'This is an example title';
  @Input('setBackground') changeTextAndBackColor: {
    backColor: string;
    textColor: string;
  };
  constructor(private element: ElementRef, private render: Renderer2) {
    // this.element = element;
  }

  ngOnInit() {
    //elementRef get the reference of DOM directly not good practice
    // this.element.nativeElement.style.backgroundColor = '#36454f';
    // this.element.nativeElement.style.color = 'white';
    //Render2 manipulate the Dom without access the DOM elements directly.
    this.render.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.changeTextAndBackColor.backColor
    );
    this.render.setStyle(
      this.element.nativeElement,
      'color',
      this.changeTextAndBackColor.textColor
    );
    this.render.setAttribute(
      this.element.nativeElement,
      'title',
      'This is an example title'
    );
  }
}
