import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {latLng, MapOptions, tileLayer, Map} from "leaflet";

interface City {
  name: string;
  coordinate: [number, number];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'angular start';

  map!: Map;
  mapOptions!: MapOptions;

  coordinateBySelectedCity: [number, number] = [55.7522, 37.6156];

  cities: City[] = [
    {name: "Москва", coordinate: [55.7522, 37.6156]},
    {name: "Санкт-Петербург", coordinate: [59.9386, 30.3141]},
    {name: "Новосибирск", coordinate: [55.0415, 82.9346]},
    {name: "Екатеринбург", coordinate: [56.8519, 60.6122]},
    {name: "Казань", coordinate: [55.7887, 49.1221]}
  ];

  constructor() {
  }

  ngOnInit() {
    this.initMapOptions();
  }

  onReadyMap(map: Map): void {
    this.map = map;
  }

  showSelectedCity(): void {
    this.map?.setView(this.coordinateBySelectedCity);
  }

  private initMapOptions(): void {
    this.mapOptions = {
      center: this.cities[0].coordinate,
      zoom: 12,
      layers: [
        tileLayer(
          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {maxZoom: 18, attribution: 'Map data © OpenStreetMap contributors'
          })
      ],
    };
  }
}
