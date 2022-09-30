// JavaScript Document
// Ashley Johnson
// Date Created : 8 May 2020

// FOR EDUCATION PURPOSES 


// Shows and Hides Product Containers on Drop Down Selection
// -- Add option value as class to product container
// -- Add .show class to product container to allow jquery to show/hide div
// .      show class is connected to the fadeOut and fadeIn functions
// -- ex. <option value="summer" >Summer</option>
// .      <div class="productContainer summer show">

	$(document).ready(function(){
			$("select").change(function(){
					$(this).find("option:selected").each(function(){
							var optionValue = $(this).attr("value");
							if(optionValue) // if productContainer has class = new drop down value
							{ 
								
								// fadeOut(500) means to fade out the object during time of 500 milliseconds 
								// you can play around with different speeds to get desired look
								// line below means if div has show class and not the options value thats been
								//    selected, fade the div out and remove show class
									$(".show").not("." + optionValue).fadeOut(500);
								
								// line below means if div has class of option value fade it out then
								// [promise().done] = wait until fade out is completely done on all before fading in
								// *this is because some divs are only fading in and will fade in staggered
									$("." + optionValue).fadeOut(500).promise().done(function(){$("." + optionValue).delay(0).fadeIn(1000);});
								
							} 
						else  // else means if any divs do not meet requirements above then ....
							{
								
								// fade out elements who do not have the class of the new option value
									$(".show").fadeOut(500);
								
								// fade out options w/ the option value and fade them back in
								// so the timing lines up with both newly fading in objects and 
								// objects fading out
									$("." + optionValue).fadeOut(500).promise().done(function(){$("." + optionValue).delay(500).fadeIn(1000);});
							}
				});
				
		})
		
		.change();
		
	});