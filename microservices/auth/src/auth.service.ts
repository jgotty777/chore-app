import { Injectable } from '@nestjs/common';
import { SignInDto } from 'dtos/signIn.dto';

@Injectable()
export class AuthService {
  async signIn(user: SignInDto): Promise<boolean> {
    return true;
  }
}
