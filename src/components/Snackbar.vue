<template>
	<div class="snackbar" id="snackbar">
		Great! Now paste it on your email client. &#x1F4A5;
	</div>
</template>

<script>
export default {
	name: 'Snackbar'
}
</script>

<style lang="scss" scoped>
.snackbar{
  position: fixed;
  width: auto;
  margin: 0 auto;
  left: 50%;
  padding: 1.2em;
  background-color: #3f3f3f;
  color: #fff;
  font-weight: 600;
  border-radius: 2px;
  border: 1px solid #2a2a2a;
  box-shadow: 1px 1px 10px #2a2a2a;
  bottom: -100%;
  transform: translateX(-50%);
  transition: all ease-in-out 500ms;

  &.snackbar--active{ bottom: 0.5em; }
}
</style>
