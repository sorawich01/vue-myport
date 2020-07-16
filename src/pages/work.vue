<template>
	<div class="work-body">
		<div class="work-section">

				<div class="cs-bg-div cal-site">
					<div class="cs-text-block-div">
						<div class="cs-block-description">
							<div class="cs-brand">
							</div>
							<div class="cs-block-title">
								Calculator API
							</div>
							<a href="#/calculator" class="button-3 cs-block dark-bg">View</a>
						</div>
 					</div>
				</div>

				<div class="cs-bg-div cal-site1">
					<div class="cs-text-block-div">
						<div class="cs-block-description">
							<div class="cs-brand">
							</div>
							<div class="cs-block-title">
								Front End Practice
							</div>
							<a href="#/work/blockchain" class="button-3 cs-block dark-bg">View</a>
						</div>
 					</div>
				</div>

				<div class="cs-bg-div cal-site1">
					<div class="cs-text-block-div">
						<div class="cs-block-description">
							<div class="cs-brand">
							</div>
							<div class="cs-block-title">
								Front End Practice
							</div>
							<a href="#/" class="button-3 cs-block dark-bg">View</a>
						</div>
 					</div>
				</div>

		</div>
	</div>
</template>
<script>
export default {
	methods:{
		reload : function (){
		 location.load()
		}
	}
}
</script>


<style scoped>
.work-body {
	background-color: #181818;
}

.cs-bg-div{

    overflow: hidden;
    height: 690px;
    margin-top: 30px;
    /* background-position: 50% 50%; */
    background-size: auto;
    /* background-repeat: no-repeat; */

}

.cs-bg-div.cal-site {

    background-image: url("../assets/calculator-bg.png");
		/* opacity: 0.4; */
}
.cs-bg-div.cal-site1 {
    background-image: url("../assets/101534732_252896032604829_4153393749237374418_n.jpg");

}

.work-section {
    position: relative;
    display: block;
    margin-top: 30px;
		margin-left:30px;
		margin-right:30px;
}
.cs-brand{
	margin-bottom: 150px;
}
.cs-block-title {

    display: flex;
    width: 400px;
    margin-top: 24px;
    margin-bottom: 24px;
    font-family: Teko, sans-serif;
    color: #30499B;
    font-size: 50px;
    line-height: 44px;
    font-weight: 500;
    text-transform: uppercase;
}
.button-3 {
    position: relative;
    top: -80px;
    display: inline-block;
    border: 2px solid #fff;
    background-color: hsla(0, 0%, 98.8%, 0);
    -webkit-transition: border 325ms ease;
    transition: border 325ms ease;
    font-family: Teko, sans-serif;
    font-size: 14px;
    letter-spacing: 2px;
}
.button-3.cs-block {
    top: 0px;
    margin-top: 54px;
    padding: 14px 24px;
    transition: all 200ms ease;
    text-transform: uppercase;
}
.button-3.cs-block.dark-bg {
    border-style: solid;
    background-image: none;
    color: #fff;
}
.w-button {
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 0;
}
</style>
