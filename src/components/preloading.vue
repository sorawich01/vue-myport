<template>
	<div class="preloading">
		<div class="logo">
			<p>loading . . .</p>
		</div>
	</div>
</template>

<script>
export default {

}

</script>

<style scoped>
.preloading{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: absolute;
width: 100%;
	height: 100vh;
	background-color: darkslategrey;
	z-index: 9999;

  overflow-y: hidden;
}
</style>