import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleInscritasPage } from './detalle-inscritas.page';

describe('DetalleInscritasPage', () => {
  let component: DetalleInscritasPage;
  let fixture: ComponentFixture<DetalleInscritasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleInscritasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
