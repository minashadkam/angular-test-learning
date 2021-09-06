
import { ValueService } from './value.service';
import {fakeAsync, TestBed, tick, waitForAsync, inject} from '@angular/core/testing';

// Straight Jasmine testing without Angular's testing support
describe('ValueService', () => {
  let service: ValueService;
  beforeEach(() => { service = new ValueService(); });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from observable',
    (done: DoneFn) => {
      service.getObservableValue().subscribe(value => {
        expect(value).toBe('observable value');
        done();
      });
    });

  it('#getPromiseValue should return value from a promise',
    (done: DoneFn) => {
      service.getPromiseValue().then(value => {
        expect(value).toBe('promise value');
        done();
      });
    });
});





export class NotProvided extends ValueService { /* example below */ }


describe('ValueService whit testBed', () => {

  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService] });
    service = TestBed.inject(ValueService);
  });

  it('should use ValueService', () => {
    service = TestBed.inject(ValueService);
    expect(service.getValue()).toBe('real value');
  });

  it('can inject a default value when service is not provided', () => {
    expect(TestBed.inject(NotProvided, null)).toBeNull();
  });

  it('test should wait for ValueService.getPromiseValue', waitForAsync(() => {
    service.getPromiseValue().then(
      value => expect(value).toBe('promise value')
    );
  }));

  it('test should wait for ValueService.getObservableValue', waitForAsync(() => {
    service.getObservableValue().subscribe(
      value => expect(value).toBe('observable value')
    );
  }));

  // Must use done. See https://github.com/angular/angular/issues/10127
  it('test should wait for ValueService.getObservableDelayValue', (done: DoneFn) => {
    service.getObservableDelayValue().subscribe(value => {
      expect(value).toBe('observable delay value');
      done();
    });
  });

  it('should allow the use of fakeAsync', fakeAsync(() => {
    let value: any;
    service.getPromiseValue().then((val: any) => value = val);
    tick(); // Trigger JS engine cycle until all promises resolve.
    expect(value).toBe('promise value');
  }));
});



describe('use inject within `it`', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService] });
  });

  it('should use modified providers',
    inject([ValueService], (service: ValueService) => {
      service.setValue('value modified in beforeEach');
      expect(service.getValue())
        .toBe('value modified in beforeEach');
    })
  );
});


describe('using waitForAsync(inject) within beforeEach', () => {
  let serviceValue: string;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService] });
  });

  beforeEach(waitForAsync(inject([ValueService], (service: ValueService) => {
    service.getPromiseValue().then(value => serviceValue = value);
  })));

  it('should use asynchronously modified value ... in synchronous test', () => {
    expect(serviceValue).toBe('promise value');
  });
});
