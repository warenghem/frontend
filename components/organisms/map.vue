<template>
  <div class="h-100">
    <div class="h-100 pa-0">
      <l-map
        style="width: 100%"
        class="treemap h-100"
        :zoom="zoom"
        :center="center"
        :options="{zoomControl: false,attributionControl: false,scrollWheelZoom: false,tap: false,boxZoom: false, doubleClickZoom: false, touchZoom: false, dragging: false, draggable: false}"
      >
        <l-tile-layer
          :url="url"
        />
        <l-marker :lat-lng="[marker.latitude, marker.longitude]"
                  @click="innerClick(marker.modal)"
                  v-for="(marker,m_idx) in markers"
                  :key="'map_'+m_idx">
          <l-icon
            :icon-size="[50, 50]"
            :icon-url="marker.image"
            className="mapClass hand"
                        icon-class="e"
          >
            <div class="card">
              <div class="card-header name hand d-none">
               {{marker.text}}
               <div style="font-size: 16px" class="subtitlesmall d-none">En savoir plus</div>
              </div>
              <div>
                <div class="blob white rounded-circle" style="width:35px; height:35px">
                  <img :src="marker.image" alt="" width="35" height="35">
                </div>
              </div>
            </div>
          </l-icon>
        </l-marker>
      </l-map>
    </div>
    <div class="slideArea mgforest">
      <div class="card">
        <div style="height: 50px" class="d-flex justify-space-between align-center border-bottom-2">
          <div class="border-right-2 px-3 h-100 d-flex align-center" style="width: 100%">
            <treebutton class="d-none" @click="closeSlide"/>
          </div>
          <v-btn
            text
            color="black"
            @click="closeSlide"
            style="font-size: 26px"
            class="px-0 h-100"
          >
            <v-icon>{{ svgPath }}</v-icon>
          </v-btn>
        </div>
        <div class="px-3 px-sm-7 pb-3  map-modal">
          <v-row>
            <v-col cols="12" sm="6">
              <div class="para-title">{{$t('madagascar.section1.title')}}</div>
              <div class="para-subtitle">{{$t('madagascar.section1.subtitle')}}</div>
              <div class="para-img">
                <!--<ik-image
                    path="/specie-mango.jpg"
                    :lqip="{active:true, quality: 40, blur: 5}"
                    :transformation="[{quality: 65, width:420, dpr:2}]"
                    loading="lazy"
                    width="100%"
                />-->
                <img
                    data-sizes="auto"
                    data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-15,w-300,fo-bottom/specie-mango.jpg 300w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/specie-mango.jpg 380w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/specie-mango.jpg 512w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/specie-mango.jpg 683w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/specie-mango.jpg 800w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/specie-mango.jpg 960w," 
                      src="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-600,fo-bottom/specie-mango.jpg"
                    class="lazyload"
                    width="100%"
                />
              </div>
              <v-row>
                <v-col class="text-center ">
                  <div class="para-subtitle">
                    20kg
                  </div>
                  <div class="para-text">{{$t('madagascar.section1.term1')}}</div>
                </v-col>
                <v-col class="text-center">
                  <div class="para-subtitle">{{$t('madagascar.section1.term2bis')}}</div>
                  <div class="para-text">{{$t('madagascar.section1.term2')}}</div>
                </v-col>
                <v-col class="text-center ">
                  <div class="para-subtitle">2 – 10 m</div>
                  <div class="para-text">{{$t('madagascar.section1.term3')}}</div>
                </v-col>
              </v-row>
              <div class="para-subtitle-small">{{$t('madagascar.section1.paraTitle')}}</div>
              <div class="para-text" v-html="$t('madagascar.section1.paraText')">
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="para-title">{{$t('madagascar.section2.title')}}</div>
              <div class="para-subtitle">{{$t('madagascar.section2.subtitle')}}</div>
              <div class="para-img">
                <!--<ik-image
                    path="/river.png"
                    :lqip="{active:true, quality: 40, blur: 5}"
                    :transformation="[{quality: 65, width:420, dpr:2}]"
                    loading="lazy"
                    width="100%"
                />-->
                <img
                    data-sizes="auto"
                    data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-15,w-300,fo-bottom/river.png 300w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/river.png 380w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/river.png 512w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/river.png 683w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/river.png 800w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/river.png 960w," 
                      src="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-600,fo-bottom/river.png"
                    class="lazyload" 
                    width="100%"
                />
              </div>
              <div class="para-subtitle-small">{{$t('madagascar.section2.paraTitle1')}}</div>
              <div class="para-text" v-html="$t('madagascar.section2.paraText1')">
              </div>
              <div class="para-subtitle-small">{{$t('madagascar.section2.paraTitle2')}}</div>
              <div class="para-text" v-html="$t('madagascar.section2.paraText2')">
              </div>
            </v-col>
            <v-col cols="12">
              <div class="para-title">{{$t('madagascar.section3.title')}}</div>
              <a href="https://www.google.com/maps/d/edit?mid=17AwywoebWVZcltzhsfdwTKS7IC5yDtvN&usp=sharing">
                <!--<ik-image
                    path="/Capture_d_e_cran_2020-11-20_a__18.56.41.png"
                    :lqip="{active:true, quality: 40, blur: 5}"
                    :transformation="[{quality: 65, width:800, dpr:2}]"
                    loading="lazy"
                    width="100%"
                />-->
                <img
                    data-sizes="auto"
                    data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-15,w-640,fo-bottom/Capture_d_e_cran_2020-11-20_a__18.56.41.png 640w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,ar-3-5,c-maintain_ratio/Capture_d_e_cran_2020-11-20_a__18.56.41.png 768w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,c-maintain_ratio/Capture_d_e_cran_2020-11-20_a__18.56.41.png 1024w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,c-maintain_ratio/Capture_d_e_cran_2020-11-20_a__18.56.41.png 1366w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,c-maintain_ratio/Capture_d_e_cran_2020-11-20_a__18.56.41.png 1600w," 
                      src="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-1100,fo-bottom/Capture_d_e_cran_2020-11-20_a__18.56.41.png"
                    class="lazyload" 
                    width="100%"
                />
              </a>
            </v-col>
          </v-row>

        </div>
      </div>
    </div>
    <div class="slideArea indianforest">
      <div class="card">
        <div style="height: 50px" class="d-flex justify-space-between align-center border-bottom-2">
          <div class="border-right-2 px-3 h-100 d-flex align-center" style="width: 100%">
            <treebutton class="d-none" @click="closeSlide"/>
          </div>
          <v-btn
            text
            color="black"
            @click="closeSlide"
            style="font-size: 26px"
            class="px-0 h-100 rounded-0"
          >
            <v-icon>{{ svgPath }}</v-icon>
          </v-btn>
        </div>
        <div class="px-3 px-sm-7 pb-3  map-modal">
          <v-row>
            <v-col cols="12" sm="6">
              <div class="para-title">{{$t('india.section1.title')}}</div>
              <div class="para-subtitle">{{$t('india.section1.subtitle')}}</div>
              <div class="para-img">
                <!--<ik-image
                    path="/mango.jpg"
                    :lqip="{active:true, quality: 40, blur: 5}"
                    :transformation="[{quality: 65, width:420, dpr:2}]"
                    loading="lazy"
                    width="100%"
                />-->
                <img
                    data-sizes="auto"
                    data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-15,w-300,fo-bottom/mango.jpg 300w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/mango.jpg 380w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/mango.jpg 512w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/mango.jpg 683w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/mango.jpg 800w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/mango.jpg 960w," 
                      src="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-600,fo-bottom/mango.jpg"
                    class="lazyload" 
                    width="100%"
                />
              </div>
              <v-row>
                <v-col class="text-center ">
                  <div class="para-subtitle">
                    800kg
                  </div>
                  <div class="para-text">{{$t('india.section1.term1')}}</div>
                </v-col>
                <v-col class="text-center">
                  <div class="para-subtitle">{{$t('india.section1.term2bis')}}</div>
                  <div class="para-text">{{$t('india.section1.term2')}}</div>
                </v-col>
                <v-col class="text-center ">
                  <div class="para-subtitle">35–45m</div>
                  <div class="para-text">{{$t('india.section1.term3')}}</div>
                </v-col>
              </v-row>
              <div class="para-subtitle-small">{{$t('india.section1.paraTitle')}}</div>
              <div class="para-text" v-html="$t('india.section1.paraText')">
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <div class="para-title">{{$t('india.section2.title')}}</div>
              <div class="para-subtitle">{{$t('india.section2.subtitle')}}</div>
              <div class="para-img">
                <!--<ik-image
                    path="/tiger.jpg"
                    :lqip="{active:true, quality: 40, blur: 5}"
                    :transformation="[{quality: 65, width:420, dpr:2}]"
                    loading="lazy"
                    width="100%"
                />-->
                <img
                    data-sizes="auto"
                    data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-15,w-300,fo-bottom/tiger.jpg 300w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/tiger.jpg 380w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/tiger.jpg 512w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/tiger.jpg 683w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/tiger.jpg 800w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/tiger.jpg 960w," 
                      src="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-600,fo-bottom/tiger.jpg"
                    class="lazyload" 
                    width="100%"
                />
              </div>
              <div class="para-subtitle-small">{{$t('india.section2.paraTitle1')}}</div>
              <div class="para-text" v-html="$t('india.section2.paraText1')">
              </div>
              <div class="para-subtitle-small">{{$t('india.section2.paraTitle2')}}</div>
              <div class="para-text" v-html="$t('india.section2.paraText2')">
              </div>
            </v-col>
            <v-col cols="12">
              <div class="para-title">{{$t('india.section3.title')}}</div>
              <a href="https://www.google.com/maps/d/edit?mid=1bayTFmMWGfd9RN9Yia5q4Vt-lOcOEkbl&usp=sharing">
                <!--<ik-image
                    path="/Capture_d_e_cran_2020-11-20_a__18.57.19.png"
                    :lqip="{active:true, quality: 40, blur: 5}"
                    :transformation="[{quality: 65, width:800, dpr:2}]"
                    loading="lazy"
                    width="100%"
                />-->
                <img
                    data-sizes="auto"
                    data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-15,w-640,fo-bottom/Capture_d_e_cran_2020-11-20_a__18.57.19.png 640w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-bottom,c-maintain_ratio/Capture_d_e_cran_2020-11-20_a__18.57.19.png 768w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-bottom,c-maintain_ratio/Capture_d_e_cran_2020-11-20_a__18.57.19.png 1024w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-bottom,c-maintain_ratio/Capture_d_e_cran_2020-11-20_a__18.57.19.png 1366w,
                      https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-bottom,c-maintain_ratio/Capture_d_e_cran_2020-11-20_a__18.57.19.png 1600w," 
                      src="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-1100,fo-bottom/Capture_d_e_cran_2020-11-20_a__18.57.19.png"
                    class="lazyload" 
                    width="100%"
                />
              </a>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import L from 'leaflet';
    import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';
    import 'leaflet/dist/leaflet.css';
    import { mdiClose } from '@mdi/js';
    export default {
        name: 'leaflet-map',
        components: {
              LMap,
              LTileLayer,
              LMarker,
              LIcon,
        },
        data() {
            return {
                svgPath: mdiClose,
                zoom: 3,
                center: [5, 66],
                url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
                showParagraph: false,
                showMap: true,
                markers: [
                    {
                        id: "Trees_for_Tiger",
                        text: "Trees for Tiger",
                        latitude: 22.003975,
                        longitude: 86.06648,
                        image: "https://ik.imagekit.io/g1noocuou2/tr:q-80,w-85,fo-auto,r-max,dpr-2/Capture_d_e_cran_2020-11-20_a__18.57.19.png",
                        modal: ".indianforest",
                    },
                    {
                        id: "Eden_Projet",
                        text: "Eden Project",
                        latitude: -16.270975,
                        longitude: 44.445852,
                        image: "https://ik.imagekit.io/g1noocuou2/tr:q-80,w-85,fo-auto,r-max,dpr-2/Capture_d_e_cran_2020-11-20_a__18.56.41.png",
                        modal: ".mgforest",
                    },
                ]

            };
        },
        methods: {
            zoomUpdate(zoom) {
                this.currentZoom = zoom;
            },
            centerUpdate(center) {
                this.currentCenter = center;
            },
            showLongText() {
                this.showParagraph = !this.showParagraph;
            },
            closeSlide() {
                document.querySelector('.indianforest').classList.remove('active');
                document.querySelector('.mgforest').classList.remove('active');
                document.getElementById('blackContent').classList.remove('overlay');
                const el = document.body;
                el.classList.remove('modal-open');
                document.documentElement.style.overflowY = 'auto'
            },
            closeSlideUp() {
                document.querySelector('.indianforest').classList.remove('active');
                document.querySelector('.mgforest').classList.remove('active');
                document.getElementById('blackContent').classList.remove('overlay');
                const el = document.body;
                el.classList.remove('modal-open');
                document.documentElement.style.overflowY = 'auto';
                // this.$scrollToElement('formSection')
            },
            innerClick(modalClass) {
                document.querySelector(modalClass).classList.add('active');
                document.getElementById('blackContent').classList.add('overlay');
                const el = document.body;
                el.classList.add("modal-open");
                document.documentElement.style.overflowY = 'hidden'
            },
        },
    }
/*
<i18n locale="fr" lang="json5">
{
  "informations": "Cliquez sur les localisations pour plus d'informations",
  "madagascar": {
      "section1": {
          "title": "Fôret",
          "subtitle": "Mangrove noire",
          "paraTitle": "Faune et Flore locale.",
          "paraText": "<p>Madagascar dispose de plus de 200 000 espèces de plantes et d’animaux qui n’existent nulle part ailleurs dans le monde. 90% des forêts ont été détruites, déplaçant des espèces animales entières et les Malgaches.</p>",
          "term1": "Compensation CO2",
          "term2": "Durée de vie",
          "term2bis": "25ans",
          "term3": "Taille",
      },
      "section2": {
          "title": "Projet",
          "subtitle": "Projet Paradis, Madagascar",
          "paraTitle1": "Incroyable projet. Réussite totale.",
          "paraText1": "<p>Eden Reforestation Projects a lancé ce programme en 2007 suite à la perte critique de fôrets.</p><p>16 millions de mangroves ont été plantés. Des forêts saines commencent à émerger et tous les effets négatifs de la déforestation commencent à disparaître.</p>",
          "paraTitle2": "Une communauté locale active. A ne pas oublier.",
          "paraText2": "<p>Les Vilamatsa avaient hâte de faire partie de cette initiative de reboisement en raison du succès d’une plantation à proximité.</p><p>Cela leur donne un revenu décent afin qu’ils puissent à nouveau subvenir aux besoins de leur famille.</p>"
      },
      "section3": {
          "title": "Lien Google Map."
      }
  },
  "india": {
      "section1": {
          "title": "Fôret",
          "subtitle": "Manguiers",
          "paraTitle": "Faune et Flore locale.",
          "paraText": "<p>Le parc national de Similipal est le 7e plus grand parc national d’Inde (2 750 km2), et fait partie du Réseau mondial des réserves de biosphère de l’UNESCO depuis 2009. Il abrite le tigre du Bengale, l’éléphant d’Asie, le gaur et le chausingha. Ainsi que les plus belles chutes d’eau comme Joranda et Barehipani Falls.</p>",
          "term1": "Compensation CO2",
          "term2": "Durée de vie",
          "term2bis": "100ans",
          "term3": "Taille",
      },
      "section2": {
          "title": "Projet",
          "subtitle": "Des arbres pour les tigres, Inde",
          "paraTitle1": "Le livre de la jungle 2.",
          "paraText1": "<p>Le projet vise 50 000 arbres en bordure du parc national de Similipal pour enrichir la fôret vierge locale, en particulier pour les tigres du Bengale.</p>",
          "paraTitle2": "Et si nous passions les aider ?",
          "paraText2": "<p>La région du projet est habitée par une variété de communautés tribales (Bhumija, Gondas, Kolha… Environ 4 093 jours de travail seront créés pour eux.</p><p>L’aéroport le plus proche est celui de Biju Patnaik, situé de 200 km du site. La ville la plus proche est Jamshedpur à 105 km.</p>"
      },
      "section3": {
          "title": "Lien Google Map."
      }
  }
}
</i18n>
*/
</script>
<i18n>
{
	"fr": {
		"india": {
			"section1": {
				"paraText": "<p>Le parc national de Similipal est le 7e plus grand parc national d’Inde (2 750 km2), et fait partie du Réseau mondial des réserves de biosphère de l’UNESCO depuis 2009. Il abrite le tigre du Bengale, l’éléphant d’Asie, le gaur et le chausingha. Ainsi que les plus belles chutes d’eau comme Joranda et Barehipani Falls.</p>",
				"paraTitle": "Faune et Flore locale.",
				"subtitle": "Manguiers",
				"term1": "Compensation CO2",
				"term2": "Durée de vie",
				"term2bis": "100ans",
				"term3": "Taille",
				"title": "Fôret"
			},
			"section2": {
				"paraText1": "<p>Le projet vise 50 000 arbres en bordure du parc national de Similipal pour enrichir la fôret vierge locale, en particulier pour les tigres du Bengale.</p>",
				"paraText2": "<p>La région du projet est habitée par une variété de communautés tribales (Bhumija, Gondas, Kolha… Environ 4 093 jours de travail seront créés pour eux.</p><p>L’aéroport le plus proche est celui de Biju Patnaik, situé de 200 km du site. La ville la plus proche est Jamshedpur à 105 km.</p>",
				"paraTitle1": "Le livre de la jungle 2.",
				"paraTitle2": "Et si nous passions les aider ?",
				"subtitle": "Des arbres pour les tigres, Inde",
				"title": "Projet"
			},
			"section3": {
				"title": "Lien Google Map."
			}
		},
		"madagascar": {
			"section1": {
				"paraText": "<p>Madagascar dispose de plus de 200 000 espèces de plantes et d’animaux qui n’existent nulle part ailleurs dans le monde. 90% des forêts ont été détruites, déplaçant des espèces animales entières et les Malgaches.</p>",
				"paraTitle": "Faune et Flore locale.",
				"subtitle": "Mangrove noire",
				"term1": "Compensation CO2",
				"term2": "Durée de vie",
				"term2bis": "25ans",
				"term3": "Taille",
				"title": "Fôret"
			},
			"section2": {
				"paraText1": "<p>Eden Reforestation Projects a lancé ce programme en 2007 suite à la perte critique de fôrets.</p><p>16 millions de mangroves ont été plantés. Des forêts saines commencent à émerger et tous les effets négatifs de la déforestation commencent à disparaître.</p>",
				"paraText2": "<p>Les Vilamatsa avaient hâte de faire partie de cette initiative de reboisement en raison du succès d’une plantation à proximité.</p><p>Cela leur donne un revenu décent afin qu’ils puissent à nouveau subvenir aux besoins de leur famille.</p>",
				"paraTitle1": "Incroyable projet. Réussite totale.",
				"paraTitle2": "Une communauté locale active. A ne pas oublier.",
				"subtitle": "Projet Paradis, Madagascar",
				"title": "Projet"
			},
			"section3": {
				"title": "Lien Google Map."
			}
		}
	},
	"en": {
		"india": {
			"section1": {
				"paraText": "<p>Similipal National Park is the 7th largest national park in India (2,750 km2), and has been part of the UNESCO World Network of Biosphere Reserves since 2009. It is home to the Bengal tiger, the Asian elephant, the gaur and the chausingha. As well as the most beautiful waterfalls like Joranda and Barehipani Falls.</p>",
				"paraTitle": "Local flora and fauna.",
				"subtitle": "Mango trees",
				"term1": "CO2 compensation",
				"term2": "Lifetime",
				"term2bis": "100 years",
				"term3": "Cut",
				"title": "Forest"
			},
			"section2": {
				"paraText1": "<p>The project targets 50,000 trees on the edge of the Similipal National Park to enrich the local virgin forest, in particular for the Bengal tigers.</p>",
				"paraText2": "<p>The project area is inhabited by a variety of tribal communities (Bhumija, Gondas, Kolha… Approximately 4,093 working days will be created for them.</p><p>The nearest airport is Biju Patnaik , located 200 km from the site. The nearest town is Jamshedpur at 105 km.</p>",
				"paraTitle1": "The Jungle Book 2.",
				"paraTitle2": "How about we drop by to help them?",
				"subtitle": "Trees for tigers, India",
				"title": "Project"
			},
			"section3": {
				"title": "Google Map link."
			}
		},
		"madagascar": {
			"section1": {
				"paraText": "<p>Madagascar has over 200,000 species of plants and animals that are not found anywhere else in the world. 90% of the forests have been destroyed, displacing entire animal species and Malagasy people.</p>",
				"paraTitle": "Local flora and fauna.",
				"subtitle": "Black mangrove",
				"term1": "CO2 compensation",
				"term2": "Lifetime",
				"term2bis": "25 years",
				"term3": "Cut",
				"title": "Forest"
			},
			"section2": {
				"paraText1": "<p>Eden Reforestation Projects launched this program in 2007 following the critical loss of forests.</p><p>16 million mangroves have been planted. Healthy forests are starting to emerge and all the negative effects of deforestation begin to disappear.</p>",
				"paraText2": "<p>The Vilamatsa were eager to be part of this reforestation initiative due to the success of a nearby plantation.</p><p>This gives them a decent income so that they can support their families again.</p>",
				"paraTitle1": "Incredible project. Total success.",
				"paraTitle2": "An active local community. To remember.",
				"subtitle": "Paradis project, Madagascar",
				"title": "Project"
			},
			"section3": {
				"title": "Google Map link."
			}
		}
	}
}
</i18n>
<style lang="scss" scoped>
.leaflet-container {
    font-family: "teradeli-book";
}
  .treemap {
    z-index: 1;
    }

  .slideArea {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    z-index: 100000 !important;
    background: white;
    max-height: 100%;
    overflow-y: scroll;
    transition: right 0.4s;

    .card-header {
      position: fixed;
      z-index: 1;
      background: white;
    }

    @media only screen and (min-width: 1291px) {
      width: 50vw !important;
      right: -50vw !important;
      .card-header {
        width: 49vw !important;
      }
    }

    @media only screen and (max-width: 1290px) {
      width: 70vw !important;
      right: -70vw;
      .card-header {
        width: 69vw !important;
      }
    }
    @media only screen and (max-width: 48em) {
      width: 100vw !important;
      right: -100vw;
      .card-header {
        width: 99vw !important;
      }
    }

    &.active {
      right: 0 !important;
      visibility: visible !important;
    }

  }

  .map-modal {
    .para-title {
      font-weight: 700;
      margin-bottom: 5px;
      color: #888;
      font-size: 16px;
    }

    .para-subtitle {
      font-size: 18px;
      font-family: 'teradeli-medium', sans-serif;
      line-height: 1rem;
      color: #153038;
      margin: 0;
    }

    .para-subtitle-small {
      font-size: 15px;
      font-family: 'teradeli-medium', sans-serif;
      line-height: 1rem;
      color: #153038;
      margin: 0;
    }

    .para-img {
      padding-bottom: 1rem;
      padding-top: 1rem;
    }

    .para-text {
      color: #888;
      font-size: 14px;
    }

  }
  .leaflet-marker-icon img {
    border-radius: 50%;
  }
  .blobs-container {
    display: flex;
  }
  .blob.white {
    background: white;
    box-shadow: 0 0 0 0 rgba(0, 129, 167,0.8);
    animation: pulse-white 2s infinite;
  }
  @keyframes pulse-white {
    0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(0, 129, 167, 0.6);
    }

    70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 129, 167, 0);
    }

    100% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(0, 129, 167, 0);
    }
  }
</style>
