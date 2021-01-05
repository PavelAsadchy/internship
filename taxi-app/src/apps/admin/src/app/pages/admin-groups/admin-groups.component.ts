import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/libs/@shared/services/http-client.service';
import { environment } from 'src/apps/admin/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {
  DEFAULT_ADMIN_GROUPS,
  GROUPS_DISPLAYED_COLUMNS,
} from '../../shared/consts/admin-groups.const';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss'],
})
export class AdminGroupsComponent implements OnInit {
  displayedColumns: string[] = GROUPS_DISPLAYED_COLUMNS;
  databaseUrl: string;
  groups = DEFAULT_ADMIN_GROUPS;

  constructor(
    httpClientService: HttpClientService,
    private httpClient: HttpClient
  ) {
    this.databaseUrl = environment.databaseApiUrl;
  }

  ngOnInit(): void {}

  save(): void {
    this.httpClient
      .put(`${this.databaseUrl}.json`, this.groups)
      .subscribe((resp) => console.log(resp));
  }

  read(): void {
    this.httpClient.get(`${this.databaseUrl}`);
  }
}
