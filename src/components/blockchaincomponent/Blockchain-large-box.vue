<template>
<div>

      <div class="my-box"> <h3>{{Message}}</h3>
		<p>{{Message2}}</p>
	  </div>

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
	/* margin-top:60px; */
text-align:center;
padding-top :20px;
min-height: 130px;
max-height: 130px;
min-width: 130px;
max-width:200px;
box-sizing: border-box;
box-shadow: 2px 2px 2px 2px #888888;
/* background-color:white; */
background-image: url("https://previews.123rf.com/images/pongmoji/pongmoji1503/pongmoji150300500/38208788-wood-texture-background-soft-tone-white-color.jpg");
margin:10px 15px 10px 15px;
}
</style>