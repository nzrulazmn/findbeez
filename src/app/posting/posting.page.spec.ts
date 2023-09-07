import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostingPage } from './posting.page';

describe('PostingPage', () => {
  let component: PostingPage;
  let fixture: ComponentFixture<PostingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PostingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
