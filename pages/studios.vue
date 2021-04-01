<template>
  <div class="bgcard">
	<v-toolbar dense class="menubar pa-0 w-100 elevation-0">
		<Backbutton class="border-bottom-2 h-100"/>
		<div class="px-5 d-flex border-bottom-2 bg-white w-100 h-100">
			<div class="teradeli-medium appbartitle text-uppercase d-inline-flex flex-column justify-center one-line">
				Warenghem Studios
			</div>
		</div>
		<v-spacer></v-spacer>
	</v-toolbar>
    <article class="wa-magazine d-none">
      <div class="wa-smart-picture wa-panoramic-picture square-ratio skeletton">
        <picture class="gradientoverlay">
          <source media="screen and (min-width: 64em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-640,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-768,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1024,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1366,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1600,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1920,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-2500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
          >
          <source media="screen and (min-width: 48em)"
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-640,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-768,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1024,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1366,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1600,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-1920,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-4-3,w-2500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
          >
          <source
            :data-srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-640,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 640w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-768,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 768w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1024,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1024w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1366,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1366w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1600,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1600w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-1920,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1920w,https://ik.imagekit.io/g1noocuou2/tr:q-70,ar-3-5,w-2500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2500w,'" 
          >
          <img class="lazyload mediabox-img" 
            :data-src="'https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 1x,https://ik.imagekit.io/g1noocuou2/tr:q-70,dpr-2,w-1500,fo-auto,c-maintain_ratio/Environments/logo.155.jpg 2x'" 
            data-sizes="auto" />
        </picture>
      </div>
    </article>
	<div class="pvw ma-auto">
		
		<!--<h3 class="text-center home-subtitle px-0 pb-10">{{$t('subtitle1')}}</h3>-->
		<v-container class="rounded-xl">
			<v-row class="ma-auto pa-0 mb-16 bg-white">
				<v-col cols="12" md="5" class="pa-0">
					<div class="img-fluid position-relative h-100">
						<img
							data-sizes="auto"
							data-srcset="https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,fo-bottom,c-maintain_ratio/Environments/logo.155.jpg 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-380,fo-bottom,c-maintain_ratio/Environments/logo.155.jpg 380w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-512,fo-bottom,c-maintain_ratio/Environments/logo.155.jpg 512w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-683,fo-bottom,c-maintain_ratio/Environments/logo.155.jpg 683w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-800,fo-bottom,c-maintain_ratio/Environments/logo.155.jpg 800w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-960,fo-bottom,c-maintain_ratio/Environments/logo.155.jpg 960w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-1500,fo-bottom,c-maintain_ratio/Environments/logo.155.jpg 1500w" 
							src="https://ik.imagekit.io/g1noocuou2/tr:q-15,bl-10,w-300,fo-bottom/Environments/logo.155.jpg" 
							class="lazyload cover bg-white" 
						/>
					</div>
				</v-col>
				<v-col cols="12" md="7" class="bg-white pvw rounded-xl">
					<h2 class="page-title2 text-center px-0 pb-10">{{$t('title1')}}</h2>
					<v-card style="max-width:1000px" class="text-center ma-auto align-center justify-center" v-html="$t('text1')"></v-card>
				</v-col>
			</v-row>
		</v-container>
		<v-row class="text-center pb-16 ma-auto" style="max-width: 1400px;">
			<v-col class="px-5" cols="12" md="4">
				<div class="page-title3">{{$t('col1title')}}</div>
				<div class="" v-html="$t('col1')"></div>
			</v-col>
			<v-col class="px-5" cols="12" md="4">
				<div class="page-title3">{{$t('col2title')}}</div>
				<div class="" v-html="$t('col2')"></div>
			</v-col>
			<v-col class="px-5" cols="12" md="4">
				<div class="page-title3">{{$t('col3title')}}</div>
				<div class="" v-html="$t('col3')"></div>
			</v-col>
		</v-row>
		<div style="max-width:1000px" class="text-center rounded-xl bg-white pvw ma-auto mb-16" v-html="$t('text2')"></div>
		<h2 class="page-title2 text-center px-0 pb-10">{{$t('title3')}}</h2>
		<!--<h3 class="text-center home-subtitle px-0 pb-10">{{$t('subtitle3')}}</h3>-->
		<v-container class="timeline-container rounded-xl pt-3">
			<v-timeline class="pt-0" align-top :dense="$vuetify.breakpoint.smAndDown">
				<v-timeline-item
						fill-dot
						v-for="(item,i) in $t('calendarSection.steps')"
						:key="'time_'+i"
						class="my-10"
						:class="classid[i]"
						large
				>
					<template v-slot:icon>
						<div data-aos="zoom-in" class="mediabox dot rounded-circle">
							<picture>
								<img :srcset="'https://ik.imagekit.io/g1noocuou2/tr:q-70,w-300,r-max'+ images[i] + ' 300w,https://ik.imagekit.io/g1noocuou2/tr:q-70,w-600,r-max'+ images[i] + ' 300w'" alt="timeline-icon" class="mediabox-img bg-white rounded-circle position-relative">
							</picture>
						</div>
					</template>
					<v-card
							color="white"
							class="pa-4 rounded-xl text-left" data-aos="fadeup"
					>
						<v-card-subtitle class="pb-3">{{item.tag}}</v-card-subtitle>
						<h4 class="page-subtitle2 teradeli-medium lbbgradienttext pb-3">{{item.title}}</h4>
						<div class="item-details" v-html="item.subtitle">
						</div>
					</v-card>
				</v-timeline-item>
			</v-timeline>
		</v-container>
		<StudioSection class="pt-16 bg-white"/>
		<CustomerServicesLayout class="pt-16"/>
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
				}
			]
		},
		"subtitle1": "The genesis",
		"subtitle3": "Our history. Live.",
		"text1": "<div><p><span>In the world of fashion and design, there is a striking paradox: They exist only for their embodiment of outer beauty. We pay little attention to the inner beauty of an object, the purity and the thousands of details that constitute its history and destiny escape us. However, like every man, he gives off a certain charisma depending on what he represents, the conditions in which he was made, and the materials that compose it.</span></p><p><span><br>This is historically due to our Anthropocentric vision, where the value of living things and ecosystems is measured according to the benefit that Man can derive from them. Yet we are an animal species among others, but we have two super powers: the incredible ability to develop complex systems, and the ability to make decisions based on our thinking and not our instinct.<br>We realize today that we are not detached and independent elements, our own survival depends on the health of the planet's ecosystems. Relearning to see nature as a system of collaborations is an ambitious change of mentality but oh so beneficial for the future ...</span></p><p><span><br>To respond to this problem, in 2019 , Warenghem Studios was born. Our goal: to develop objects and clothes that are perfect in all their facets, to exploit the formidable virtues hidden in each plant species, and not to touch animals since we have other alternatives. It may sound simple said like that! But we and all the elements around us are connected. It is not enough to use organic cotton to claim an ecological attitude.<br>Every day, all our teams work to make this crazy ambition more concrete. Step by step, we develop radical innovations and use technology when it brings real added value. </span></p><p><span><br>The Warenghem DNA is strongly inspired by the progressivism of the Enlightenment and the complexity of Edgar Morin. Focused on an excessive attention to detail and the interdependence of natural elements. The name Warenghem also refers to a man passionate about people and their relationship to nature. Having spent his whole life in research and progress, he was one of those Men who, through their intellectual, cultural and scientific commitment, have contributed to making the world progress at their level to make it better.</span></p></div><br>We too will look for ...",
		"col1": "",
		"col2": "",
		"col3": "",
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
				}
			]
		},
		"subtitle1": "La genèse",
		"subtitle3": "Notre histoire",
		"col1": "Chiner les formidables et myst&eacute;rieuses vertus cach&eacute;es dans chaque esp&egrave;ce v&eacute;g&eacute;tale et min&eacute;rale afin de cr&eacute;er des objets du quotidien et ne pas utiliser de mati&egrave;res animales puisque nous avons d'autres alternatives",
		"col1title": "A la source",
		"col2": "Fabriquer des objets en France au design minimaliste et travaill&eacute;",
		"col2title": "Made in France",
		"col3": "Utiliser la technologie lorsqu'elle apporte une r&eacute;elle plus-value environnementale et &eacute;thique. Notre application ORIGIN vous permet par exemple de d&eacute;couvrir la beaut&eacute; int&eacute;rieure de votre article",
		"col3title": "2.0",
		"text1": "<p>Dans l&rsquo;univers de la mode et du design, il existe un paradoxe frappant : nous ne portons que peu d'attention sur la beaut&eacute; int&eacute;rieure d'un objet, la puret&eacute; et les milliers de d&eacute;tails qui constitue son histoire. Pourtant, comme chaque Homme, il d&eacute;gage un certain charisme en fonction de ce qu'il repr&eacute;sente, des mat&eacute;riaux naturels qui le compose et des conditions dans lesquelles il a &eacute;t&eacute; fabriqu&eacute;. La beaut&eacute; n'est pas qu'esth&eacute;tique.</p><p>En parall&egrave;le, nous r&eacute;alisons aujourd'hui que nous ne sommes pas des &eacute;l&eacute;ments d&eacute;tach&eacute;s, notre survie d&eacute;pend de la sant&eacute; des &eacute;cosyst&egrave;mes de la plan&egrave;te avec qui nous devons agir en collaboration.</p><p>Nous sommes une esp&egrave;ce animale parmi d'autres, mais nous disposons de deux pouvoirs : l'incroyable capacit&eacute; &agrave; &eacute;laborer des syst&egrave;mes complexes et la possibilit&eacute; de prendre des d&eacute;cisions suivant notre r&eacute;flexion et non notre instinct.</p><p>Warenghem Studios est n&eacute; en 2019 pour d&eacute;velopper&nbsp;ces pouvoirs afin de r&eacute;aliser 3 objectifs :</p>",
		"text2": "Chaque jour nos &eacute;quipes &oelig;uvrent pour rendre cette folle ambition plus concr&egrave;te. &Eacute;tape par &eacute;tape, nous d&eacute;veloppons nos innovations, focalis&eacute;s sur un souci excessif du d&eacute;tail et de l'interd&eacute;pendance des &eacute;l&eacute;ments naturels.</p><p><br/>Le nom Warenghem fait d&rsquo;ailleurs r&eacute;f&eacute;rence &agrave; un homme passionn&eacute; par l'humain et son rapport &agrave; la nature. Ayant pass&eacute; toute sa vie &agrave; chercher et &agrave; progresser, il faisait partie de ces Hommes qui, par leur engagement intellectuel, culturel et scientifique, ont contribu&eacute; &agrave; faire progresser le monde &agrave; leur niveau pour le rendre meilleur.",
		"title1": "Une histoire végétale et minérale",
		"title3": "Découvrez notre parcours, et nos actualités."
	}
}
</i18n>

<style scoped lang="scss">
.first {
  @media (min-width: 960px) {
    height: 90vh;
  }
  .firsttext {
  @media (min-width: 960px) {
    position: absolute
  }
  }
}
.grid-container {
  display: grid;
  padding: 1rem!important;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "div2 div2 div2 div3 div3 div3";
  @media (max-width: 960px) {
  grid-template-areas:
    "div2 div2 div2 div2 div2 div2"
    "div3 div3 div3 div3 div3 div3"
	"div5 div5 div5 div5 div5 div5";
    grid-gap: 0.5rem;
	padding: 0!important;
  }
}
.card {
  height: 25rem!important;
  @media (min-width: 960px) {
    height: 40rem!important;
  }
}
.div1 { 
	grid-area: div1; 

	.icon {
		padding-bottom: 20px;
	}
}
.div2, .div4 { 
	grid-area: div2; 
	color: white;
	.text {
		margin: auto;
	}
}
.div5, .div6, .div7 { 
	.icon {
		width: 80%;
		margin-bottom: 20px;
	}
}
.div3 { grid-area: div3; }
.div4 { grid-area: div4; }
.div5 { grid-area: div5; }
.div6 { grid-area: div6; }
.div7 { grid-area: div7; }
.blueoverlay::before {
border-radius: 20px !important; }

.div3 .background { 
	background: rgb(21,48,56);
	background: linear-gradient(90deg, rgba(21,48,56,1) 0%, rgba(114,47,48,1) 37%, rgba(114,47,55,1) 100%);
	border-radius: 20px !important; 
 }

     .calender {
        border-top: solid 1px rgba(255, 255, 255, 0.5);
        background: #1a1a1a;
        background: radial-gradient(circle at 50% 45%, #292929 0%, #0a0a0a 100%);
        color: #fff;
        padding-bottom: 90px;

        .subtitle {
            font-size: 13px;
            padding-left: 20px;
            max-width: 400px;
            line-height: 1rem !important;
        }

    }

    .timeline-container {
        position: relative;
        max-width: 1260px;
        margin: 0 auto;
        padding-bottom: 30px;
    }

    .timeline-item {
        position: relative;
        margin-bottom: 130px;
    }

    .timeline-content {
        border-radius: 15px;
    }

    .smalltitle {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 18px;
        color: #fff;
        font-family: 'teradeli-medium', sans-serif;
        line-height: 1rem !important;
        font-weight: 100;
    }

    .item-details {
        margin-bottom: 15px;
        color: #86868b;
        text-align: left;
        font-size: 13px;
        line-height: 1.47059;
        font-weight: 900;
        letter-spacing: -.022em;
        font-family: 'teradeli-light', sans-serif;
    }

    .v-timeline::before {
        background: #0081a7 !important;
    }
	::v-deep .v-timeline-item__inner-dot {
		border: 2px solid white;
	}
@media (min-width: 960px) {
/* Move the dot css to .dot*/
	::v-deep .v-timeline-item__dot{
		height: unset!important;
		width: unset!important;
	}
	.dot {
		height: 152px!important;
		width: 152px!important;
	}
/* END Move the dot css to .dot*/
	::v-deep .v-timeline-item__divider {
		min-width: 152px!important;
	}
	::v-deep .v-timeline-item__body {
		max-width: calc(50% - 75px)!important;
	}
	::v-deep .v-timeline-item__body {
		padding-right: 30px!important;
		padding-left: 30px!important;
	}
}
/* Move the dot css to .dot*/
.dot {
	box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
	border: 2px solid var(--v-lightbugattiblue-base);
}
::v-deep .v-timeline-item__dot {
    box-shadow: none!important;
}
::v-deep .v-timeline-item__inner-dot.primary {
    background-color: unset!important;
}
::v-deep .v-timeline-item__inner-dot {
    border: none!important;
}
::v-deep .v-timeline-item__dot {
    background: none!important;
}
/* END Move the dot css to .dot*/
::v-deep .theme--dark.v-sheet, .theme--dark .appBar {
    border-color: rgb(21, 21, 21) !important;
}
::v-deep .v-timeline:before {
    width: 5px!important;
    border-radius: 5px!important;
}
::v-deep .v-application--is-ltr .v-timeline:not(.v-timeline--dense):not(.v-timeline--reverse):before {
    left: calc(50% - 5px)!important;
}
::v-deep .theme--light.v-timeline .v-timeline-item .v-card::before {
    border-right-color: white!important;
}
::v-deep .v-timeline--align-top .v-timeline-item__body > .v-card:before {
    top: calc(0% + 30px + 2px)!important;
}
::v-deep .v-timeline--align-top .v-timeline-item__body > .v-card:after {
    top: calc(0% + 30px)!important;
}
</style>