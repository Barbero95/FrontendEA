import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDenunciasComponent } from './ver-denuncias.component';

describe('VerDenunciasComponent', () => {
  let component: VerDenunciasComponent;
  let fixture: ComponentFixture<VerDenunciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerDenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerDenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
