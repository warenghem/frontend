<template>
  <vue-typer
    :text="text"
    :repeat='Infinity'
    :shuffle='true'
    initial-action='typing'
    :pre-type-delay='70'
    :type-delay='70'
    :pre-erase-delay='1000'
    :erase-delay='70'
    erase-style='backspace'
    :erase-on-complete='false'
    caret-animation='blink'
  >
  </vue-typer>
</template>

<script>
	import { VueTyper } from 'vue-typer'
  export default {
    name: 'typewriter',
    components: {
      VueTyper
    },
  }
</script>
