import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPdocComponent } from './detail-pdoc.component';

describe('DetailPdocComponent', () => {
  let component: DetailPdocComponent;
  let fixture: ComponentFixture<DetailPdocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPdocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailPdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
