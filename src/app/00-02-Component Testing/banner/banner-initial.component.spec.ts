import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import {BannerInitialComponent} from './banner-initial.component';


describe('BannerInitialComponent (initial CLI generated)', () => {
  let component: BannerInitialComponent;
  let fixture: ComponentFixture<BannerInitialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [BannerInitialComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});

describe('BannerInitialComponent (minimal)', () => {
  it('should create', () => {
    TestBed.configureTestingModule({declarations: [BannerInitialComponent]});
    const fixture = TestBed.createComponent(BannerInitialComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});

describe('BannerInitialComponent (with beforeEach)', () => {
  let component: BannerInitialComponent;
  let fixture: ComponentFixture<BannerInitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [BannerInitialComponent]});
    fixture = TestBed.createComponent(BannerInitialComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contain "banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('banner works!');
  });

  it('should have <p> with "banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('p')!;
    expect(p.textContent).toEqual('banner works!');
  });


  it('should find the <p> with fixture.debugElement.nativeElement)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const p = bannerEl.querySelector('p')!;
    expect(p.textContent).toEqual('banner works!');
  });

  it('should find the <p> with fixture.debugElement.query(By.css)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('p'));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual('banner works!');
  });
});
