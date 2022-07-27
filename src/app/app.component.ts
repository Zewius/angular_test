import {Component, OnInit} from '@angular/core';
import {MapOptions, tileLayer, Map} from "leaflet";

interface City {
  name: string;
  description: string;
  coordinate: [number, number];
  populationSize?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Города-миллионники';

  map!: Map;
  mapOptions!: MapOptions;

  cities: City[] = [
    {
      name: "Москва", coordinate: [55.7522, 37.6156],
      description: "Столица России. Город Федерального значения, административный центр Центрального федерального округа.",
      populationSize: 12635466
    },
    {
      name: "Санкт-Петербург", coordinate: [59.9386, 30.3141],
      description: "Бывшая столица России. Город федерального значения, административный центр Северо-Западного федерального округа.",
      populationSize: 5377503
    },
    {
      name: "Новосибирск", coordinate: [55.0415, 82.9346],
      description: "Город областного значения, административный центр Сибирского федерального округа.",
      populationSize: 1621330

    },
    {
      name: "Екатеринбург", coordinate: [56.8519, 60.6122],
      description: "Город областного значения, административный центр Уральского федерального округа.",
      populationSize: 1493600
    },
    {
      name: "Казань", coordinate: [55.7887, 49.1221],
      description: "Столица Республики Татарстан.",
      populationSize: 1259173
    }
  ];
  selectedCity: City = this.cities[0];

  ngOnInit() {
    this.initMapOptions();
  }

  onReadyMap(map: Map): void {
    this.map = map;
  }

  showSelectedCity(): void {
    this.map.setView(this.selectedCity.coordinate);
    console.log(this.map.getZoom())
  }

  private initMapOptions(): void {
    this.mapOptions = {
      center: this.cities[0].coordinate,
      zoom: 10,
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          {minZoom: 9, attribution: 'Данные предоставляет ©OpenStreetMap'})
      ],
    };
  }
}
