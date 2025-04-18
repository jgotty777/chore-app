import { Injectable } from '@nestjs/common';
import { add } from '@repo/shared-utils/add';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
