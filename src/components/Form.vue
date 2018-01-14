<template>
	<div class="form card">
		<div class="form__row">
			<label class="form__label" for="name">Name</label>
			<input type="text" placeholder="What is your name?" id="name" name="name" class="form__input--text" v-model="name">
		</div>
		<div class="form__row">
			<label class="form__label" for="position">Position</label>
			<input type="text" placeholder="What is your position?" id="position" name="position" class="form__input--text" v-model="position">
		</div>
		<div class="form__row">
			<label class="form__label" for="phone">Phone number</label>
			<input type="text" placeholder="Eg. +55 41 3333-3333" id="phone" name="phone" class="form__input--text" v-model="phone">
		</div>
	</div>
</template>

<script>
export default {
  name: 'Form',
  props: ['name', 'position', 'phone'],
  computed: {
  	customName(string){
			return this.name = string;
		},
		customPosition(string){
			return this.position = string;
		},
		customPhone(string){
			return this.phone = string;
		}
  }
}
</script>

<style lang="scss">
.form{
	.form__row{
		margin-bottom: 20px;

		&:last-child{ margin-bottom: 0; }
	}

	.form__label{ font-weight: 600; }

	.form__input--text{
		background: #fff;
		color: #333;
		padding: 10px;
		border-radius: 2px;
		border: 1px solid #ccc;
		transition: all ease-in-out 200ms;
		display: block;
		width: 100%;

		&:focus{
			border-color: #394b64;
			outline: none;
		}
	}
}
</style>
