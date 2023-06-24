// Importamos las clases ComponentFixture y TestBed para realizar pruebas
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Importamos el componente RuletaComponent desde el archivo './ruleta.component'
import { RuletaComponent } from './ruleta.component';

 // Declaramos las variables component y fixture
describe('RuletaComponent', () => {
  let component: RuletaComponent;
  let fixture: ComponentFixture<RuletaComponent>;
 
// Configuramos el entorno de pruebas
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuletaComponent]
    });
    
// Definimos el bloque beforeEach que se ejecuta antes de cada prueba
    fixture = TestBed.createComponent(RuletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
// Define la prueba "should create" que verifica si el componente se ha creado correctamente
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
