import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello World!';
    }

    readyz(): string {
        return 'Service is ready';
    }

    healthyz(): string {
        return 'Service alive';
    }
}
