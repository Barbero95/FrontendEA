import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesXdistanciaComponent } from './actividades-xdistancia.component';

describe('ActividadesXdistanciaComponent', () => {
  let component: ActividadesXdistanciaComponent;
  let fixture: ComponentFixture<ActividadesXdistanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadesXdistanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadesXdistanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
