// JavaScript Document
// Ashley Johnson
// Date Created 8 May 2020

// FOR EDUCATION PURPOSES 


// Script that adds checkbox values together \\

function updateTotals() 
{
	// telling our function where to get the numbers from
	// line tells to go inside sectiontoAdd div, and inside there go inside the input element
	var inputs = document.getElementById('sectiontoAdd').getElementsByTagName('input');
			
	// creating a space in memory to hold our total number
	var total = 0;
			
	// iteration statement, the gears of what keeps the function going until we have reached desired outcome
	for (var i = 0, num = inputs.length; i < num; i++) 
	{
		// if our checkbox is checked
		// this statement means our function iterates through every single checkbox 
			if (inputs[i].checked)
		{
			// when one is checked, then function reaches inside input and reads the value
			// and adds it to our total ( which we declared above )
			// this number becomes to new total, which means we can add multiple checkboxes together
			//     ex. total = 0
			//     *checkbox checked*
			//	   total = total + ( input value which lets say is 57 )
			//     total = 57
			//     *checkbox checked*
			//	   total = total + ( input value which lets say is 13 )
			//     total = 70
			total += parseInt(inputs[i].getAttribute('value'));
		}
		
	}
	// saves new total value so we can access it later
	// otherwise we lose the total after exiting the function
	// if your curious look into local variables vs global variabls
	// essential saves the new value to the payment_total id
		document.getElementById('payment_total').innerHTML = total;
}
	

// Script that replace the payment total value on screen \\
	
var section = document.getElementById('sectiontoAdd');
var inputs = section.getElementsByTagName('input');
		
for (var i = 0, num = inputs.length; i < num; i++)
{
	// this is what changes the number seen on the screen
	// reads the number taken out of our function updateTotals() and replaces whatever is inside our 
	// payment_total div with the new value
	inputs[i].addEventListener('change', updateTotals);
			
}