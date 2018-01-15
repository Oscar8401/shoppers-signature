<template>
  <div id="app" class="container">
    <Preview :name="name" :position="position" :phone="phone" />
    <Form :name="name" :position="position" :phone="phone" @updateData="updateData" />
    <Snackbar />
  </div>
</template>

<script>
import Preview from './components/Preview'
import Form from './components/Form'
import Snackbar from './components/Snackbar'

const staticData = {
	name: 'Mylena Gama',
	position: 'Marketing Coordinator',
	phone: '+55 41 99672.5527'
}

export default {
  name: 'App',
  data () {
		return {
			name: staticData.name,
  		position: staticData.position,
  		phone: staticData.phone
		}
	},
	methods: {
		updateData(obj) {
			this.name = obj.name != '' ? obj.name : staticData.name
			this.position = obj.position != '' ? obj.position : staticData.position
			this.phone = obj.phone != '' ? obj.phone : staticData.phone
		}
	},
  components: { Preview, Form, Snackbar }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,600');

*, :before, :after {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html, body{
  min-height: 100%;
  height: auto;
}

body {
  margin: 1em 0;
  background-color: #f6f5f9;
  background: -webkit-linear-gradient(to bottom, #f6f5f9, #e5e7e9);
  background: linear-gradient(to bottom, #f6f5f9, #e5e7e9);
  font-size: 1em;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

.container {
  margin: 0 auto;
  width: 70%;
  max-width: 800px;
  transition: all ease-in-out 200ms;

  @media screen and (max-width: 767px){
    width: 90%;
  }
}

.card{
  border: 1px solid #ccc;
  box-shadow: 0 0 5px #ccc;
  padding: 1.5em;
  background-color: #fff;
  border-radius: 2px;

  &.preview{ margin: 0 0 1.5rem 0; }
  &.form{ margin: 0; }
}
</style>
