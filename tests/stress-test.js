import http from 'k6/http'
import { check, sleep } from 'k6'
import { BASE_URL } from '../config.js'


export const options = {
    // Configurações do teste de stress
    stages: [
        { duration: '1m', target: 200 }, // ramp-up até 200 VUs em 1 minuto
        { duration: '5m', target: 200 }, // mantém as 200 VUs durante 5 minutos
        { duration: '1m', target: 0 }, // ramp-down de 200 VUs até 0 em 1 minuto.
    ],
};

export default function () {

    const payload = JSON.stringify(
        {
            "email": "usuario@teste.com",
            "password": "user123"
        }
    )

    const params = {
        headers: {
            'Content-type': 'Application/json',
            'accept': 'application/json'
        }
    }

    let response = http.post(`${BASE_URL}/api/login`, payload, params)
    sleep(1)

    check(response, {
        'Status code deve ser 200': (r) => r.status === 200
    })
}