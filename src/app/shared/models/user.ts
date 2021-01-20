export class User {
  id: number;
  name: string;
  email: string;
  phone: string;

  constructor(value: any) {
    this.id = value.id || '';
    this.name = value.name || '';
    this.email = value.email || '';
    this.phone = value.phone || '';
  }
}
