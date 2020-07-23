<template>
	<div class="body">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
			<div class="bgfirst" id="first">
				<div class="container">
					<div class="intro">
						<div class="firstsection">
							<div class="row">
								<div class="col-md-6">
									<div data-aos="fade-right" data-aos-duration="350" data-aos-easing="ease-in-sine">
										<div class="maintopic">
											PORTFOLIO
										</div>
									</div>
									<div data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-sine">
										<img src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b91c9bcae89e57253d599a9_horizontal-line.svg" alt="" class="imgbelowtopic">
									</div>
									<div data-aos="fade-right" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-delay="100">
										<div class="expandmaintopic firstparagraph">
											Hello! I am Sorawich Thamtarakul,
										</div>
										<div class="expandmaintopic secondparagraph">
											a computer engineering
										</div>
									</div>
									<div data-aos="fade-zoom-in" data-aos-duration="300" data-aos-easing="ease-in-sine" data-aos-delay="600">
										<div class="contact-icon">

											<a href="https://github.com/sorawich01/vue-myport" class="fa fa-github"></a>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<img src="../assets/dog-profile-pic.jpg" alt="" class="imgprofilepic increase-border">
								</div>
								<div class="subsection-in-main">
									<div style="cursor: pointer;">
										<div v-scroll-to="{ el: '#secc', easing: 'ease-in-out' , duration: 800 ,offset: 0}">
											<div class="arrow">
												<span></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bgsecond" id="secc" style="opacity:0.7">
			</div>

			<div class="container">

				<div class="service-items">
					<div class="row">
						<!-- <div class="col-md-12 fadeInUp"> -->
						<!-- <div class="sevice-items"> -->
						<div class="col-lg-4 col-md-6">

							<div data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-sine" class="work-increase-border">
								<div class="single-item">
									<i>
										<b-icon-newspaper/>
									</i>
									<h2>Calculator API</h2>
									<p> Calculator from getting Function from nodejs by local API </p>
									<div>
										<Button linkk="calculator" Func="onepage"></Button>
									</div>


									<!-- <ViewButton Func="GetdataFromFirebase" @click.native="GetdataFromFirebase() , show = ! show"></ViewButton> -->
								</div>
							</div>

						</div>
						<div class="col-lg-4 col-md-6">
							<div data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-sine" data-aos-delay="100" class="work-increase-border">

								<div class="single-item">
									<i>
										<b-icon-layout-text-window /></i>
									<h2>Frontend UI</h2>
									<p>Practice design web UI inspired by blockchain web practice UI</p>
									<div>
										<Button linkk="blockchain"></Button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div data-aos="fade-up" data-aos-duration="200" data-aos-easing="ease-in-sine" data-aos-delay="200" class="work-increase-border">

								<div class="single-item">
									<i>
										<b-icon-card-heading /></i>
									<h2>My Profile</h2>
									<p>Get my profile information from firebase realtime database</p>
									<div>
										<Button linkk="about"></Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="bgsecond" style="opacity:0.7">
				<div class="row">
					<div class="subsection-in-main">
						<div style="cursor: pointer;">
							<div v-scroll-to="{ el: '#third', easing: 'ease-in-out' , duration: 800 ,offset: 0}">
								<div class="arrow">
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container" id="third">
				<div class="service-items" style="height:100vh;">
					<div class="container">
					<div class="intro" style="background-color: #112122;margin-top:-39px; height:100vh">
						<div class="firstsection">
							<div class="row">
								<div class="col-md-6">
									<div style="margin-left:70px; margin-top:80px">
										<div class="expandmaintopic" style="color: #F0FF5C; font-size:28px">
											Name :
										</div>
										<div class="expandmaintopic firstparagraph " style="padding-top : 15px;">
											Sorawich Thamtarakul ,
										</div>
											<div class="expandmaintopic" style="color: #F0FF5C; font-size:28px; padding-top: 45px;">
											Nick Name :
										</div>
										<div class="expandmaintopic firstparagraph" style="padding-top : 15px">
											Hue ,
										</div>
											<div class="expandmaintopic" style="color: #F0FF5C; font-size:28px; padding-top: 45px;">
											Date of Birth :
										</div>
										<div class="expandmaintopic firstparagraph" style="padding-top : 15px;">
											18 Feb. 1999,
										</div>
									</div>
										<div class="contact-icon text-align-bottom">
											<a href="#" class="fa fa-facebook"></a>
											<a href="https://github.com/sorawich01/vue-myport" class="fa fa-github"></a>
										</div>
								</div>
								<div class="col-md-6">
									<div class="expandmaintopic firstparagraph" style="padding-top : 15px;">

											KMUTT
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>

import Button from '../components/onepagecompo/Onepage-Button.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// import bgparallax from '../components/onepagecompo/bg-parallax'

export default {
	components : {
		Button,
	},
	async mounted() {
  const AOS = await import('aos');
  AOS.init();
}
}
</script>

<style scoped>

.body {
  height: 100%;
  margin: 0;
  font-family: 'Archivo Black', sans-serif;
  color: #777;
	background-color: #181818;
	scroll-behavior: smooth;

}
.bgfirst, .bgsecond , .bg2side {
  position: relative;
  opacity: 1;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bgfirst {
  background-image: url("../assets/dark-sea.jpg");
	height: 100vh;
}
.bgsecond {
	background-image: url("../assets/topandbottom.jpg");
  min-height: 30vh;
	background-size: cover;
}
.caption {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  color: #000;
}
.intro{
    position: relative;
    display: block;
    overflow: visible;
    height: 100vh;
    margin-bottom: 0px;
    padding-top: 71px;
}
.firstsection {
	padding : 15px;
	padding-top:50px;
  color: white;
}
.maintopic{
    margin-top: 50px;
    color: #ffffe3;
    font-size: 50px;
    line-height: 51px;
    text-align: left;
		font-weight: bold;
}
.imgbelowtopic{
	 position: relative;
	padding-top: 25px;
	width : 100px;
	padding-bottom: 25px;
}
.expandmaintopic{
		color: #868686;
    font-size: 24px;
    line-height: 26px;
}
.expandmaintopic.firstparagraph{
	 padding-top:50px;
}
.expandmaintopic.secondparagraph{
	 padding-top: 10px;
}
.contact-icon{
padding-top : 80px;
}
.each-icon{
	padding-right:25px;
}
.subsection-in-main{
	margin-right:auto;
	margin-left:auto;
	margin-top:100px;
	text-align:center;
}
.fa {
  padding: 10px;
  font-size: 30px;
  width: 50px;
	height: 50px;
  text-align: center;
  text-decoration: none;
  margin: 2px 10px;
  border-radius: 50%;
}
.fa:hover {
    opacity: 0.7;
}
.fa-facebook {
  background: #3B5998;
  color: white;
}
.fa-github{
	background: white;
	color: black;
}
.imgprofilepic{
	position: relative;
	padding-top: 25px;
	margin-left: -50px;
	width : 100%;
	padding-bottom: 25px;
}
.worksection {
height:300px;
 max-height: 300px;
 min-height: 100px;
 z-index:1;
 background-color: #181818;
}



.right {
  position: relative;
  top:-280px;
	left:600px;
	width:700px;
  color:white;
  padding: 10px;
}


.bg2side {
	background-image: url("../assets/note-bg.jpg");
	 background-attachment: scroll;
	height : 100vh;
}

.bgimg-2 {
	background-image: url("../assets/house-bg.jpg");
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

	transition: transform 1s;
}
.increase-border:hover{

	transform: scale(1.1);
}
.work-increase-border{

	transform: transform 1.8s;
}
.work-increase-border:hover{

	transform: scale(1.05);
}
.logo-increase-border{

	transform: transform 2s;
}
.logo-increase-border:hover{

	transform: scale(1.3);
}
.service-items{
	margin-top : 40px;
}
.service-arrow {
    text-align: center;
    margin-top: 200px;
    padding-bottom: 20px!important;
}
.single-item i {
    margin-top: 30px;
    font-size: 26px;
    color: #f23b3b;
    border: 1px solid #e7e7e7;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    line-height: 80px;
    display: inline-block;
    text-align: center;
}

.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.single-item {
    background-color: #fff;
    text-align: center;
    margin-bottom: 20px;
		min-height: 300px;
}
.single-item p {
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 20px;
    padding-bottom: 20px;

}
p {
    margin: 0 0 10px;
		color: black;

    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
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

.arrow{
    transform: translate(-50%,-50%);
		display: block;
    width: 30px;
    height: 30px;
		margin-left:20px;
		margin-top:25px;
		margin-right:0px;
		margin-bottom:45px;
}

.arrow span{
    display: block;
    width: 30px;
    height: 30px;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;

}
.arrow span:nth-child(2){
    animation-delay: -0.2s;
}
.arrow span:nth-child(3){
    animation-delay: -0.4s;
}

@keyframes animate {
    0%{
        opacity: 0;
        transform: rotate(45deg) translate(-20px,-20px);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: rotate(45deg) translate(20px,20px);
    }
}

/* Turn off parallax scrolling for tablets and phones */
@media only screen and (max-device-width: 1024px) {
  .bgimg-1, .bgimg-2, .bgimg-3 {
    background-attachment: scroll;
  }
}
@media only screen and (max-device-width: 767px) {
 .bgfirst {
	height: calc(100vh + 230px);
}
.subsection-in-main{
	margin-top : 15px;
}
.imgprofilepic{

	margin-left: 0px;

}
}
</style>

