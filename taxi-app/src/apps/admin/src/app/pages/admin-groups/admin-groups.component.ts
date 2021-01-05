import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/libs/@shared/services/http-client.service';
import { environment } from 'src/apps/admin/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { DEFAULT_GROUPS } from '../../shared/consts/groups.const';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss'],
})
export class AdminGroupsComponent implements OnInit {
  databaseUrl: string;
  groups = DEFAULT_GROUPS;

  constructor(
    httpClientService: HttpClientService,
    private httpClient: HttpClient
  ) {
    this.databaseUrl = environment.databaseApiUrl;
  }

  ngOnInit(): void {}

  trigger(): void {
    this.httpClient
      .post(`${this.databaseUrl}.json`, this.groups)
      .subscribe((resp) => console.log(resp));
  }
}
