export interface RegisterUserDTO {
  fullName: string;
  email: string;
  password: string;
  pin: string;
}

export interface LoginUserDTO {
  email: string;
  password: string;
}