<template>
	<div class="preview card">
		<div class="preview__result">
			<Signature :name="customName" :position="customPosition" :phone="customPhone" :linkPhone="linkPhone" />
			<!-- <div id="signature__copy" ref="signature__copy">
				<p style="font-weight: 600">{{customName}}</p>
				<p style="color: hotpink">{{customPosition}}</p>
				<p style="font-style: italic">{{customPhone}}</p>
				<p>{{linkPhone}}</p>
			</div> -->
		</div>
		<div class="preview__footer">
			<button class="button button--blue preview__copy" @click="copySignature">Copy to clipboard</button>
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
  methods: {
  	copySignature(event){
  		let range = document.createRange();
			range.selectNode(document.getElementById('signature__copy'));
			window.getSelection().addRange(range);

  		document.execCommand('copy');

  		document.getElementById('snackbar').classList.add('snackbar--active');

  		setTimeout(() => {
  			document.getElementById('snackbar').classList.remove('snackbar--active');
  			window.getSelection().removeAllRanges()
  		}, 4200)
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
	position: relative;

	&:focus{ outline: none; }

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
