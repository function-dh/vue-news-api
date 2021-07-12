<template>
	<div>
		<p v-if="isLoading">로딩 중....</p>
		<ul v-else>
			<li v-for="(user, index) in users" :key="index">
				<a :href="user.url" target="_blank">
					<h3>{{ user.title }}</h3>
					<span>{{ user.user }}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
	name : 'NewsView',
	data() {
		return {
			users : [],
			isLoading : true,
		}
	},
	methods: {
		getUserData(){
			axios.get('https://api.hnpwa.com/v0/news/1.json')
				.then(response => {
					this.isLoading = false
					this.users = response.data
				})
				.catch(err => console.log(err)
			)
		}
	},
	created() {
		this.getUserData()
	},
})
</script>

<style lang="scss" scoped>

</style>