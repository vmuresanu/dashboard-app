import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPathComponent } from './dynamic-path.component';

describe('DynamicPathComponent', () => {
  let component: DynamicPathComponent;
  let fixture: ComponentFixture<DynamicPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
