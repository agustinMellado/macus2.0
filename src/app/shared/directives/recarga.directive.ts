import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
//========================================================
//Con esta directiva vamos a controlar la creacion y destruccion instantanea de nuestro componente.
//========================================================
@Directive({
  selector: '[appRecarga]',
})
export class RecargaDirective implements OnChanges {
  //cuando se actualice esto desde otro componente se va a actualizar la vista
  @Input() appRecarga !: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
    this.viewContainerRef.createEmbeddedView(templateRef);
  }
  //metodo que escucha los cambios
  ngOnChanges(changes: SimpleChanges): void {
    //Observo si lo que cambio fue esta variable
    if (
      changes['appRecarga']
    ) {
      //si es asi, se aplican los cambios
      //limpiamos
      this.viewContainerRef.clear();
      //creamos de nuevo
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
