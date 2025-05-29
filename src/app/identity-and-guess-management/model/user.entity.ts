export class User {
  id: number;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  dni: string;
  gender: string;

  constructor(user: { id?: number, name?: string, lastName?: string, email?: string, password?: string, phone?: string, dni?: string, gender?: string }) {
    this.id = user.id || 0;
    this.name = user.name || '';
    this.lastName = user.lastName || '';
    this.email = user.email || '';
    this.password = user.password || '';
    this.phone = user.phone || '';
    this.dni = user.dni || '';
    this.gender = user.gender || '';
  }
}
