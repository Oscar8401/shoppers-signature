<template>
  <div id="app" class="container">
    <Preview :name="name" :position="position" :phone="phone" />
    <Form :name="name" :position="position" :phone="phone" @updateData="updateData" />
  </div>
</template>

<script>
import Preview from './components/Preview'
import Form from './components/Form'

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
		updateData(obj){
			this.name = obj.name != '' ? obj.name : staticData.name;
			this.position = obj.position != '' ? obj.position : staticData.position;
			this.phone = obj.phone != '' ? obj.phone : staticData.phone;
		}
	},
  components: { Preview, Form }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,600');

* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html, body{
  min-height: 100%;
  height: auto;
}

body {
  margin: 0;
  background-color: #f1f1f1;
  font-size: 1em;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0 auto;
  width: 70%;
  transition: all ease-in-out 200ms;

  @media screen and (max-width: 767px){
    width: 90%;
  }
}

.card{
  padding: 20px;
  border: 1px solid #ccc;
  margin: 2rem;
  background-color: #fff;
  border-radius: 2px;
}
</style>
