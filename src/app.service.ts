import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        return 'Hello! This is notes service!';
    }

    readyz(): string {
        return 'Service is ready';
    }

    healthyz(): string {
        return 'Service alive';
    }
}
