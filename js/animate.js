;(function(){
			$.fn.extend({
				"animate":function(opt){
					var DEFAULT={"offset":0,out:true};
					var option=$.extend({},DEFAULT,opt);
					$(window).bind("scroll",animateIt);
					var obj=this;
					function animateIt(){
					obj.each(function(){
						var winH=$(window).height();
						var elemH=$(this).height();
						var offT=$(this).offset().top;
						var scrollT=$(window).scrollTop();
						var ani=$(this).attr("data-ani");
						var delay=$(this).attr("data-delay");
						console.log(delay);
						if(scrollT>(offT-winH+elemH+option.offset)&&scrollT<(offT+elemH)){
							if(delay!=""){
//								alert("in");
								delay=parseFloat(delay)*1000;
								var elem=$(this);
								setTimeout(function(){
								 elem.css("visibility","visible")
									 .addClass("animated "+ani);	
								},delay);
							
							}else{
								$(this).css("visibility","visible")
								.addClass("animated "+ani);
							}
						}else{
							if(option.out){
							$(this).css("visibility","hidden");
							$(this).removeClass("animated "+ani);	
							}
						}
					})//each
					return this;
					}//animateIt
				}
			})
			})(jQuery)