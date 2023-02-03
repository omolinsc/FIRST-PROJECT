import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarLibroComponent } from './insertar-libro.component';

describe('InsertarLibroComponent', () => {
  let component: InsertarLibroComponent;
  let fixture: ComponentFixture<InsertarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
