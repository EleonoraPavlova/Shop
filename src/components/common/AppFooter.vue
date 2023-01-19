<template>
	<section class="footer__box-nav">
		<ul class="footer__nav">
			<li class="footer__nav footer__nav-item"><a href="#">About Us</a></li>
			<li class="footer__nav footer__nav-item">
				<a href="#">How it Works</a>
			</li>
			<li class="footer__nav footer__nav-item"><a href="#">FAQ</a></li>
			<li class="footer__nav footer__nav-item">
				<a href="#">Contact Us</a>
			</li>
			<li class="footer__nav footer__nav-item">
				<a href="#">Privacy Policy</a>
			</li>
		</ul>
		<div class="footer__logo">
			<img src="/arch.png" alt="arch" />
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
	&__box-nav {
		display: flex;
		align-items: center;
		margin: 110px 30px 20px 30px;
		justify-content: flex-end;
	}
	&__logo {
		padding: 3px;
		height: 28px;
		width: 60px;
	}
	&__nav {
		display: flex;
		padding: 0;
		&-item {
			font-family: "SF UI Display Light";
			font-size: 12px;
			color: #585858;
			margin-right: 20px;
			&:hover a {
				color: #fd665e;
			}
		}
	}
}
</style>