<template>
	<v-app>
		
		<app-menu />

		<app-toolbar/>

		<v-content>
			<app-carousel />
		</v-content>

		<app-footer />

	</v-app>
</template>

<script>
import Carousel from './Carousel'
import Footer from './Footer'
import Toolbar from './Toolbar'
import Menu from './Menu'

export default {
	components: { 
		'app-footer': Footer,
		'app-carousel': Carousel,
		'app-toolbar': Toolbar,
		'app-menu': Menu,
		}
}
</script>
