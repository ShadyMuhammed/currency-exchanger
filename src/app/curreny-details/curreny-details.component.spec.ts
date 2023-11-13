import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenyDetailsComponent } from './curreny-details.component';

describe('CurrenyDetailsComponent', () => {
  let component: CurrenyDetailsComponent;
  let fixture: ComponentFixture<CurrenyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrenyDetailsComponent]
    });
    fixture = TestBed.createComponent(CurrenyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
