import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SharedService } from './sharedService.service';


describe('Shared service:', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService],
      imports: [HttpClientTestingModule]
    });
  });
    describe(':', () => {

      function setup() {
        const sharedService = TestBed.inject(SharedService);
        const httpTestingController = TestBed.inject(HttpTestingController);
        return { sharedService, httpTestingController };
      }

      it('should call the google\'s map data', () => {
        const { sharedService, httpTestingController } = setup();
        const mockGoogleMapData = {id: 1, country : 'United states of america', zipCode : '56743'};
        sharedService.getGoogleMapData().subscribe(data => {
          expect(data).toEqual(mockGoogleMapData);
        });

        const req = httpTestingController.expectOne('../../../assets/googleData.json');

        expect(req.request.method).toBe('GET');

        req.flush(mockGoogleMapData);
      });

      afterEach(() => {
        const { httpTestingController } = setup();
        httpTestingController.verify();
      });
    });
});
