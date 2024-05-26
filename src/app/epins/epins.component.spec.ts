import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpinsComponent } from './epins.component';

describe('EpinsComponent', () => {
  let component: EpinsComponent;
  let fixture: ComponentFixture<EpinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EpinsComponent]
    });
    fixture = TestBed.createComponent(EpinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
