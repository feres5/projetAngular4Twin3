import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFournisseurComponent } from './modifier-fournisseur.component';

describe('ModifierFournisseurComponent', () => {
  let component: ModifierFournisseurComponent;
  let fixture: ComponentFixture<ModifierFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
