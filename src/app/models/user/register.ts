export class RegisterRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  MANAGER = 'MANAGER',
  ADMIN = 'ADMIN',
}
