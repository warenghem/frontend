<template>
  <v-app>
    <div>
      <slot name="header">
        <MainToolbar/>
      </slot>
      <slot name="content">
        <nuxt/>
      </slot>
      <Footer/>
    </div>
    <LazyPlantForm v-if="$store.state.plantModal" />
  </v-app>
</template>