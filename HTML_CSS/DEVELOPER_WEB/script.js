import http from 'k6/http';

export let options = {
    VUs: 10,
    duration: '30s',
  };

export default function () {
  http.get('http://localhost:7777');
}