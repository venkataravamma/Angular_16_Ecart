import {
  Directive,
  ElementRef,
  Renderer2,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appAppHover]',
})
export class AppHoverDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}
  @HostBinding('style.backgroundColor') backgroundColor: string = '#28282B';
  @HostBinding('style.color') textColor: string = 'white';
  @HostBinding('style.border') border: string = 'none';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'white';
    this.textColor = '#28282B';
    this.border = '#28282B 2px solid';
  }

  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = '#28282B';
    this.textColor = 'white';
    this.border = 'none';
  }
}
