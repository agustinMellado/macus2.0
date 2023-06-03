import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
//Con esta directiva vamos a controlar la creacion y destruccion instantanea de nuestro componente.
@Directive({
  selector: '[appRecarga]'
})
export class RecargaDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { 
    this.viewContainerRef.createEmbeddedView( templateRef);
  }

}
