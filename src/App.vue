<template>
  <div id="app">
		<div class="container-fluid p-0">
			<div class="body">
				<navigation />
				<!-- <Homepage /> -->
				<router-view></router-view>

			</div>
		</div>
  </div>
</template>

<script>
import navigation from './components/navigation'
import Homepage from './pages/HomePage'
export default {
  name: 'App',
  components: {
		navigation,
		Homepage
  }
}
</script>

<style>
.body{
	/* background-color: #181818 */
	background-color: #181818;
}
</style>
