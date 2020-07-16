<template>
	<div>
		<a class="my-box" href="#/">{{Message}}</a>
  	</div>
</template>

<script>
export default{
	props: {
		Message : {type: String},
		Message2 : {type: String}
	},
	data() {
		return {
		}
	}
}
</script>


<style scoped>
.my-box{
 color:darkgray;

}
.endheadselect{
  color:darkgray;
  font-size:17px;
}
</style>