<template>
<div class="calculator-body">
	<div class="calculator-section">
 		<div class="calculator-container">
 			<h1 class="calculator-heading">
 				Calculator API
 			</h1>
			<img src="https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5b91c9bcae89e57253d599a9_horizontal-line.svg" alt="" class="image">
 		</div>
		<div class="cs-bg-div boosted-site" style="height:400px" >
		 <div class="field" style="opacity:0.9;">
			 	<div class="row">
					<div class="col-lg-6" style="border-right: 3px solid black;">
						<div class="row">
							<div class="col">
								<input type="text" name="num" placeholder="ex. 12" v-model="Num1" class="box-control">
							</div>
							<div class="col">
								<input type="number" name="num" placeholder="ex. -34" v-model="Num2" class="box-control">
							</div>
						</div>
						<div class="row">
							<div class="col">
								<ButtonFunction Func="add" @click.native="Calculator('Addition')"></ButtonFunction>
							</div>
							<div class="col">
								<ButtonFunction Func="sub" @click.native="Calculator('Subtraction')"></ButtonFunction>
							</div>
							<div class="col">
								<ButtonFunction Func="Multi" @click.native="Calculator('Multiplication')"></ButtonFunction>
							</div>
							<div class="col">
								<ButtonFunction Func="Division" @click.native="Calculator('Division')"></ButtonFunction>
							</div>
						</div>
						<br>
						<p> result : {{message}} </p>
					</div>
					<div class="col-lg-6">
						<div class="row">
							<div class="col">
								<ButtonFunction Func="About" @click.native="About()"></ButtonFunction>
							</div>

							<div class="col">
								<ButtonFunction Func="Clear" @click.native="Clear()"></ButtonFunction>
							</div>
						</div>
						<br><p> info : {{info}} </p>
					</div>
			 	</div>
		 	</div>
		</div>
	</div>
</div>

</template>



<script>

import ButtonFunction from '../components/calcu-button'

import AuthenticationService from '../services/authentication';


export default {
	name: 'calculator',
	components:{
		ButtonFunction,
	},
	data() {
		return {
			newPost: '',
			Num1: '',
			Num2: '',
			message: '',
			operator: '',
			info: '',
			response:'',

		}
	},
	methods: {
		async About() {
			const response = await AuthenticationService.About()
			this.info = response.data.about;
		},
		async GetdataFromFirebase() {
			const response = await AuthenticationService.GetdataFromFirebase()
			this.info = response.data;
		},

		async Calculator(msgg) {
			const response = await AuthenticationService.Calculator({
				num1 : this.Num1,
				num2 : this.Num2,
			},msgg)
			this.message = response.data;
		},
		Clear (){
			this.message = null;
			this.info = null;
		}
	}
}
</script>





<style scoped>
.calculator-body {
	background-color: #181818;
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
.calculator-container {
  margin-left: auto;
  margin-right: auto;
  max-width: 1128px;

}
.calculator-heading {
	font-family: 'Archivo Black', sans-serif;
	color: #f1c22d;
	font-size: 35px;
	line-height: 51px;
	text-align: left;
}
.w-col-3 {
	width: 25%;
}

.w-col {
	position: relative;
	float: left;
	width: 100%;
	min-height: 1px;
	padding-left: 10px;
	padding-right: 10px;
}
.image{
	margin-bottom: 50px;
}
.field{
	margin-bottom: 0.75rem;
	margin-left: auto;
  margin-right: auto;
	margin-top:39px;
  max-width: 1128px;
	background: white;
	padding:75px;
}
.box-control {
    box-sizing: border-box;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: left;
		margin: 0px 15px 45px 15px;
}
p{
	color:black;
}
</style>
