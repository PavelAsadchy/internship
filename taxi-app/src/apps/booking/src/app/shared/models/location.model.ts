export interface ILocation {
    latitude: number;
    longitude: number;
    countryName: string;
    city: string;
    currency: string;
    countryCallingCode: string;
    zoom: number;
}

export interface IMarker {
    lat: number;
    lng: number;
    isLocationChosen: boolean;
}
