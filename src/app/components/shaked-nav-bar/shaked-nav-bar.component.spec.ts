import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakedNavBarComponent } from './shaked-nav-bar.component';

describe('ShakedNavBarComponent', () => {
  let component: ShakedNavBarComponent;
  let fixture: ComponentFixture<ShakedNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShakedNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakedNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
