export interface User {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserState {
  user: User | undefined;
  lastLogin: Date | undefined;
}
