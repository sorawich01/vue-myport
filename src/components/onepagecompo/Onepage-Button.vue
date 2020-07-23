
<template>
<div class="site-banner__btn">


	 <a v-bind:href="'#/'+linkk" class="btn">View</a>

  </div>
</template>

<script>
export default{
	props: {
		Func : {type: String},
		linkk : {type: String}
	},
}

</script>


<style scoped>
.site-banner__btn {
    display: inline-block;
}

.btn{
    position: relative;
    display: inline-block;
    cursor: pointer;
    border: none;
    overflow: hidden;
    font-family: "Be Vietnam","Arial",sans-serif;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: #221f20;
		font-size: .8125rem;
    padding-bottom: 12px;
    letter-spacing: 2.6px;
}
a {
    text-decoration: none;
}


.btn:before {
    width: 100%;
    right: 0;
		content: '';
    position: absolute;
    bottom: 0;
    height: 4px;
    background: #221f20;
		transition: width ease .25s;
}
.btn:hover:before {
    width: 0;
    right: 0;
		content: '';
    position: absolute;
    bottom: 0;
    height: 4px;
    background: #221f20;
}













/* .btn{
	position: relative;
	display: inline-block;
	cursor: pointer;
	border: none;
	overflow: hidden;
	font-family: "Be Vietnam","Arial",sans-serif;
	font-weight: 700;
	text-align: center;
	text-transform: uppercase;
	color: #221f20;
	font-size: .875rem;
	padding-bottom: 14px;
	letter-spacing: 2.8px;
}

.btn-effect{
	border-bottom: 0px solid black;
	transition: border-bottom 0.3s;
}
.btn-effect:hover{
		border-bottom: 2px solid black;
		transform: scale(1);
} */

</style>