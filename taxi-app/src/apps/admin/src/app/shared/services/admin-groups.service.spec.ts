import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IAdminGroup } from '../models/admin-group.model';
import { DEFAULT_ADMIN_GROUPS_QUERY_PARAMS } from '../stores/admin-store/admin.state';

import { AdminGroupsService } from './admin-groups.service';

describe('AdminGroupsService', () => {
  let service: AdminGroupsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DatePipe],
    });
    service = TestBed.inject(AdminGroupsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getData', () => {
    let expectedRequest: IAdminGroup[];

    beforeEach(() => {
      expectedRequest = [
        {
          id: '0',
          id_number: 111,
          name: 'new_name',
          privileges: [],
        },
      ] as IAdminGroup[];
    });

    it('should return expected data', () => {
      service
        .loadAdminGroups(DEFAULT_ADMIN_GROUPS_QUERY_PARAMS)
        .subscribe((data) =>
          expect(data.adminGroups).toEqual(
            expectedRequest,
            'should return expected data'
          )
        );

      // Service should have made one request to GET data from expected URL
      const req = httpTestingController.expectOne(
        service.databaseUrl + '.json'
      );
      expect(req.request.method).toEqual('GET');

      // Respond with the mock data
      req.flush(expectedRequest);
    });

    it('should return expected data by id', () => {
      service
        .loadAdminGroupById(expectedRequest[0].id)
        .subscribe((data) =>
          expect(data).toEqual(
            expectedRequest[0],
            'should return expected data by id'
          )
        );

      // Service should have made one request to GET data from expected URL
      const req = httpTestingController.expectOne(
        service.databaseUrl + '/' + expectedRequest[0].id + '.json'
      );
      expect(req.request.method).toEqual('GET');

      // Respond with the mock data
      req.flush(expectedRequest[0]);
    });

    it('should be OK returning no data', () => {
      service
        .loadAdminGroups(DEFAULT_ADMIN_GROUPS_QUERY_PARAMS)
        .subscribe((value) => {
          expect(value.adminGroups.length).toEqual(
            0,
            'should have empty array'
          );
        });

      const req = httpTestingController.expectOne(
        service.databaseUrl + '.json'
      );

      // Respond with no heroes
      req.flush([]);
    });
  });

  describe('#update', () => {
    it('should update data and return it', () => {
      const update: IAdminGroup = {
        id: '0',
        id_number: 111,
        name: 'new_name',
        privileges: [],
      };

      service
        .updateAdminGroup(update)
        .subscribe((data) =>
          expect(data).toEqual(update, 'should return updated data')
        );

      // Service should have made one request to PATCH data
      const req = httpTestingController.expectOne(
        service.databaseUrl + '/' + update.id + '.json'
      );
      expect(req.request.method).toEqual('PATCH');
      expect(req.request.body).toEqual(update);

      // Expect server to return data after PATCH
      const expectedResponse = new HttpResponse({
        status: 200,
        statusText: 'OK',
        body: update,
      });
      req.event(expectedResponse);
    });
  });
});
