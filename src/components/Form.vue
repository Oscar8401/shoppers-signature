<template>
	<div class="form card">
		<div class="form__row">
			<label class="form__label" for="name">Name</label>
			<input type="text" placeholder="What is your name?" id="name" name="name" class="form__input--text" v-model="customName" @keyup="updateName">
		</div>
		<div class="form__row">
			<label class="form__label" for="position">Position</label>
			<input type="text" placeholder="What is your position?" id="position" name="position" class="form__input--text" v-model="customPosition" @keyup="updatePosition">
		</div>
		<div class="form__row">
			<label class="form__label" for="phone">Phone number</label>
			<input type="text" placeholder="Eg. +55 41 3333.3333" id="phone" name="phone" class="form__input--text" v-model="customPhone" @keyup="updatePhone">
		</div>
	</div>
</template>

<script>
export default {
  name: 'Form',
  props: ['name', 'position', 'phone'],
  data: function () {
    return {
        customName: this.name,
        customPosition: this.position,
        customPhone: this.phone,
    }
	},
	methods: {
		updateName(event) {
			this.$emit('updateData', { name: event.target.value, position: this.customPosition, phone: this.customPhone })
		},
		updatePosition(event) {
			this.$emit('updateData', { name: this.customName, position: event.target.value, phone: this.customPhone })
		},
		updatePhone(event) {
			this.$emit('updateData', { name: this.customName, position: this.customPosition, phone: event.target.value })
		}
	}
}
</script>

<style lang="scss" scoped>
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
		font-size: .8em;

		&:focus{
			border-color: #394b64;
			outline: none;
		}
	}
}
</style>
