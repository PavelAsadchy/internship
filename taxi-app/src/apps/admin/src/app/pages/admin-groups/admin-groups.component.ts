import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/libs/@shared/services/http-client.service';
import { environment } from 'src/apps/admin/src/environments/environment';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './admin-groups.component.html',
  styleUrls: ['./admin-groups.component.scss'],
})
export class AdminGroupsComponent implements OnInit {
  constructor(httpClientService: HttpClientService) {}

  ngOnInit(): void {}

  trigger(): void {}
}
