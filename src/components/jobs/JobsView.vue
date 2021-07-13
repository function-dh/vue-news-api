<template>
	<div>
		<ul>
			<li v-for="(jobs, index) in jobsData" :key="index">
				<a :href="jobs.url" target="_blank">
					<h3>{{ jobs.title }}</h3>
					<span>{{ jobs.domain }}</span>
				</a>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { fetchJobsList } from '@/api/index'

export default Vue.extend({
	name : 'JobsView',
	data() {
		return {
			jobsData : []
		}
	},
	methods : {
		async getJobsData(){
			await fetchJobsList()
				.then(response => this.jobsData = response.data)
				.catch(err => console.log(err))
		}
	},
	created() {
		this.getJobsData()
	},
})
</script>

<style lang="scss" scoped>

</style>
