import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { AccountService } from './account.service';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '../../environments/environment';
describe('AccountService', () => {
  let service: AccountService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountService,
        provideMockStore({
          initialState: {
            appModel: {
              data: [],
              isLoggedIn: false,
              requestBody: {},
              id: 1
            }
          }
        })],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(AccountService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login user', () => {
    const spy = jest.fn();
    const username = 'user';
    const password = 'password';
    service.login(username, password).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiUrl}/users/authenticate`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should register user', () => {
    const spy = jest.fn();
    const user = {};
    service.register(user).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiUrl}/users/register`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should register user', () => {
    const spy = jest.fn();
    const user = {};
    service.register(user).subscribe(spy);
    const mockReq = httpMock.expectOne(req => req.url.includes(`${environment.apiUrl}/users/register`));
    mockReq.flush({});
    expect(spy).toHaveBeenCalledWith({});
  });

  it('should logout user', () => {
    const spy = jest.fn();
    localStorage.removeItem('user');
    service.logout();
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
