import { Injectable } from '@nestjs/common';

interface AuthUser {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {
  signIn(user: AuthUser) {}

  signUp(user: AuthUser) {}

  signOut() {}
}
