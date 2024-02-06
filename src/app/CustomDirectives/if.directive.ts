import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appIF]',
})
export class IFDirective {
  constructor(
    private view: TemplateRef<any>,
    private template: ViewContainerRef
  ) {}

  @Input() set appIF(condition: boolean) {
    if (condition) {
      this.template.createEmbeddedView(this.view);
    } else {
      this.template.clear();
    }
  }
}
