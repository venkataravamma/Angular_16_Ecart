import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private element: ElementRef, private render: Renderer2) {}
  @Input() set style(styles: Object) {
    let styleEntries = Object.entries(styles);
    for (let style of styleEntries) {
      let [cssStyle, value] = style;
      this.render.setStyle(this.element.nativeElement, cssStyle, value);
    }
  }
}
