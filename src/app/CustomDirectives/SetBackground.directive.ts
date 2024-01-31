import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[setBackground]',
})
export class SetBackground implements OnInit {
  // private element: ElementRef;
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
      '#36454f'
    );
    this.render.setStyle(this.element.nativeElement, 'color', 'yellow');
    this.render.setAttribute(
      this.element.nativeElement,
      'title',
      'This is an example title'
    );
  }
}
