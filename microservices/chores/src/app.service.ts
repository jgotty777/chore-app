import { Injectable } from '@nestjs/common';
import { add } from '@repo/shared-core/functions';
@Injectable()
export class AppService {
  getHello(): string {
    const num1: number = 1;
    const num2: number = 2;
    const test: number = add(num1, num2);

    console.log(test);
    return 'Hello World!';
  }
}
