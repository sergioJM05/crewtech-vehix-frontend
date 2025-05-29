export class Failure {
  id: number;
  title: string;
  description: string;
  solutions: string;
  isSolved: boolean;
  vehicleId: number;
  constructor(failure: {
    id?: number,
    title?: string,
    description?: string,
    solutions?: string,
    isSolved?: boolean,
    vehicleId?: number
  }){
    this.id = failure.id || 0;
    this.title = failure.title || '';
    this.description = failure.description || '';
    this.solutions = failure.solutions || '';
    this.isSolved = failure.isSolved || false;
    this.vehicleId = failure.vehicleId || 0;
  }
}
