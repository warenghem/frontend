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
  </v-app>
</template>
