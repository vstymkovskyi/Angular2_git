import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[ifAuthentication]'})

export class IfAuthenticationDirective {
  constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef) { }

  @Input() set ifAuthentication(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition) {
      this.viewContainer.clear();
    }
  }
}