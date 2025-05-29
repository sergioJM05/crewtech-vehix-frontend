export class TechnicalErrorsEntity {
  id: number;
  code: string;
  description: string;
  suggestion: string;
  urgency: string;

  constructor(technicalErrors: {
    id?: number,
    code?: string,
    description?: string,
    suggestion?: string,
    urgency?: string
  } = {}) {
    this.id = technicalErrors.id || 0;
    this.code = technicalErrors.code || '';
    this.description = technicalErrors.description || '';
    this.suggestion = technicalErrors.suggestion || '';
    this.urgency = technicalErrors.urgency || '';
  }
}
