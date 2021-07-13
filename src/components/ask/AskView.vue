<template>
	<div>
		<ul>
			<li v-for="(ask, index) in askData" :key="index">
				<a :href="ask.url" target="_blank">
					<h3>{{ ask.title }}</h3>
					<span>{{ ask.user }}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { fetchAskList } from '@/api/index'

export default Vue.extend({
	name : 'AskView',
	data() {
		return {
			askData : []
		}
	},
	methods : {
		async getAskData(){
			await fetchAskList()
				.then(response => this.askData = response.data)
				.catch(err => console.log(err))
		}
	},
	created() {
		this.getAskData()
	},
})
</script>

<style lang="scss" scoped>

</style>
