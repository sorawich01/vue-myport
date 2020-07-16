

<template>
<div>

      <div class="boxs"> <h3 style="padding-top:10px">{{Head}}</h3>
		<p style="padding-top:10px">{{information}}</p>
		<a href="#/" style="padding-top:10px">learn more</a>
	  </div>

  </div>
</template>

<script>
export default{
	props: {
		Head : {type: String},
		information : {type: String}
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
height: 120px;
max-height: 120px;
box-sizing: border-box;
box-shadow: 2px 2px 2px 2px #888888;
/* background-color:white; */
background-image: url("https://previews.123rf.com/images/pongmoji/pongmoji1503/pongmoji150300500/38208788-wood-texture-background-soft-tone-white-color.jpg");
margin:10px;
}

.boxs{
/* text-align:center; */
padding :40px;
/* height: 350px; */
min-height: 350px;
max-height: 500px;
box-sizing: border-box;
/* box-shadow: 2px 2px 2px 2px #888888; */
background-color:white;
margin:20px;}

</style>