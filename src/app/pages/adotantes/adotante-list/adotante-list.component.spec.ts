import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdotanteListComponent } from './adotante-list.component';

describe('AdotanteListComponent', () => {
  let component: AdotanteListComponent;
  let fixture: ComponentFixture<AdotanteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdotanteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdotanteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
