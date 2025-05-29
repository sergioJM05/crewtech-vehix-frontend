export class BadPracticesEntity {
  id: number;
  description: string;

  constructor(badPractices: { id?: number, description?: string } = {}) {
    this.id = badPractices.id || 0;
    this.description = badPractices.description || '';
  }
}
