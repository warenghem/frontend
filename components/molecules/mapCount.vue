<template>
  <v-row justify="center" class="treeMapHeader pb-5 pt-10 text-center position-absolute w-100 ma-0">
    <div v-for="(count, index) in counts" :key="index" class="px-3 "><div class="text-h5 systemYellow--text">{{ count.number }}</div><div class="text-caption">{{ count.text }}</div></div>
  </v-row>
</template>

<script>
export default {
    props: {
        counts: {
            type: Array,
            default: () => {
            }
        }
    },
}
</script>