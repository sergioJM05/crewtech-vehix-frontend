export class SystemStatusCheck {
  id: number;
  engine: number;
  transmission: number;
  brakes: number;
  electrical: number;
  steering: number;
  suspension: number;
  fuel: number;
  refrigeration: number;
  vehiclesID: number;

  constructor(status: {
    id?: number,
    engine?: number,
    transmission?: number,
    brakes?: number,
    electrical?: number,
    steering?: number,
    suspension?: number,
    fuel?: number,
    refrigeration?: number,
    vehiclesID?: number
  }) {
    this.id = status.id || 0;
    this.engine = status.engine || 0;
    this.transmission = status.transmission || 0;
    this.brakes = status.brakes || 0;
    this.electrical = status.electrical || 0;
    this.steering = status.steering || 0;
    this.suspension = status.suspension || 0;
    this.fuel = status.fuel || 0;
    this.refrigeration = status.refrigeration || 0;
    this.vehiclesID = status.vehiclesID || 0;
  }
}
