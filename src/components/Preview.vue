<template>
	<div class="preview card">
		<div class="preview__result">
			<Signature :name="customName" :position="customPosition" :phone="customPhone" :linkPhone="linkPhone" />
		</div>
		<div class="preview__footer">
			<button class="button button--blue">Copy to clipboard</button>
		</div>
	</div>
</template>

<script>
import Signature from './Signature'
export default {
  name: 'Preview',
  props: ['name', 'position', 'phone'],
  computed: {
  	customName(){
  		return this.name;
  	},
  	customPosition(){
  		return this.position;
  	},
  	customPhone(){
  		return this.phone;
  	},
  	linkPhone(){
  		return `tel:${this.phone.replace(/\./g,'-')}`
  	}
  },
  components: { Signature }
}
</script>

<style lang="scss" scoped>
.preview__footer{
	border-top: 1px solid #ccc;
	padding-top: 20px;
	margin-top: 20px;
	font-size: 0.75em;
	color: #777272;
}

.button{
	display: inline-block;
	border-radius: 2px;
	transition: all ease-in-out 200ms;
	border: 1px solid transparent;
	padding: 10px;
	text-align: center;
	cursor: pointer;

	&.button--blue{
		color: #fff;
		background-color: #269ad7;
		border-color: #1f93d0;

		&:hover{
			background-color: #1f93d0;
			border-color: #1884bd;
		}
	}
}
</style>
