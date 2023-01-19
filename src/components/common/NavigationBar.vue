<template>
	<header class="header">
		<div class="header__logo">
			<img src="/arch.png" alt="arch" />
		</div>
		<div class="header__center">
			<nav class="header__nav-center">
				<router-link to="/" class="header__navigation-link">Main</router-link>
				<router-link to="/about" class="header__navigation-link"
					>About
				</router-link>
				<router-link to="/contact" class="header__navigation-link"
					>Contact
				</router-link>
			</nav>
		</div>
		<div class="header__right">
			<nav class="header__nav-right">
				<!-- <button class="search">
					<a href="#">
						<img src=".src/assets/icons/search.png" alt="search" />
					</a>
				</button> -->
				<button class="sign_in"><a href="#">Sign In</a></button>
				<button class="button sign_up"><a href="#">Sign Up</a></button>
			</nav>
		</div>

		<!-- <nav class="application-navigation flex-center">
			<router-link to="/" class="application-navigation-link">
				<strong>Main</strong></router-link
			>
			<router-link to="/about" class="application-navigation-link"
				><strong>About</strong>
			</router-link>
			<router-link to="/contact" class="application-navigation-link"
				><strong>Contact</strong>
			</router-link>
		</nav> -->
	</header>
</template>

<style lang="scss" scoped>
.header {
	background-color: #ffffff;
	display: flex;
	padding: 28px 50px;
	height: 96px;
	&__logo {
		height: 28px;
		width: 60px;
		flex: 0 0 60px;
	}
	&__center {
		flex: 1;
		display: flex;
	}
	&__nav-center,
	&__nav-right {
		font-size: 14px;
		font-family: "SF UI Display Light";
		font-weight: 400;
		line-height: 40px;
	}
	&__navigation-link {
		color: #585858;
		transition: color 0.3s ease;
		margin: 0 40px;
		text-decoration: none;
		&.router-link-active {
			color: green;
		}
	}
}
.wrapper {
	margin: 0 165px;
}

.header__right a {
	color: #585858;
	transition: color 0.3s ease;
}

.small_header {
	display: flex;
	margin: 0px;
}

.header__right {
	flex: 0 0 210px;
	justify-content: flex-end;
}

.header__nav_right {
	display: flex;
	width: 350px;
}

.header__nav_center {
	height: 96px;
	padding-bottom: 76px;
}

.search,
.sign_in {
	border: none;
	background-color: #ffffff;
	padding: 4px 8px;
	width: 99px;
	height: 48px;
}

.search img {
	position: absolute;
	top: 46px;
}

.button {
	background-color: #fd665e;
	border-radius: 3px;
	border: none;
}

.sign_up {
	width: 99px;
	height: 48px;
}

.sign_up a {
	color: #ffffff;
}

.main {
	max-height: 847px;
	max-width: 1110px;
}

.main_title {
	font-family: "New York Extra Large Bold";
	line-height: 120px;
	font-size: 70px;
	max-width: 820px;
	max-height: 224px;
	margin-bottom: 56px;
}

.main_title span {
	color: #fd665e;
}

.wrapper_main {
	display: flex;
	justify-content: space-around;
}

.main_img {
	width: 765px;
	height: 480px;
	margin-bottom: 48px;
}

.main_text {
	max-width: 290px;
	max-height: 130px;
	font-family: "SF UI Display";
	font-weight: 100;
	margin: 0 55px 48px 0;
}

.main_tap {
	width: 179px;
	height: 56px;
}

.main_tap a {
	font-family: "SF UI Display";
	font-weight: 200;
}

.pictures_slides_title {
	display: inline-block;
	width: 365px;
	height: 120px;
	margin: 5px 395px 15px 345px;
}

.style_title {
	font-family: "New York Extra Large Medium";
	font-size: 38px;
	line-height: 50px;
	margin: 0;
}

.navigation_button_wrapper {
	display: flex;
	justify-content: flex-end;
	margin: -52px 225px 15px 0;
}

.navigation_button {
	width: 48px;
	height: 48px;
	border: none;
	background-color: #ffffff;
	cursor: pointer;
	border-radius: 4px;
}

.symbol {
	width: 30px;
	height: 30px;
	color: #473534;
}

.button_left {
	transform: rotate(180deg);
}

.navigation_button:hover .symbol {
	color: #fd665e;
}

.navigation_button:hover {
	background-color: #e5e5e5;
}

.pictures_slides_images {
	margin-left: 0;
	display: flex;
	justify-content: space-between;
	margin-bottom: 64px;
}

.pictures_slides_images_items {
	width: 305px;
	height: 432px;
}

.benefit_content {
	max-height: 898px;
}

.benefit_content_title {
	display: inline-block;
	width: 459px;
	height: 120px;
	margin-top: 34px;
}

.benefit_content_item {
	display: flex;
}

.banner_content_image {
	width: 535px;
	height: 610px;
	margin-bottom: 64px;
}

.benefit_content_column {
	margin: 60px 29px 20px 159px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

.wrapper_icons_first {
	width: 48px;
	height: 55px;
}

.first_icon {
	width: 48px;
	height: 55px;
}

.wrapper_icons_middle {
	width: 39px;
	height: 48px;
}

.middle_icon {
	width: 39px;
	height: 48px;
}

.wrapper_icons_last {
	width: 40px;
	height: 53px;
}

.last_icon {
	width: 40px;
	height: 53px;
}

.first_icon,
.middle_icon,
.last_icon {
	margin-right: 40px;
	flex-direction: column;
	justify-content: center;
}

.topic {
	margin: 0 0 -10px 0;
	font-family: "SF UI Display Bold";
	font-size: 16px;
	line-height: 27px;
}

.first_text,
.middle_text,
.last_text {
	font-family: "SF UI Display Thin";
	font-size: 15px;
	line-height: 26px;
	width: 263px;
}

.benefit_content_column_first,
.benefit_content_column_middle,
.benefit_content_column_last {
	display: flex;
	justify-content: flex-end;
}

.benefit_content_tap {
	width: 204px;
	height: 56px;
	font-family: "SF UI Display Medium";
	font-size: 14px;
	line-height: 40px;
	margin-top: 60px;
	margin-left: 87px;
}

.wpapper2 {
	background-color: #f9f9f9;
}

.citation {
	height: 558px;
	padding: 0 165px;
	padding-top: 64px;
}

.citation_title {
	margin-bottom: 40px;
}

.citation_text_section {
	display: flex;
	justify-content: flex-end;
}

.citation_text_section_icon {
	margin-top: 35px;
}

.citation_text_section_gratitude {
	font-family: "SF UI Display Thin", "sans-serif";
	font-size: 30px;
	line-height: 45px;
	font-weight: 100;
	width: 765px;
	height: 204px;
	padding-left: 80px;
	margin: 0;
	margin-bottom: 59px;
}

.wrapperchik_citation {
	display: flex;
}

.signature_under_quote {
	font-family: "SF UI Display Thin", "sans-serif";
	font-size: 16px;
	line-height: 26px;
	width: 216px;
	height: 26px;
}

.signature_under_quote span {
	font-weight: bold;
}

.use_second {
	width: 450px;
	height: 50px;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
}

.use2 {
	background-color: #f9f9f9;
}

.offers {
	padding: 88px 120px 64px 179px;
	background: linear-gradient(to bottom, #f9f9f9, #ffffff);
}

.offers_content {
	display: flex;
}

.offers_image {
	flex-basis: 25%;
}

.offers_title {
	display: flex;
	flex-basis: 75%;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

.offers_title span {
	color: #fd665e;
}

.offers_title_tap {
	margin-left: -240px;
}

.cooperation_title {
	margin: 64px 0 56px 0;
}

.cooperation_logo {
	display: flex;
	justify-content: space-between;
	margin-bottom: 106px;
}

.cooperation_logo-1 {
	width: 161px;
	height: 57px;
}

.cooperation_logo-2 {
	width: 110px;
	height: 55px;
}

.cooperation_logo-3 {
	width: 210px;
	height: 57px;
}

.cooperation_logo-4 {
	width: 94px;
	height: 62px;
}

.cooperation_logo-5 {
	width: 213px;
	height: 74px;
}

.footer {
	margin: 84px 0;
}

.footer_navigation {
	display: flex;
}

.footer_small_navigation_item a {
	color: #585858;
	font-family: "SF UI Display Light";
	font-size: 12px;
}

.footer_small_navigation {
	display: flex;
	flex-basis: 60%;
	padding: 0;
}

.footer_logo {
	display: flex;
	flex-basis: 40%;
	justify-content: flex-end;
}

.footer_small_navigation_item {
	margin-right: 30px;
}
</style>
