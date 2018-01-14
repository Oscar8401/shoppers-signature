<template>
  <div id="app" class="container">
    <Preview />
    <Form />
  </div>
</template>

<script>
import Preview from './components/Preview'
import Form from './components/Form'

export default {
  name: 'App',
  components: {
    Preview,
    Form
  }
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
