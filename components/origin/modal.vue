<template>
	<div
		v-if="isOpen"
		:class="`modal-overlay ${isActive?'modal-overlay--active':''}`"
		@click.self="close()"
	>
		<!-- Content Wrapper -->
		<transition name="slide-left">

		<div class="modal-wrapper">
			<!-- Close Button (only if this modal is active) -->
			<button @click="close">X</button>
			<!-- Content -->
			<slot :close="close"></slot>
		</div>
			</transition>

		<!-- Child Modal Slot (will be able to take full screen size) -->
		<slot name="child"></slot>
	</div>
</template>

<script>
	export default {
		name: "Modal",
		props: {
			name: { type: String, required: true }
		},
		computed: {
			isActive() {
				return this.$store.getters["modals/active"] === this.name
			},
			isOpen() {
				return this.$store.getters["modals/allOpen"].includes(this.name)
			}
		},
		methods: {
			close() {
				this.$store.dispatch("modals/close", this.name)
			}
		},
		beforeDestroy() {
			if (this.isOpen) this.close()
		}
	}
</script>

<style scoped>
	*:focus {
		outline: none;
	}
	.modal-overlay {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		transition: opacity 0.3s ease-in-out;
		width: 100%;
	}
	.modal-overlay--active {
		background-color: rgba(0, 0, 0, 0.4);
	}
	.modal-wrapper {
		background-color: #fff;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
		padding: 20px;
		transition: all 0.3s ease;
		/* Always leave a little space above */
		max-height: 80%;
		/* Size up to max width */
		max-width: 300px;
		width: 100%;
		/* Center */
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 20000;
	}
	.modal-wrapper button {
		float: right;
	}
</style>