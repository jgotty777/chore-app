import { Injectable } from '@nestjs/common';
import { SignInDto } from './dtos/signIn.dto';

@Injectable()
export class AuthService {
  async signIn(user: SignInDto): Promise<boolean> {
    console.log(user);
    return user.loginPin === 7509;
  }
}
