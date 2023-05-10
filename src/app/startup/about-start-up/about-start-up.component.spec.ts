import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStartUpComponent } from './about-start-up.component';

describe('AboutStartUpComponent', () => {
  let component: AboutStartUpComponent;
  let fixture: ComponentFixture<AboutStartUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutStartUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutStartUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
