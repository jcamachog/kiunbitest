import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KiunbiComponent } from './kiunbi.component';

describe('KiunbiComponent', () => {
  let component: KiunbiComponent;
  let fixture: ComponentFixture<KiunbiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KiunbiComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KiunbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
