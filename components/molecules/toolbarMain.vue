<template>
	<v-toolbar dense class="menubar pa-0 w-100 elevation-0">
		<AtomsBtnBack class="h-100"/>
		<div class="px-5 d-flex border-bottom-2 w-100 h-100">
			<div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
			    {{title}}
			</div>
            <slot name="title"></slot>
		</div>
		<v-spacer></v-spacer>
        <slot name="content"></slot>
	</v-toolbar>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        }
    }
</script>