$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
	$('.leftbar__ikon').click(function(event){
		$('.leftbar__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

function ibg(){

	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
	if(ibg[i].querySelector('img')){
	ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
	}
	}
	}
	
	ibg();

	$(document).ready(function(){
		$('.slider').slick({
			arrows:false,							//? стрелки переключения
			dots:false,								//? точки переключения
			adaptiveHeight:false,					//? автоувеличение
			slidesToShow:3,						//? кол-во слайдов за раз
			slidesToScroll:1,						//? кол-во пролистываний за раз
			speed:2000,								//? скорость пролистывания
			easing:'linear',						//? тип пролистывания
			infinite:true,							//? зацыклиность
			initialSlide:0,						//? слайд по умолчанию
			autoplay:true,							//? автопрокрутка
			autoplaySpeed:3000,					//? скорость автопрокрутки
			pauseOnFocus:true,					//? пауза при нажатии
			pauseOnHover:true,					//? пайза при наведении
			pauseOnDotsHover:true,				//? пауза при наведении на точки
			draggable:true,						//? свайп на компьютере
			swipe:true,								//? свайп на телефоне
			touchThreshold:10,					//? Нужная сила для перелистывания
			touchMove:true,						//? При включении разрешает таскать слайды, если отключить только переключать слайды с заданной силой выше
			waitForAnimate:true,//? Ждать завершения анимации перед следующей
			centerMode:false,//? Режим центрального слайда
			variableWidth:false,//? разрешить слайдам определять ширину
			rows:1,//? строки
			slidesPerRow:1,//? колчиесвто слайдов на строку
			vertical:false,//? вертикаьный слайдер
			verticalSwiping:false,//? вертикальный свайп
			fade:false,//? смена слайда на слайд      Отображается только по одному
			//asNavFor:".slide2", //?Связать слайдер с .slide2
			responsive:[
				{
					breakpoint:1170,
					settings:{					//? Адаптивность слайдов
						slidesToShow:2,
					}
				},
				{
					breakpoint:770,
					settings:{					
						slidesToShow:1,
					}
				},
			],
			//appendArrows:$('teg'),//? переместить стрелки
		});
	});