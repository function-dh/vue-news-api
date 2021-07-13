<template>
	<div>
		<p v-if="isLoading">로딩 중....</p>
		<ul v-else>
			<li v-for="(news, index) in newsData" :key="index">
				<a :href="news.url" target="_blank">
					<h3>{{ news.title }}</h3>
					<span>{{ news.user }}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { fetchNewsList } from '@/api/index';

export default Vue.extend({
	name : 'NewsView',
	data() {
		return {
			newsData : [],
			isLoading : true, // 로딩 체크를 전역으로 변경 + 데이터 요청 시 false로 변경해야 함
		}
	},
	methods: {
		async getNewsData(){
			await fetchNewsList()
				.then(response => {
					this.isLoading = false
					this.newsData = response.data
				})
				.catch(err => console.log(err)
			)
		}
	},
	created() {
		this.getNewsData()
	},
})
</script>

<style lang="scss" scoped>

</style>