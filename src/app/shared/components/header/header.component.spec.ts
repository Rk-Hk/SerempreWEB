import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderComponent } from "./header.component";

fdescribe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("TEST: should creat component successfull.", () => {
    expect(component).toBeTruthy();
  });

  it("TEST: The headerComponent should have a Image whit logo", () => {
    let reference = fixture.debugElement.nativeElement;
    expect(reference.querySelector('div.header>img').src).toContain('assets/images/logosempre.png')
  });
});
