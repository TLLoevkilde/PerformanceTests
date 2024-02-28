import { sleep } from 'k6'
import http from 'k6/http'

export let options = {
    stages: [
        { duration: '2s', target: 200 },
        { duration: '5s', target: 200 },
        { duration: '2s', target: 500 },
        { duration: '5s', target: 500 },
        { duration: '2s', target: 1000 },
        { duration: '5s', target: 1000 },
        { duration: '5s', target: 0 }
    ]
}

export default () => {
    http.get('http://localhost:5222/api/v1/catalog/items')
    sleep(1)
}

