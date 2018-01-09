import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDialogActionComponent } from './image-dialog-action.component';

describe('ImageDialogActionComponent', () => {
  let component: ImageDialogActionComponent;
  let fixture: ComponentFixture<ImageDialogActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDialogActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDialogActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
