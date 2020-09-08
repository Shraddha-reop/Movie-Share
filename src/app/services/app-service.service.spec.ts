import { TestBed, getTestBed } from '@angular/core/testing';

import { AppServiceService } from './app-service.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
describe('AppServiceService', () => {
  let service: AppServiceService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppServiceService],
      imports: [
        HttpClientTestingModule
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(AppServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should Add Links', () => {
    const spy = jest.fn();
    const requestBody = {};
    service.addLinks(requestBody).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.url}/posts`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should fetch Links', () => {
    const spy = jest.fn();
    const requestBody = {};
    service.fetchLinks().subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.url}/posts`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should delete Links', () => {
    const spy = jest.fn();
    service.deleteLink(3).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.url}/posts/${3}`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should update links', () => {
    const spy = jest.fn();
    const requestBody = {};
    service.updateLink(3, requestBody).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.url}/posts/${3}`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });
});
