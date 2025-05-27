import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AyudantiasPage } from './ayudantias.page';

describe('AyudantiasPage', () => {
  let component: AyudantiasPage;
  let fixture: ComponentFixture<AyudantiasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudantiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
