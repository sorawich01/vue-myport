<template>
<div>
	<div class="about-section">
		<div class="work-body">
			<div class="about-container">
				<div class="work-section">
					<div class="cs-bg-div">
						<!-- <div class="cs-text-block-div"> -->
							<div class="cs-block-description-about">
								<div class="cs-block-title">
									Get my Information from Firebase
								</div>
									<div class="row justify-content-center">
										<div class="col-md-3">
											<ViewButton Func="GetdataFromFirebase" @click.native="GetdataFromFirebase() , show = ! show"></ViewButton>
										</div>
										<div class="col-md-8">
											<transition name="fade">
											<div v-if="show">
												<div class="row">
													<div class="col-7">
														<div class="inforfont">
															<p class="inforfont head"> My information </p>
															<br>
															<br>
															<p> fullname : {{fullname}} </p>
															<br>
															<p> nickname : {{nickname}} </p>
															<br>
															<p> Date of birth : {{DoBd}} {{DoBm}} {{DoBy}} </p>
														</div>
													</div>
													<div class="col-4">
														<p class="inforfont head" style="margin-top:130px; font-size:35px;"> Please <br>scroll down</p>
													</div>
												</div>
											</div>
											</transition>
										</div>
									</div>
								</div>
						<!-- </div> -->
					</div>
				</div>
			</div>
		</div>
	</div>


	<div v-if="show">
		<div class="about-body">
			<div class="work-section">
				<div v-parallax="-0.4">
					<div class="cs-bg-div-white">
						<div class="intro about-container">
							<div class="cs-text-block-div">
								<div class="cs-block-description">



									<div class="paragraph"> Hello! I'm Sorawich Thamtarakul, </div>
								</div>
							</div>
							<div>
								<img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" width="510" sizes="(max-width: 767px) 100vw, 510px" class="image-9" style="">


							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="about-body">
			<div class="work-section">
				<div v-parallax="-0.4">
					<div class="cs-bg-div-white">
						<div class="intro about-container">
							<div class="cs-text-block-div">
								<div class="cs-block-description">
									<div class="paragraph" style="font-color:black; font-size:60px"> My information </div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="about-body">
			<div class="work-section">
				<div v-parallax="-0.4">
					<div class="cs-bg-div-white">
						<div class="intro about-container">
							<div class="cs-text-block-div">
								<div class="cs-block-description">
									<div class="paragraph" style="font-color:black; font-size:60px"> My Information </div>
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

import AuthenticationService from '../services/authentication';

import ViewButton from '../components/Aboutcomponents/About-button.vue'

export default {
	name: 'about',
	components:{
		ViewButton
	},
	data() {
		return {
			myinfor: '',
			info:'',
			fullname:'',
			nickname:'',
			DoBd :'',
			DoBm: '',
			DoBy: '',

			show: false,
		}
 },
 methods : {
	 async About() {
			const response = await AuthenticationService.About()
			this.info = response.data.about;
		},
		async GetdataFromFirebase() {
			const response = await AuthenticationService.GetdataFromFirebase()
			this.info = response.data;
			this.fullname = response.data.my_information.full_name;
			this.nickname = response.data.my_information.nick_name;
			this.DoBd = response.data.my_information.date_of_birth.date;
			this.DoBm = response.data.my_information.date_of_birth.month;
			this.DoBy = response.data.about.my_information.date_of_birth.year;

		},
		Clear (){
			this.message = null;
			this.info = null;
		}
 }
}

</script>


<style scoped>
.work-body {
	background-color: #181818;

}
.about-body {
	background-color: #181818;
	height: 800px;

}
.about-section {
	overflow: visible;
	position: relative;
  display: block;
	height: calc(100vh - 71px);
  margin-bottom: 0px;

  /* margin-bottom: -212px; */
  padding-top: 45px;
}
.cs-text-block-div {
    position: relative;
    top: 60px;
    display: block;
    width: 400px;
    margin-left: 10px;
}

.cs-bg-div{

    overflow: hidden;
    height: 690px;
    margin-top: 30px;
    /* background-position: 50% 50%; */
    background-size: auto;
    /* background-repeat: no-repeat; */

}
.cs-bg-div-white{

    overflow: hidden;
    height: 690px;
    margin-top: 30px;
    /* background-position: 50% 50%; */
    background-size: auto;
    /* background-repeat: no-repeat; */
		background-color: #ECECEC;

}

.cs-bg-div.cal-site {

    background-image: url("../assets/calculator-bg.png");
		/* opacity: 0.4; */
}
.cs-bg-div.cal-site1 {
    background-image: url("../assets/101534732_252896032604829_4153393749237374418_n.jpg");

}
.cs-block-description-about {
    width: 1200px;
    color: #fff;

}
.about-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1128px;

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
    width: 900px;
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
p{
	color:white;
}

.inforfont{
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
    font-family: 'Teko', sans-serif;
    color: #a0a0a0;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
}

.inforfont.head{

  margin-bottom:0px;
margin-top:45px;
	font-family: 'Teko', sans-serif;
  color: yellow;
  font-size: 45px;
  font-weight: 400;
  letter-spacing: 0px;
}
.calculator-section {
	overflow: visible;
	position: relative;
  display: block;
	height: calc(100vh - 71px);
  margin-bottom: 0px;

  /* margin-bottom: -212px; */
  padding-top: 45px;
}
.image-9 {
    position: absolute;
    top: 91px;
    right: -49px;
    bottom: 0px;
    z-index: 1;
    margin-top: 0px;
}
img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
