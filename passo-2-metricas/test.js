import http from 'k6/http'
import { sleep } from 'k6'
import { BASE_URL } from '../config.js'

export const options = {
    vus: 10,  // número de usuários virtuais
    duration: '10s' // o tempo de execução do teste, 10 segundos
}

export default function () {
    http.get(`${BASE_URL}/api/health`)
    sleep(0.5)
}