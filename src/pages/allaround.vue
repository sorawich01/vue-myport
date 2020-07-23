<template>
 	<div class="body">
		<div class="bgimg-1">
			<div class="caption">
				<span class="bgimg-2 border increase-border ">My PORT</span>
			</div>
		</div>

		<div style="color: #777;background-color:white;text-align:center;padding:50px 80px;text-align: justify;">
  <h3 style="text-align:center;">Parallax Demo</h3>
  <p style="color:black;">Parallax scrolling is a web site trend where the background content is moved at a different
		speed than the foreground content while scrolling. Nascetur per nec posuere turpis,
		lectus nec libero turpis nunc at, sed posuere mollis ullamcorper libero ante lectus,
		blandit pellentesque a, magna turpis est sapien duis blandit dignissim. Viverra interdum mi magna mi,
		 morbi sociis. Condimentum dui ipsum consequat morbi, curabitur aliquam pede,
		  nullam vitae eu placerat eget et vehicula. Varius quisque non molestie dolor,
			 nunc nisl dapibus vestibulum at, sodales tincidunt mauris ullamcorper, dapibus pulvinar,
			  in in neque risus odio. Accumsan fringilla vulputate at quibusdam sociis eleifend, aenean maecenas vulputate,
				 non id vehicula lorem mattis, ratione interdum sociis ornare. Suscipit proin magna cras vel, non sit platea sit,
				  maecenas ante augue etiam maecenas, porta porttitor placerat leo.</p>
</div>
<div class="bgimg-2">
  <div class="caption">
  <span class="border" style="background-color:transparent;font-size:25px;color: #f7f7f7;">Backend Api</span>
  </div>
</div>


<div v-paralaax="-0.6">
<div style="position:relative;">
  <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
  <p>param 1.</p>
  </div>
</div>
</div>
<div class="bgimg-3">
  <div class="caption increasewidth" >
  <span class="border" style="background-color:transparent;font-size:25px;color: #black;">Front End Practice</span>
  </div>
</div>

<div style="position:relative;">
  <div style="color:#ddd;background-color:#282E34;text-align:center;padding:50px 80px;text-align: justify;">
  <p>param 2.</p>
  </div>
</div>

<div class="bgimg-1">
  <div class="caption">
  <span class="border">Contract me</span>
  </div>
</div>

 	</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.body, html {
  height: 100%;
  margin: 0;
  font: 400 15px/1.8 "Lato", sans-serif;
  color: #777;
}





.bgimg-1, .bgimg-2, .bgimg-3 {
  position: relative;
  opacity: 0.75;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.bgimg-1 {
  background-image: url("../assets/tree-1.jpg");
  min-height: 100vh;

}

.bgimg-2 {
	background-image: url("../assets/101534732_252896032604829_4153393749237374418_n.jpg");
	height: 400px;
	opacity: 1;
}

.bgimg-3 {
  /* background-image: url("../assets/calculator-bg.png"); */
	background-image: url("../assets/real-dynamic-banner-01.jpg");
  height: 400px;
	 background-size: auto;
	 transition: height 1s ,  transform 1s;
}

.bgimg-3:hover {
  height:600px;
	transform: scale(1.1);
  transform-origin:bottom;
}

.increase-border{
	padding: 18px;
	transition: padding 2s;
}
.increase-border:hover{
	padding : 100px;
	/* transform: scale(1); */
}
.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
  color: #000;
}

.caption span.border {
  /* background-color: #111; */
  color: #fff;
  /* padding: 18px; */
  font-size: 25px;
  letter-spacing: 10px;
	transition: padding 2s;
}

h3 {
  letter-spacing: 5px;
  text-transform: uppercase;
  font: 20px "Lato", sans-serif;
  color: #111;
}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
  .bgimg-1, .bgimg-2, .bgimg-3 {
    background-attachment: scroll;
  }
}

</style>

