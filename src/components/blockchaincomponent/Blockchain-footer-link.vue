<template>
	<div>
		<a v-bind:href="'#/'+linkk">{{linkname}}</a>
  </div>
</template>

<script>
export default{
	props: {
		linkname : {type: String},
		linkk : {type: String}
	},
	data() {
		return {
		}
	}
}
</script>

<style scoped>
</style>