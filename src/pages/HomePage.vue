<template>
 	<div>
 		<div class="intro w-container">
			 <div v-parallax="0.6"  class="spleft">
 			<h1  class="heading">
 				PORTFOLIO
 			</h1>
 			<img src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b91c9bcae89e57253d599a9_horizontal-line.svg" alt="" class="image">
 			<div class="paragraph"> Hello! I am Sorawich Thamtarakul, </div>
 			<div class="paragraph p2"> a computer engineering </div>
 		</div>
 		</div>
		 <div v-parallax="0.1" >
 		<div class="cs-bg-div boosted-site">
 			<div class="cs-text-block-div">
 				<div class="cs-block-description">

 				</div>
 			</div>
 			</div>
 		</div>

 	</div>

</template>

<script>
export default {

}
</script>

<style>
p{
	color:white;
}
@media screen and (max-width: 479px){
	.w-container {
			max-width: none;
			margin-left: 75px;
	}
}
@media screen and (max-width: 991px){
	.w-container {
		max-width: 728px;
		margin-left: 75px;
	}
}
.w-container{
	margin-right : auto;
	margin-left: auto;
	max-width: 940px;
}
	.cs-bg-div.boosted-site {
    background-image: url(https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5e04efbf0b1ac58fadeb3a64_boosted-ux-hero.jpg);
}
	.cs-bg-div.boosted-site2 {
    background-image: url(https://jooinn.com/images/abstract-background-305.jpg);
		opacity: 0.4;
}
.cs-bg-div {
    overflow: hidden;
    height: 690px;
		height: 690px;
    margin-top: 30px;
		/* margin-bottom: 30px; */
    background-image: url(https://uploads-ssl.webflow.com/5b0eb11…/5b57ecf…_boosted-2018-bg.jpg);
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;

}
.cs-text-block-div {
    position: relative;
    top: 60px;
    display: block;
    width: 400px;
    margin-left: 75px;


}
.cs-block-description {
    width: 400px;
    color: #fff;

}
.intro {
    position: relative;
    display: block;
    overflow: visible;
    height: 100vh;
    margin-bottom: 0px;
    padding-top: 71px;

}
.bold-text {
    position: relative;
    z-index: 3;
    width: 752px;
    font-family: 'Archivo Black', sans-serif;
    color: #fff;
    font-size: 40px;
    line-height: 56px;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0px;
}
.text-header {
    margin-top: 0px;
    font-family: 'Archivo Black', sans-serif;
    color: #f1c22d;
    font-size: 40px;
    font-weight: 700;
    text-align: left;
    letter-spacing: 1px;
}
.image {
    padding-top: 30px;
}

.paragraph {
    position: relative;
    z-index: 3;
    width: 430px;
    margin-bottom: 0px;
    padding-top: 35px;
    font-family: Nunito, sans-serif;
    color: #868686;
    font-size: 19px;
    line-height: 26px;
}
.paragraph.p2{
	padding-top:0px;
	margin-bottom: 15px;
}
.paragraph2 {
    position: relative;
    z-index: 3;
    width: 430px;
    margin-bottom: 15px;
    font-family: Nunito, sans-serif;
    color: #868686;
    font-size: 19px;
    line-height: 26px;
}
h1 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 38px;
    line-height: 44px;
    font-weight: bold;
}
.heading {
    width: 682px;
    margin-top: 150px;
    font-family: 'Archivo Black', sans-serif;
    color: #eba694;
    font-size: 44px;
    line-height: 51px;
    text-align: left;
}
.spleft{
	margin-left: 30px;
}

</style>