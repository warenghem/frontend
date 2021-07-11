<template>
  <v-theme-provider light>
    <v-footer
      app
      padless
      absolute
    >
      <v-card
        flat
        tile
        class="text-center w-100 pt-5 px-3 px-sm-15"
      >
        <v-card-title class="px-0 pb-0 d-block d-md-flex">
          <div class="d-block d-md-flex svglogogrey">
            <AtomsLogoMain class="logoGrey" />
            <!--<v-breadcrumbs class="justify-center" style="margin-bottom:5px" dark :items="crumbs">
              <template v-slot:item="{ item }">
                <v-breadcrumbs-item
                  nuxt
                  ripple
                  :disabled="item.disabled"
                >
                  <a :href="item.to" class="white--text">
                    {{ item.title }}
                  </a>
                </v-breadcrumbs-item>
              </template>
              <template v-slot:divider>
                <v-icon small>{{ svgPath3 }}</v-icon>
              </template>
            </v-breadcrumbs>-->
          </div>
          <v-spacer></v-spacer>
           <div class="d-block d-md-flex">
            <MoleculesBtnSocials />
           </div>
        </v-card-title>
        <v-row
          justify="center"
          no-gutters
          class="mb-2"
        >
          <v-btn
            text
            class="teradeli-medium"
            rounded
            @click="$store.state.newsletterModal=true"
            style="letter-spacing:inherit!important;text-transform: inherit;color:#767676!important"
          >
            Newsletter
          </v-btn>
          <v-btn
            v-for="(link,l_idx) in $store.state.link.footerlinks"
            class="font-weight-bold"
            text
            rounded
            :key="'link_'+l_idx"
            :to="localePath('/')+link.url" nuxt
            style="letter-spacing:inherit!important;text-transform: inherit;color:#767676!important"
          >
            {{$t(link.name)}} 
          </v-btn>
        </v-row>
        <LayoutReferences/>
        <v-divider></v-divider>
        <v-card-text class="greytext">
          © {{ new Date().getFullYear() }} — Warenghem
        </v-card-text>
      </v-card>
    </v-footer>
  </v-theme-provider>
</template>