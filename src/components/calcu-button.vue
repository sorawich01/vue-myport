
<template>
<div>
    <b-button-group>
    	<!-- <b-button variant="primary" style="border-radius: 25px 25px 25px 25px; width:150px;"> {{Func}} </b-button> -->
	    <b-button variant="primary" pill> {{Func}} </b-button>

    </b-button-group>
  </div>
</template>

<script>
export default{
	props: {
		Func: {type: String}
	},
	data() {
		return {
		}
	}
}

</script>


<style scoped>
b-button{
	width: 200px;



}

</style>