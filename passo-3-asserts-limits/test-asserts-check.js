import http from 'k6/http'
import { sleep, check } from 'k6'
import { BASE_URL } from '../config.js';

export const options = {
    vus: 10,  // número de usuários virtuais
    duration: '10s' // o tempo de execução do teste, 10 segundos
}

export default function () {
    let response = http.get(`${BASE_URL}/api/health`);

    check(response, {
        'Deve validar o status code 200': (r) => r.status === 200,
    });

    sleep(1)
}