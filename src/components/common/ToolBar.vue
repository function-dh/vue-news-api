<template>
	<header id="header">
		<div class="Toolbar-wrap">
			<ul class="menu-list">
				<li><router-link to="news">news</router-link></li>
				<li><router-link to="ask">ask</router-link></li>
				<li><router-link to="jobs">jobs</router-link></li>
			</ul>
		</div>
	</header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	name : 'ToolBar',
	data() {
		return {
		}
	},
})
</script>

<style lang="scss" scoped>
	.Toolbar-wrap{
		.menu-list{
			display: flex;
			> li{
				flex: 1 1 auto;
				text-align: center;
				> a{
					display: block;
					width: 100%;
					padding: 12px 0;
					color: white;
					background: #42b883;
				}
				.router-link-active{
					font-weight: 700;
					color: #354952;
				}
			}
		}
	}
</style>