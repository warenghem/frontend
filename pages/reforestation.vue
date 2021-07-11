<template>
  <div>
	<v-toolbar-bar class="menubar d-flex pa-0 filter-bar w-100">
		<AtomsBtnBack class="border-bottom-2"/>
		<div class="px-5 d-flex border-bottom-2 bg-white w-100">
			<div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
				Reforestation
			</div>
		</div>
		<v-spacer></v-spacer>
	</v-toolbar-bar>
    <article class="wa-magazine">
      <div class="wa-smart-picture wa-panoramic-picture square-ratio">
        <picture class="gradientoverlay">
          <source media="screen and (min-width: 64em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-auto,c-maintain_ratio/madagascar_river.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-auto,c-maintain_ratio/madagascar_river.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-auto,c-maintain_ratio/madagascar_river.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-auto,c-maintain_ratio/madagascar_river.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-auto,c-maintain_ratio/madagascar_river.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-auto,c-maintain_ratio/madagascar_river.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-auto,c-maintain_ratio/madagascar_river.jpg 2500w,'" 
          >
          <source media="screen and (min-width: 48em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-640,fo-auto,c-maintain_ratio/madagascar_river.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-768,fo-auto,c-maintain_ratio/madagascar_river.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1024,fo-auto,c-maintain_ratio/madagascar_river.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1366,fo-auto,c-maintain_ratio/madagascar_river.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1600,fo-auto,c-maintain_ratio/madagascar_river.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1920,fo-auto,c-maintain_ratio/madagascar_river.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-2500,fo-auto,c-maintain_ratio/madagascar_river.jpg 2500w,'" 
          >
          <source
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-640,fo-auto,c-maintain_ratio/madagascar_river.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-768,fo-auto,c-maintain_ratio/madagascar_river.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1024,fo-auto,c-maintain_ratio/madagascar_river.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1366,fo-auto,c-maintain_ratio/madagascar_river.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1600,fo-auto,c-maintain_ratio/madagascar_river.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1920,fo-auto,c-maintain_ratio/madagascar_river.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-2500,fo-auto,c-maintain_ratio/madagascar_river.jpg 2500w,'" 
          >
          <img class="lazyload mediabox-img" 
            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/madagascar_river.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/madagascar_river.jpg 2x'" 
            data-sizes="auto" />
        </picture>
      </div>
    </article>
	<div class="pvw">
		<h2 class="home-title px-0 pb-10">{{$t('title1')}}</h2>
		<!--<h3 class="text-center home-subtitle px-0 pb-10">{{$t('subtitle1')}}</h3>-->
		<div style="max-width:1000px" class="text-center ma-auto pb-16" v-html="$t('text1')"></div>
		<h2 class="home-title px-0 pb-10">{{$t('title3')}}</h2>
		<!--<h3 class="text-center home-subtitle px-0 pb-10">{{$t('subtitle3')}}</h3>-->
		<MoleculesTreeData :treeData="treeData"/>
		<div style="height:600px!important" class="treemapcontainer">
			<client-only>
				<LazyOrganismsMap class="rounded-xl"/>
			</client-only>
		</div>
		<LayoutCustomerServicesLayout class="pt-16"/>
	</div>
  </div>
</template>

<script>
    export default {
        name: 'studios',
        data() {
            return {
                tab: "subscribe",
                grid: [
                    "div2 blueoverlay",
                    "div3"
                ],
				origins: this.$t('origins'),
				originicon: [
					"/Environments/Narrative.png",
					"/Environments/translucid_" + this.$i18n.localeProperties.language + ".png",
					"/Environments/eternal_" + this.$i18n.localeProperties.language + ".png"
                ],
                images: [
                    "/Environments/idea.webp",
                    "/Logos/logo_picture.png",
                    "/Environments/lineapelle.jpeg",
                    "/Products/48H_face.png",
                    "/Environments/website.png",
                    "/Logos/dionysos_brand.png",
					"/Environments/Techsolo.png",
                    "/madagascar_river.jpg",
                    "/Products/bag-blackblue-deepest.png",
					"/Environments/romans_chaussure.jpeg",
                ],
                classid: [
                    "dot1",
                    "dot2",
                    "dot3",
                    "dot4",
                    "dot5",
                    "dot6",
                ]
            }
        },
        head() {
            return {
            }
        }
    }

</script>

<i18n>
{
	"en": {
		"calendarSection": {
			"steps": [
				{
					"subtitle": "",
					"tag": "September 2019",
					"title": "Birth of the idea. Research & Development of materials and technologies"
				},
				{
					"subtitle": "",
					"tag": "January 2020",
					"title": "Creation of Warenghem Studios"
				},
				{
					"subtitle": "",
					"tag": "March 2020",
					"title": "Lineapelle fair in Milan"
				},
				{
					"subtitle": "",
					"tag": "April 2020",
					"title": "Designs from the first collection: Citadins Sauvages"
				},
				{
					"subtitle": "",
					"tag": "June 2020",
					"title": "In-house creation of a website in the form of a web application"
				},
				{
					"subtitle": "",
					"tag": "July 2020",
					"title": "Creation of the Dionysos brand"
				},
				{
					"subtitle": "",
					"tag": "July 2020",
					"title": "Launch of reforestation projects in Madagascar and India"
				},
				{
					"subtitle": "",
					"tag": "November 2020",
					"title": "Creation of Origin traceability technology"
				},
				{
					"subtitle": "",
					"tag": "February 2021",
					"title": "Prototyping of the first products"
				},
				{
					"subtitle": "",
					"tag": "February 2021",
					"title": "Selection of our project by the Auvergne-Rhône-Alpes region for the development of shoes in France in Romans-sur-Isère (capital of footwear)"
				}
			]
		},
		"subtitle1": "The genesis",
		"subtitle3": "Our history. Live.",
		"text1": "<div><p><span>In the world of fashion and design, there is a striking paradox: They exist only for their embodiment of outer beauty. We pay little attention to the inner beauty of an object, the purity and the thousands of details that constitute its history and destiny escape us. However, like every man, he gives off a certain charisma depending on what he represents, the conditions in which he was made, and the materials that compose it.</span></p><p><span><br>This is historically due to our Anthropocentric vision, where the value of living things and ecosystems is measured according to the benefit that Man can derive from them. Yet we are an animal species among others, but we have two super powers: the incredible ability to develop complex systems, and the ability to make decisions based on our thinking and not our instinct.<br>We realize today that we are not detached and independent elements, our own survival depends on the health of the planet's ecosystems. Relearning to see nature as a system of collaborations is an ambitious change of mentality but oh so beneficial for the future ...</span></p><p><span><br>To respond to this problem, in 2019 , Warenghem Studios was born. Our goal: to develop objects and clothes that are perfect in all their facets, to exploit the formidable virtues hidden in each plant species, and not to touch animals since we have other alternatives. It may sound simple said like that! But we and all the elements around us are connected. It is not enough to use organic cotton to claim an ecological attitude.<br>Every day, all our teams work to make this crazy ambition more concrete. Step by step, we develop radical innovations and use technology when it brings real added value. </span></p><p><span><br>The Warenghem DNA is strongly inspired by the progressivism of the Enlightenment and the complexity of Edgar Morin. Focused on an excessive attention to detail and the interdependence of natural elements. The name Warenghem also refers to a man passionate about people and their relationship to nature. Having spent his whole life in research and progress, he was one of those Men who, through their intellectual, cultural and scientific commitment, have contributed to making the world progress at their level to make it better.</span></p></div><br>We too will look for ...",
		"title1": "A name, a story, values",
		"title3": "Discover our route, and our news which will be displayed live."
	},
	"fr": {
		"calendarSection": {
			"steps": [
				{
					"subtitle": "",
					"tag": "Septembre 2019",
					"title": "Naissance de l'idée. Recherche & Developpement matières et technologies"
				},
				{
					"subtitle": "",
					"tag": "Janvier 2020",
					"title": "Création de Warenghem Studios"
				},
				{
					"subtitle": "",
					"tag": "Mars 2020",
					"title": "Salon Lineapelle à Milan"
				},
				{
					"subtitle": "",
					"tag": "Avril 2020",
					"title": "Dessins de la première collection : Citadins Sauvages"
				},
				{
					"subtitle": "",
					"tag": "Juin 2020",
					"title": "Création d'un site internet sous forme d'application web"
				},
				{
					"subtitle": "",
					"tag": "Juillet 2020",
					"title": "Création de la marque Dionysos"
				},
				{
					"subtitle": "",
					"tag": "Juillet 2020",
					"title": "Lancement de nos projets de reforestation à Madagascar et en Inde"
				},
				{
					"subtitle": "",
					"tag": "Novembre 2020",
					"title": "Création de la technologie de tracabilité Origin"
				},
				{
					"subtitle": "",
					"tag": "Février 2021",
					"title": "Prototypage des premiers produits"
				},
				{
					"subtitle": "",
					"tag": "Février 2021",
					"title": "Sélection de notre projet par la région Auvergne-Rhône-Alpes pour le développement de chaussures en France à Romans-sur-Isère (capitale de la chaussure)"
				}
			]
		},
		"subtitle1": "La genèse",
		"subtitle3": "Notre histoire",
		"text1": "<div><p><span>Dans l’univers de la mode et du design, il existe un paradoxe frappant : nous ne portons que peu d'attention sur la beauté intérieure d'un objet, la pureté et les milliers de détails qui constitue son histoire et son destin nous échappent. Pourtant, comme chaque Homme, il dégage un certain charisme en fonction de ce qu'il représente, des conditions dans lesquels il a été fabriqué, et des matériaux naturels qui le compose.</span></p><p><span><br>Pour répondre à cette problématique, Warenghem Studios est né en 2019. Notre objectif : exploiter les formidables et myterieuses vertus cachées dans chaque espèce végétale ; développer des objets et vêtements fabriqués en France au design minimaliste et travaillé ; et ne pas utiliser de matières animales puisque nous avons d'autres alternatives. Focalisé sur un souci excessif du détail et de l'interdépendance des éléments naturels.</span></p><p><span><br>Nous réalisons aujourd'hui que nous ne sommes pas des éléments détachés, notre survie dépend de la santé des écosystèmes de la planète avec qui nous devons agir en collaboration. Nous sommes une espèce animale parmi d'autres, mais nous disposons de deux pouvoirs : l'incroyable capacité à élaborer des systèmes complexes, et la possibilité de prendre des décisions suivant notre réflexion et non notre instinct.<br>Chaque jour, toutes nos équipes œuvrent pour rendre cette folle ambition plus concrète. Étape par étape, nous développons des innovations et utilisons la technologie lorsqu'elle apporte une réelle plus-value. Notre application ORIGIN vous permet par exemple de découvrir la beauté intérieure de votre article.</span></p><p><span><br>Le nom Warenghem fait d’ailleurs référence à un homme passionné par l'humain et son rapport à la nature. Ayant passé toute sa vie à chercher et à progresser, il faisait partie de ces Hommes qui, par leur engagement intellectuel, culturel et scientifique, ont contribué à faire progresser le monde à leur niveau pour le rendre meilleur.</span></p></div>",
		"title1": "Un nom, une histoire, des valeurs",
		"title3": "Découvrez notre parcours, et nos actualités."
	}
}
</i18n>

<style scoped lang="scss">

::v-deep .treemap {
    border-radius: 20px !important;
}

</style>