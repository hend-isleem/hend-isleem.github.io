// The Show More and Show Less "JOB POST"////////////////////////////////////////////////////////////

if ('querySelector' in document && 
'localStorage' in window && 
'addEventListener' in window) {

var toggleButtons = document.querySelectorAll('.toggle-content');
var fullTextWrappers = document.querySelectorAll('.fulltext');

[].forEach.call(fullTextWrappers, function(fullTextWrapper) {
	// hide all full text on load
	fullTextWrapper.setAttribute('hidden', true);
});

var fullText;
var toggleButtonText;

[].forEach.call(toggleButtons, function(toggleButton) {
	// show toggle more buttons
	toggleButton.removeAttribute('hidden');

	// add listener for each button
	toggleButton.addEventListener('click', function () {

		fullText = this.parentElement.querySelector('.fulltext');
		toggleButtonText = this.querySelector('.text');

		// change attributes and text if full text is shown/hidden
		console.log(fullText.hasAttribute('hidden'));
		if (!fullText.hasAttribute('hidden')) {
			toggleButtonText.innerText = 'Full Details';
			fullText.setAttribute('hidden', true);
			toggleButton.setAttribute('aria-expanded', false);
		} else {
			toggleButtonText.innerText = 'Hide Details';
			fullText.removeAttribute('hidden');
			toggleButton.setAttribute('aria-expanded', true);
		}
	});
});



// Edit post////////////////////////////////////////////////////////////////////////////////////////// 

var editButtons = document.querySelectorAll('.editBtn');
var postDescription ;
var saveButtons = document.querySelectorAll('.saveButt');
var saveButt;


[].forEach.call(editButtons, function(editButton) {

	// add listener for each edit button
	editButton.addEventListener('click', function () {

		postDescription = this.parentElement.querySelectorAll('.description');
		saveButt=this.parentElement.querySelector('.saveButt');
		saveButt.style.visibility = "visible";
		
        [].forEach.call(postDescription, function(description) {
			description.contentEditable = "true";
			description.style.backgroundColor ="#fff0a3";
		});

	});
});

// Save changes butt //////////////////////////////////////////////////////////////////////////////////

[].forEach.call(saveButtons, function(saveButton) {

	// add listener for each saveChanges button 
	saveButton.addEventListener('click', function () {

		postDescription = this.parentElement.querySelectorAll('.description');

		[].forEach.call(postDescription, function(description) {
			description.contentEditable = "false";
			description.style.backgroundColor ="white";
		});
		this.parentElement.querySelector('.card-title').style.backgroundColor ="lightcyan";

		this.style.visibility = "hidden";
	});
});


// when Update_Info_Nav///////////////////////////////////////////////////////////////////////////////
/*
var Update_Info_Nav = document.querySelector('.Update_Info_Nav');
var contenteditable ;

Update_Info_Nav.addEventListener('click', function () {

	contenteditable=jQuery('.contenteditable').load('companyUpdateInfo.html'); 
	//window.location.href = "companyUpdateInfo.html";*/
	contenteditable= document.querySelectorAll('.contenteditable');
	[].forEach.call(contenteditable, function(content) {
		content.contentEditable = "true";
		content.style.backgroundColor ="#ffed9e";
	});


//});

// saveChanges btn _companyUpdateInfo_/////////////////////////////////////////////////////////////////

document.querySelector('#saveChanges-btn').addEventListener('click', function() {
	window.location.href = "companyProfile_forPublic.html";
});


// viewApplicants btn _applicantsList_/////////////////////////////////////////////////////////////////
/*
var viewApplicants = document.querySelectorAll('.viewApplicants');

[].forEach.call(viewApplicants, function(applicant) {

	
});
*/

}



