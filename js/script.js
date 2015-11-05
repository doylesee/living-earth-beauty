$(document).foundation();

$(document).ready(function(){		
	// Create smooth scrolling transition for # links
	$(function() {
		$('.discover__button a, .discover__products-brands-item a, a#more-details-js').click(function() {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		});
	});
	
	// Main Menu section: SlickNav call
	$('#main-menu__list-js').slicknav();
	
	// Sticky scroll for Header menu
	function sticky_relocate() {
		var window_top = $(window).scrollTop();
		var div_top = $('#main-menu-anchor-js').offset().top;
		if (window_top > div_top) {
			$('#main-menu-js').addClass('sticky');
		} else {
			$('#main-menu-js').removeClass('sticky');
		}
	}
	$(function () {
		$(window).scroll(sticky_relocate);
		sticky_relocate();
	});
	
	// Banner section - SlickCarousel call
	$('#banner__list-js').slick({
		infinite	: true,
	});
	
	// Home page: Products section - SlickCarousel calls
	if($('.home-products__list.js').length != 0) {
		$('.home-products__list.js').slick({
			infinite		: true,
			slidesToShow	: 4,
			slidesToScroll	: 4,
			responsive		: [
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		});
	}
	
	// Home page: Discover section - toggle button
	if ($('.discover__products').length != 0) {
		$post = $('.discover__products');
		$('.discover__button a').click(function() {
			$post.toggleClass('show');
			if ($('.discover__products-list.active').length != 0) {
				$('.discover__products-list').removeClass('active');
			}
		});
	}
	
	// Home page: Discover Brand Logos section - SlickCarousel call
	if($('#discover__products-brands-js').length != 0) {
		$('#discover__products-brands-js').slick({
			infinite		: true,
			slidesToShow	: 5,
			slidesToScroll	: 5,
			responsive		: [
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		});
	}
	if($('.discover__products-list.js').length != 0) {
		$('.discover__products-list.js').slick({
			infinite		: true,
			slidesToShow	: 4,
			slidesToScroll	: 4,
			responsive		: [
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		});
	}
	
	// Home page: Discover Brand Logos section - custom tabbing
	if ($('.discover__products-brands-item').length != 0) {
		$('.discover__products-brands-item a').click(function() {
			var brand_id = $(this).attr('href');
			$('.discover__products-list').removeClass('active');
			$(brand_id).addClass('active');
		});
	}
	
	// Home page: Parallax section
	$('#home-parallax__content-js').parallax();
	
	// Home page: Shop Our Instagram section - SlickCarousel call
	if ($('#shop-our-instagram__list-js').length != 0) {
		$('#shop-our-instagram__list-js').slick({
			centerMode: true,
			infinite: true,
			slidesToShow: 1,			
			variableWidth: true
		});
	}
	
	// Home page: Love Notes section - SlickCarousel call
	if ($('#love-notes__list-js').length != 0) {
		$('#love-notes__list-js').slick({
			infinite		: true,
			slidesToShow	: 3,
			slidesToScroll	: 3,
			responsive		: [
				{
				  breakpoint: 992,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				},
				{
				  breakpoint: 640,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			]
		});
	}
	
	// Inner pages - set height for tab link items
	if ($('.category-tab').length != 0) {
		var tab_link_height = 0;
		$('.category-tab ul.tabs li.tab-title').each(function() {
			if ($(this).height() > tab_link_height) {
				tab_link_height = $(this).height();
			}
		});
		$('.category-tab ul.tabs li.tab-title a').height(tab_link_height);
	}
	
	/* Products listing / items - slide effects for Add to Wishlist and Add to Compare buttons */
	if ($('.home-products__item-buttons').length != 0) {
		$('.home-products__item-buttons').hover(function() {
			$(this).find('.home-products__item-wishlist').removeClass('slideRight').addClass('slideLeft2').fadeIn('slow');
			$(this).find('.home-products__item-compare').removeClass('slideRight').addClass('slideLeft1').fadeIn('slow');
		}, function() {
			$(this).find('.home-products__item-wishlist').removeClass('slideLeft2').addClass('slideRight').fadeOut('slow');
			$(this).find('.home-products__item-compare').removeClass('slideLeft1').addClass('slideRight').fadeOut('slow');
		});
	}
	
	
	/* Product Details page - Image Gallery section */
	$('#product-details__images-gallery-js').slick({
		arrows		: true,
		infinite	: true,
		slidesToShow	: 3,
		slidesToScroll	: 3,
		vertical	: true
	})
	
	// Testimonials page - masonry function call
	if ($('#testimonials-list-js').length != 0) {
		$('#testimonials-list-js').masonry();
	}
	
	// Brands - Category pages - Learn More button
	if ($('.brands__description p:nth-of-type(2)').length != 0) {
		$('.brands__description p:nth-of-type(2)').append(' <span class="brands__learn-more">Learn More About This Brand</span>');
		
		$('.brands__learn-more').click(function(){
			$('.brands__description p, .brands__close').show();
			$('.brands__learn-more').hide();
		});
		$('.brands__close').click(function(){
			$('.brands__description p, .brands__close').not('.brands__description p:nth-of-type(1), .brands__description p:nth-of-type(2)').hide();
			$('.brands__learn-more').show();
		});
	}
	
});

$(window).load(function() {
	$('#pre-loaders').fadeOut();
	$('#page-content').fadeIn();
	
	// Main Menu: Submenu - set position for Submenu arrow
	var arrow_margin_left = 0;
	$('#main-menu__list-js li:has(.main-menu__submenu-arrow)').each(function() {
		arrow_margin_left = parseInt(($(this).width() / 2) - 6);
		$(this).find('.main-menu__submenu-arrow').attr('style','margin-left: '+arrow_margin_left+'px;');
	});
});