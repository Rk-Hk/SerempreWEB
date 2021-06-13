import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { ItemInfoComponent } from "../item-info/item-info.component";

import { FooterComponent } from "./footer.component";

fdescribe("FooterComponent", () => {
  let component: FooterComponent;
  let itemComponent: ItemInfoComponent
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent, ItemInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("TEST: should create component successfull", () => {
    expect(component).toBeTruthy();
  });

  it("TEST: should have a Button with text Buy now", () => {
    let buttonRef = fixture.debugElement.query(By.css('.button-buy')).nativeElement;
    expect(buttonRef.innerHTML).toBe('Buy now')
  });

  it("TEST: should show the producto price", () => {
    let buttonRef = fixture.debugElement.query(By.css('.resumen-price')).nativeElement;
    expect(buttonRef.innerHTML).toBeTruthy();
  });

  it("TEST: should validate that show seccion info of footer when the screen is greater than 768px", () => {
    let screenDimension = 900;
    (<any> window).screen = {width : screenDimension}
    let seccionInfoRef = fixture.debugElement.query(By.css('.footer__display-info')).nativeElement;
    
    expect(seccionInfoRef).toBeTruthy()
  });
});
