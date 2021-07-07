<template>
  <div class="MainHome">
    <ul>
      <li><router-link to="ask">ask</router-link></li>
      <li><router-link to="jobs">jobs</router-link></li>
      <li><router-link to="news">news</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import AskView from '@/components/ask/AskView.vue'
import JobsView from '@/components/jobs/JobsView.vue'
import NewsView from '@/components/news/NewsView.vue'

export default Vue.extend({
  name: 'MainHome',
  components: {
    AskView,
    JobsView,
    NewsView
  },
});
</script>
