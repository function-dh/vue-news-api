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
			isActive : false
		}
	},
})
</script>

<style lang="scss">
	.Toolbar-wrap{
		.menu-list{
			display: flex;
			> li{
				width: 100%;
				text-align: center;
				.router-link-active{
					color: red;
				}
			}
		}
	}
</style>