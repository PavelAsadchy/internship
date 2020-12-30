import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILocation, IMarker } from 'src/app/shared/models/location.model';
import { MapService } from 'src/app/shared/services/map.service';
import { MouseEvent } from '@agm/core';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeService } from 'src/app/shared/services/unsubscribe.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [MapService],
})
export class MapComponent implements OnInit, OnDestroy {
  location: ILocation = {
    latitude: 53.9,
    longitude: 27.5667,
    countryName: 'Belarus',
    city: 'Minsk',
    currency: 'BYN',
    countryCallingCode: '+375',
    zoom: 6,
  };

  marker: IMarker = {
    lat: null,
    lng: null,
    isLocationChosen: false,
  };

  constructor(
    private readonly mapService: MapService,
    private readonly unsubscribeService: UnsubscribeService
  ) {}

  ngOnInit(): void {
    this.mapService
      .getLocation()
      .pipe(takeUntil(this.unsubscribeService.subscription))
      .subscribe((data: any) => {
        this.location.latitude = data.latitude;
        this.location.longitude = data.longitude;
        this.location.countryName = data.country_name;
        this.location.city = data.city;
        this.location.currency = data.currency;
        this.location.countryCallingCode = data.country_calling_code;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeService.destroy();
  }

  clickedLocation(event: MouseEvent): void {
    this.marker.lat = event.coords.lat;
    this.marker.lng = event.coords.lng;
    this.marker.isLocationChosen = true;
  }
}
