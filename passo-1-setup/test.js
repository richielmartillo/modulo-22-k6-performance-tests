import http from 'k6/http';
import { sleep } from 'k6';
import { BASE_URL } from '../config.js';

export const options = {
    iterations: 5,
};

export default function () {
    http.get(`${BASE_URL}/index.html`);
    sleep(1);
}