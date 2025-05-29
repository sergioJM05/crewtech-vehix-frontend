import { Component, AfterViewInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-mechanic-map',
  templateUrl: './mechanic-map.component.html',
  styleUrls: ['./mechanic-map.component.css']
})
export class MechanicMapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  @Output() updateMechanics = new EventEmitter<any[]>();

  ngAfterViewInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      const userLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      const google = (window as any).google;

      const map = new google.maps.Map(this.mapContainer.nativeElement, {
        center: userLatLng,
        zoom: 15,
        mapId: 'DEMO_MAP_ID',
      });
      console.log('Map initialized:', map);

      new google.maps.Marker({
        position: userLatLng,
        map,
        title: 'Tu ubicación',
        icon: {
          url: 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png',
          scaledSize: new google.maps.Size(40, 40),
        }
      });

      const service = new google.maps.places.PlacesService(map);

      const request = {
        location: userLatLng,
        radius: 5000,
        keyword: 'taller mecánico',
      };

      service.nearbySearch(request, (results: any[], status: any) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results.length) {
          const mappedMechanics: any[] = [];

          results.forEach((place, index) => {
            const distance = google.maps.geometry.spherical.computeDistanceBetween(
              new google.maps.LatLng(userLatLng.lat, userLatLng.lng),
              place.geometry.location
            );

            // Initial mechanic data
            const mechanic = {
              name: place.name,
              vicinity: place.vicinity,
              distance: Math.round(distance), // Distance in meters
              phone: 'No disponible', // Default value
            };

            // Fetch additional details (e.g., phone number)
            service.getDetails({ placeId: place.place_id }, (details: any, detailsStatus: any) => {
              if (detailsStatus === google.maps.places.PlacesServiceStatus.OK) {
                mechanic.phone = details.formatted_phone_number || 'No disponible';
              }

              mappedMechanics.push(mechanic);

              // Emit mechanics only after all details are fetched
              if (mappedMechanics.length === results.length) {
                this.updateMechanics.emit(mappedMechanics);
              }
            });
          });
        } else {
          console.warn('No se encontraron talleres mecánicos.');
        }
      });
    });
  }
}
