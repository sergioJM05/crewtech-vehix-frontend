export class Vehicle {
  id: number;
  name: string;
  brand: string;
  model: string;
  milage: string;
  year: string;
  imageUrl: string;
  modelDescription: string;
  equipmentDescription: string;

  constructor(Vehicle: {
    id?: number,
    name?: string,
    brand?: string,
    model?: string,
    milage?:string,
    year?: string,
    imageUrl?: string,
    modelDescription?: string,
    equipmentDescription?: string }) {
    this.id = Vehicle.id || 0;
    this.name = Vehicle.name || '';
    this.brand = Vehicle.brand || '';
    this.model = Vehicle.model || '';
    this.milage = Vehicle.milage || '';
    this.year = Vehicle.year || '';
    this.imageUrl = Vehicle.imageUrl || '';
    this.modelDescription = Vehicle.modelDescription || '';
    this.equipmentDescription = Vehicle.equipmentDescription || '';
  }
}
