import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspeciesComponent } from './especies.component';

describe('EspeciesComponent', () => {
  let component: EspeciesComponent;
  let fixture: ComponentFixture<EspeciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspeciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspeciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
