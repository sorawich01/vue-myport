<template>
  <div id="app">
			<div class="container-fluid" style="background-color: #181818">
				<div class="body">
					<div v-if="loader">
						<preloading /> -->
						<!-- <router-view></router-view> -->
					</div>
					<div v-else>
						<navigation />
						<router-view></router-view>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import navigation from './components/navigation'
import Homepage from './pages/HomePage'
import preloading from './components/preloading'
export default {
	name: 'App',
  components: {
		navigation,
		Homepage,
		preloading
	},
	data(){
		return {
			loader : true
		}
	},
	mounted(){
		this.showToggle()
	},
	methods : {
		showToggle(){
			setTimeout(() => {
				this.loader = false
			},500)
		}
	}

}
</script>

<style>
.body{
	/* background-color: #181818 */
	background-color: #181818;
}
/* body{
	height: 100%;
   overflow-y: hidden;
} */

</style>
