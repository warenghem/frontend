<template>
  <div>{{ $n(price, 'currency') }}</div>
</template>

<script>
    export default {
        name: 'price',
        props: {
            price: {
                type: String,
                default: ''
            }
        }
    }
</script>
