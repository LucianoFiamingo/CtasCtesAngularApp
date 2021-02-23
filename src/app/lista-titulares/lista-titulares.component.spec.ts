import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTitularesComponent } from './lista-titulares.component';

describe('ListaTitularesComponent', () => {
  let component: ListaTitularesComponent;
  let fixture: ComponentFixture<ListaTitularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaTitularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaTitularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
