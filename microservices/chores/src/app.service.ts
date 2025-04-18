import { Injectable } from '@nestjs/common';
import { add } from '@repo/shared-util/add';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
