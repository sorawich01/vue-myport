<template>
  <div class="w-container">
		<link href="https://fonts.googleapis.com/css2?family=Teko:wght@500&display=swap" rel="stylesheet">
		<b-navbar toggleable="lg" type="dark">
			<b-navbar-brand href="#/" class="text-block-14">SORAWICH THAMTARAKUL</b-navbar-brand>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item href="#/" class="link-3 rev nav">Home</b-nav-item>
					<b-nav-item href="#/work" class="link-3 rev nav">WORK</b-nav-item>

					<b-nav-item href="#/about" class="link-3 edge rev">ABOUT</b-nav-item>
				</b-navbar-nav>
			</b-collapse>
		</b-navbar>
   </div>
</template>

<style scoped>
/* @media screen and (max-width: 479px){
	.w-container {
			max-width: none;
	}
}
@media screen and (max-width: 991px){
	.w-container {
			max-width: 728px;
	}
}

.w-container{
	margin-right : auto;
	margin-left: auto;
	max-width: 940px;
	padding:0px;
	border:0px;

} */

.text-block-14 {
  margin-top: 0px;
  margin-bottom:0px;
  /* padding-top: 4px; */
	font-family: 'Teko', sans-serif;
  color: #fff;
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0px;
}
/* .div-box-14{
	font-family: 'Teko', sans-serif;
	color:#fff;
} */
.link-3 {
    position: relative;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    display: inline-block;
    overflow: visible;

    margin-right: 35px;
    margin-left: 35px;
    -webkit-transition: all 258ms ease;
    transition: all 258ms ease;
    font-family: Teko, sans-serif;
    color: #a0a0a0;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
}
.link-3.rev {
    font-size: 18px;
}
.link-3.edge {
    margin-right: -1px;
}


</style>