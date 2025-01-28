import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { ToolbarComponent } from '../../Common-Custom_components/toolbar/toolbar.component'; 

@Component({
  selector: 'app-leaflet',
  standalone: true,
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.css'],
  imports: [ToolbarComponent]
})
export class LeafletComponent implements AfterViewInit {
  private map!: L.Map;

  private initMap(): void {
    // Initialize the map
    this.map = L.map('map', {
      center: [51.505, -0.09], // Default center: London
      zoom: 13
    });

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    // Add a marker
    const marker = L.marker([51.5, -0.09]).addTo(this.map);
    marker.bindPopup('<b>Hello!</b><br>This is a marker.').openPopup();

    // Add a circle
    const circle = L.circle([51.508, -0.11], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 300
    }).addTo(this.map);
    circle.bindPopup('This is a circle.');

    // Add a polygon
    const polygon = L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(this.map);
    polygon.bindPopup('This is a polygon.');

    // Add a click event
    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const popup = L.popup()
        .setLatLng(e.latlng)
        .setContent(`You clicked the map at ${e.latlng.lat}, ${e.latlng.lng}`)
        .openOn(this.map);
    });
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
