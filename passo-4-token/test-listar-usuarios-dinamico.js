import http from 'k6/http'
import { sleep } from 'k6'
import { expect } from 'https://jslib.k6.io/k6-testing/0.6.1/index.js';
import { BASE_URL } from '../config.js'
import { getToken } from '../geraToken.js';

export const options = {
    vus: 1,  // número de usuários virtuais
    duration: '5s' // tempo de execução do teste
}

export default function () {
    const token = getToken();

    const headers = {
        Authorization: token,
        Accept: 'application/json'
    }

    let response = http.get(`${BASE_URL}/api/users`, { headers });

    expect.soft(response.status).toBe(200) // Soft garante que o teste continue

    sleep(1)
}