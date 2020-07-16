
<template>
<div>
   <button class="button-3 cs-block dark-bg">{{Func}}</button>
	 <!-- <a v-bind:href="'#/'+linkk" class="button-3 cs-block dark-bg">{{Func}}</a> -->
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
</style>