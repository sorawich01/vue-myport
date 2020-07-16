<template>
<div>

      <div class="my-box" > {{Message}}</div>

  </div>
</template>

<script>
export default{
	props: {
		Message : {type: String}
	},
	data() {
		return {
		}
	}
}
</script>


<style scoped>
.my-box{
text-align:center;
padding:24px;
max-width: 400px;
box-sizing: border-box;
background-color: white;
margin:10px;
box-shadow: 2px 2px 2px 2px #888888;
}
</style>