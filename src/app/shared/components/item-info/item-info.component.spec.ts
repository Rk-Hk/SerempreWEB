import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { ItemInfoComponent } from "./item-info.component";

fdescribe("ItemInfoComponent", () => {
  let component: ItemInfoComponent;
  let fixture: ComponentFixture<ItemInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemInfoComponent);
    component = fixture.componentInstance;

    //Iniciamos el @input titleItem , ya que este componente no existe sin este valor. 
    component.titleItem = "Probando title"
    fixture.detectChanges();
  });

  it("TEST: should create component successfull", () => {
    expect(component).toBeTruthy();
  });

  
  it("TEST: should validate the component is type BUTTON", () => {
    
    // El tipo del componente depende del input showBorder
    component.showBorder = true;
    fixture.detectChanges();

    let compontButton = fixture.debugElement.query(By.css('button.itemInfo'));
    expect(compontButton).toBeTruthy()
  });

  it("TEST: should validate the component is type DIV", () => {
    
    // El tipo del componente depende del input showBorder
    component.showBorder = false;
    fixture.detectChanges();

    let compontButton = fixture.debugElement.query(By.css('div.itemInfo'));
    expect(compontButton).toBeTruthy()
  });

  it("TEST: should show the descpription if exist @Input descripItem", () => {
    // Showborder es indiferente para esta prueba
    component.showBorder = false;
    // simulamos una descripcion pasada por input
    component.descripItem = "Descripcion de prueba"
    fixture.detectChanges();

    let pdescription = fixture.debugElement.query(By.css('p.item__description'));
    expect(pdescription).toBeTruthy()
  });

  it("TEST: should focused and bordered blue when click in the item-info type button", () => {
    // showBorder debe ser true (solo componentes BUTTON pueden ser activos o inactivos)
    component.showBorder = true;
    component.descripItem = "Descripcion de prueba"

    // simulamos que un item es clickeado
    component.active = true;

    fixture.detectChanges();
    let compontButton = fixture.debugElement.query(By.css('button.itemInfo'));
    console.log(compontButton.nativeElement);
    
    expect(compontButton.nativeElement.getAttribute('class')).toContain('active')

  });

  


});
