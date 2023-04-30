import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToopbarComponent } from './toopbar.component';

describe('ToopbarComponent', () => {
  let component: ToopbarComponent;
  let fixture: ComponentFixture<ToopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToopbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
