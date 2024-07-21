// script.js 
let mysBtn = document 
	.getElementById('scrollbuttonid'); 

window.addEventListener('scroll', function () { 
	if (document.body.scrollTop > 20 
		|| document.documentElement.scrollTop > 20) { 
		mysBtn.style.display = 'block'; } 
	else { 
		mysBtn.style.display = 'none'; 
	} 
}); 

//this javascript code is for the scroll back to top function in the rocket icon.(id='scrollbuttonid')
//it's linked to the html document at the head section (index.js)