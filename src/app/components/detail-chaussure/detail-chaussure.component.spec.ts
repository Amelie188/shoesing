import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChaussureComponent } from './detail-chaussure.component';

describe('DetailChaussureComponent', () => {
  let component: DetailChaussureComponent;
  let fixture: ComponentFixture<DetailChaussureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailChaussureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChaussureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
