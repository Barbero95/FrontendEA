import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoActividadComponent } from './info-actividad.component';

describe('InfoActividadComponent', () => {
  let component: InfoActividadComponent;
  let fixture: ComponentFixture<InfoActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
