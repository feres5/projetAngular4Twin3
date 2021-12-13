import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedFactureFormComponent } from './shared-facture-form.component';

describe('SharedFactureFormComponent', () => {
  let component: SharedFactureFormComponent;
  let fixture: ComponentFixture<SharedFactureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedFactureFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedFactureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
