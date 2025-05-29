export class SimpleIssuesEntity {
  id: number;
  description: string;
  urgency: string;

  constructor(simpleIssues: { id?: number, description?: string, urgency?: string } = {}) {
    this.id = simpleIssues.id || 0;
    this.description = simpleIssues.description || '';
    this.urgency = simpleIssues.urgency || '';
  }
}
