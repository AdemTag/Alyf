import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileDeleteComponent } from './file-delete.component';

describe('FileDeleteComponent', () => {
  let component: FileDeleteComponent;
  let fixture: ComponentFixture<FileDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
