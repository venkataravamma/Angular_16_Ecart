import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[disbleProduct]',
})
export class DisbleProductDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}

  @Input() set disbleProduct(disable: Boolean) {
    if (disable) {
      this.render.addClass(
        this.element.nativeElement,
        'disable-out-of-stock-product'
      );
    }
  }
}
