import http from 'k6/http'
import { sleep, check } from 'k6'
import { expect } from 'https://jslib.k6.io/k6-testing/0.6.1/index.js'
import { BASE_URL } from '../config.js'

export const options = {
    vus: 10, // número de usuários virtuais
    duration: '10s', // o tempo de execução do teste, 10 segundos
    thresholds: {
        http_req_duration: ['p(90) < 500'],
        http_req_failed: ['rate < 0.01'],
    },
};

export default function () {
    let response = http.get(`${BASE_URL}/api/health`);
    expect.soft(response.status).toBe(200) // Soft garante que o teste continue
    sleep(1);
}
