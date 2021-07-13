import axios from 'axios';

// 1. HTTP 요청&응답 관련 기본 설정
const config: { baseUrl: string } = {
	baseUrl : 'https://api.hnpwa.com/v0/'
}

// 2. API 함수 정리
function fetchNewsList(){
	return axios.get(`${config.baseUrl}news/1.json`)
}
function fetchAskList(){
	return axios.get(`${config.baseUrl}ask/1.json`)
}
function fetchJobsList(){
	return axios.get(`${config.baseUrl}jobs/1.json`)
}

export {
	fetchNewsList,
	fetchAskList,
	fetchJobsList
}