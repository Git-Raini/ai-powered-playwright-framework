import { APIRequestContext, expect } from '@playwright/test';

export class APIClient {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {

        this.request = request;

    }

    async getUsers() {

        const response = await this.request.get(
            'https://jsonplaceholder.typicode.com/users'
        );

        expect(response.status()).toBe(200);

        return response;

    }

    async createUser(userPayload: object) {

    const response = await this.request.post(

        'https://jsonplaceholder.typicode.com/users',

        {
            data: userPayload
        }

    );

    expect(response.status()).toBe(201);

    return response;

}

}