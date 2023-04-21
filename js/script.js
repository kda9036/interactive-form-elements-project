/* JS for Project 1: Interactive Form Elements */

/* If user has outdated browser, redirect user to page to update their browser */
if(!document.getElementById) {
    alert("Your browser is a bit... outdated.  You'll be redirected to a page to update your browser, then check back!");
    window.location = "https://browsehappy.com/";
}

/**********************************************************************
    Data
**********************************************************************/
/*
    DATA - Primary data for project
*/

// [?, opt, opt, opt,...]
const DATA1 = {
    init: ['What type of pet?', 'dog', 'cat'],
    dog: ['Gender?', 'male', 'female'],
    cat: ['Boy or Girl?', 'boy', 'girl'],
    male: ['Age?', 'puppy', 'adult', 'senior'],
    female: ['Age?', 'puppy', 'adult', 'senior'],
    boy: ['How old?', 'kitten', '6months+'],
    girl: ['How old?', 'kitten', '6months+'],
    puppy: ['Size?', 'small', 'medium', 'large'],
    adult: ['Size?', 'small', 'medium', 'large'],
    senior: ['Size?', 'small', 'medium', 'large'],
    kitten: ['Purrsonality?', 'cuddly', 'playful'],
    '6months+': ['Coat?', 'long', 'short']
}

// final result -> button text
const END1 = {
    small: ['One lap dog, please!'],
    medium: ['Find my furever friend!'],
    large: ['Find my best furend!'],
    cuddly: ['Kitties Paw-lease!'],
    playful: ['Here kitty, kitty!'],
    long: ['Show me the floofs!'],
    short: ['Find my purrfect match!']
}

/*
    DATA - Secondary data for project
*/

// [?, opt, opt, opt,...]
const DATA2 = {
    init: ['Cone or dish?', 'cone', 'dish'],
    cone: ['Type of cone?', 'plain cone', 'waffle cone'],
    dish: ['Hard or soft serve?', 'hard ice cream', 'soft serve'],
    'plain cone': ['Ice cream flavor?', 'vanilla', 'chocolate', 'mint'],
    'waffle cone': ['Ice cream flavor?', 'vanilla', 'chocolate', 'mint'],
    'hard ice cream': ['Size?', 'small', 'large'],
    'soft serve': ['Type?', 'plain vanilla', 'plain chocolate', "twist"],
    vanilla: ['Number of scoops?', '1 scoop', '2 scoops'],
    chocolate: ['Number of scoops?', '1 scoop', '2 scoops'],
    mint: ['Number of scoops?', '1 scoop', '2 scoops'],
    small: ['Sprinkles?', 'no sprinkles', 'chocolate sprinkles', 'rainbow sprinkles'],
    large: ['Sprinkles?', 'no sprinkles', 'chocolate sprinkles', 'rainbow sprinkles'],
    'plain vanilla': ['Cherry on top?', 'cherry - please!', 'ick - no cherry'],
    'plain chocolate': ['Cherry on top?', 'cherry - please!', 'ick - no cherry'],
    twist: ['Cherry on top?', 'cherry - please!', 'ick - no cherry'],
    '1 scoop': ['Sprinkles?', 'no sprinkles', 'chocolate sprinkles', 'rainbow sprinkles'],
    '2 scoops': ['Sprinkles?', 'no sprinkles', 'chocolate sprinkles', 'rainbow sprinkles']
}

// final result -> button text
const END2 = {
    'cherry - please!': ['Serve it!'],
    'ick - no cherry': ['Show me my creation!'],
    'no sprinkles': ['Get my dream cone!'],
    'chocolate sprinkles': ['I scream for ice cream!'],
    'rainbow sprinkles': ['Get my dream ice cream!']
}

/*
    IMAGES - Images for results
*/
const IMAGES = {
    'cat_boy_6months+_long': ['cat_boy_6months+_long_0.jpg', 'cat_boy_6months+_long_1.jpg'],
    'cat_boy_6months+_short': ['cat_boy_6months+_short_0.jpg'],
    'cat_boy_kitten_cuddly': ['cat_boy_kitten_cuddly_0.jpg'],
    'cat_boy_kitten_playful': ['cat_boy_kitten_playful_0.jpg'],
    'cat_girl_6months+_long': ['cat_girl_6months+_long_0.jpg'],
    'cat_girl_6months+_short': ['cat_girl_6months+_short_0.jpg'],
    'cat_girl_kitten_cuddly': ['cat_girl_kitten_cuddly_0.jpg'],
    'cat_girl_kitten_playful': ['cat_girl_kitten_playful_0.jpg', 'cat_girl_kitten_playful_1.jpg'],
    'dog_female_adult_large': ['dog_female_adult_large_0.jpg'],
    'dog_female_adult_medium': ['dog_female_adult_medium_0.jpg'],
    'dog_female_adult_small': ['dog_female_adult_small_0.jpg'],
    'dog_female_puppy_large': ['dog_female_puppy_large_0.jpg'],
    'dog_female_puppy_medium': ['dog_female_puppy_medium_0.jpg'],
    'dog_female_puppy_small': ['dog_female_puppy_small_0.jpg', 'dog_female_puppy_small_1.jpg'],
    'dog_female_senior_large': ['dog_female_senior_large_0.jpg'],
    'dog_female_senior_medium': ['dog_female_senior_medium_0.jpg'],
    'dog_female_senior_small': ['dog_female_senior_small_0.jpg'],
    'dog_male_adult_large': ['dog_male_adult_large_0.jpg'],
    'dog_male_adult_medium': ['dog_male_adult_medium_0.jpg'],
    'dog_male_adult_small': ['dog_male_adult_small_0.jpg'],
    'dog_male_puppy_large': ['dog_male_puppy_large_0.jpg'],
    'dog_male_puppy_medium': ['dog_male_puppy_medium_0.jpg'],
    'dog_male_puppy_small': ['dog_male_puppy_small_0.jpg'],
    'dog_male_senior_large': ['dog_male_senior_large_0.jpg'],
    'dog_male_senior_medium': ['dog_male_senior_medium_0.jpg'],
    'dog_male_senior_small': ['dog_male_senior_small_0.jpg', 'dog_male_senior_small_1.jpg']
}


/**********************************************************************
    Variables
**********************************************************************/
var data;
var end;
var numResults;
var topic = "";
var cookiesEnabled;

/**********************************************************************
    Functions
**********************************************************************/

/* set dataset based on user button click */
function pickData(dataset, endSet) {
    data = dataset;
    end = endSet;
    removeAllChildNodes($('dataSelector'));
    $('startOverBtn').style.display = "";
    myFunct('init');
}

/* helper function to get element by id */
function $(id) {
    return document.getElementById(id);
}

/* helper function to remove all child nodes */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* Create image elements (results) */
function createImageElement(file) {
    var results = IMAGES[file];
    if(results == undefined) {
        numResults = 0;
    } else {
        numResults = results.length;
    }
    printNumResults();
    for(var i = 0; i < numResults; i++) {
        var img = document.createElement('img');
        $('resultHolder').appendChild(img);
        img.src = './images/' + IMAGES[file][i];
        img.setAttribute("class", "bounce");
        img.setAttribute('alt', 'result picture of pet');
        img.setAttribute('width', '300px');
    }
} 

/* Print the number of results/matches to the page */
function printNumResults() {
    var divEle = document.createElement('div');
    divEle.id = "fontInc";
    divEle.style.fontSize = "0px";
    var numResultsTxtNode;
    var hrEle = document.createElement('hr');
    if(numResults == 0) {
        if(topic == 'ice cream') {
            var numResultsTxtNode = document.createTextNode("Sorry, ice cream orders are done for the season.  You can fill out the form to be notified when ice cream orders resume.");
        } else {
            var numResultsTxtNode = document.createTextNode("There are no current matches for your criteria.  Please check back or start over with new selections.  You can also fill out the form to get notified if a match is added.");
        }
        divEle.appendChild(numResultsTxtNode);
        divEle.style.fontSize = "18px";
        $('resultHolder').appendChild(hrEle);
        buildForm();
    } else if (numResults == 1) {
        var numResultsTxtNode = document.createTextNode("There is " + numResults + " match!");
        divEle.appendChild(numResultsTxtNode);
        $('resultHolder').appendChild(hrEle);
        buildForm();
    } else {
        var numResultsTxtNode = document.createTextNode("There are " + numResults + " matches!  The more, the merrier!");
        divEle.appendChild(numResultsTxtNode);
        $('resultHolder').appendChild(hrEle);
        buildForm();
    }
    // Create a break line element
    var br = document.createElement("br");
    // add to page
    $('resultHolder').appendChild(br);
    $('resultHolder').appendChild(divEle);
    if(numResults > 0) {
        incFontSize(divEle.id, 1);
    }
}

/* Build form to capture user information */
function buildForm() {
    // Create a break line element
    var br = document.createElement("br");

    // Create heading
    var headingEle = document.createElement('h2');
    headingEle.id = "formHeading";
    headingEle.style.color = "#33475b";
    if(topic == 'pet') {
        headingEle.textContent = "Please fill out the form to get more information about your match(es)!";
    } else if (topic == 'ice cream') {
        headingEle.textContent = "Please fill out the form to get notified!";
    } else {
        headingEle.textContent = "Please fill out the form:";
    }
    // add heading to page
    $('formHolder').appendChild(headingEle);
    changeColor(headingEle.id, 0);
    
    // Dynamic form creation
    var form = document.createElement('form');
    form.id = "userInfoForm";
    form.setAttribute("method", "get");
    // form.setAttribute("action", "");  // add page here
    form.setAttribute("onsubmit", "return validate();");  // validate function to check user input
    
    // Create an input element for first name
    var firstNameLbl = document.createElement("label");
    var firstNameTxtNode = document.createTextNode("First Name: ");
    var firstName = document.createElement("input");
    firstName.setAttribute("type", "text");
    firstName.setAttribute("id", "fn");
    firstName.setAttribute("name", "fn");
    firstName.setAttribute("placeholder", "First Name");

    // Create an input element for last name
    var lastNameLbl = document.createElement("label");
    var lastNameTxtNode = document.createTextNode("Last Name: ");
    var lastName = document.createElement("input");
    lastName.setAttribute("type", "text");
    lastName.setAttribute("id", "ln");
    lastName.setAttribute("name", "ln");
    lastName.setAttribute("placeholder", "Last Name");

    // Create an input element for email
    var emailLbl = document.createElement("label");
    var emailTxtNode = document.createTextNode("Email: ");
    var email = document.createElement("input");
    email.setAttribute("type", "email");
    email.setAttribute("id", "email");
    email.setAttribute("name", "email");
    email.setAttribute("placeholder", "example@domain.com");

    // Create a submit button
    var submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("value", "Submit");
    submit.id = 'submit';
    
    // Append the first name input to the form
    form.appendChild(firstNameLbl);
    firstNameLbl.appendChild(firstNameTxtNode);
    form.appendChild(firstName);
    // Inserting a line break
    form.appendChild(br.cloneNode());

    // Append the last name input to the form
    form.appendChild(lastNameLbl);
    lastNameLbl.appendChild(lastNameTxtNode);
    form.appendChild(lastName);
    form.appendChild(br.cloneNode());
    
    // Append the email to the form
    form.appendChild(emailLbl);
    emailLbl.appendChild(emailTxtNode);
    form.appendChild(email);
    form.appendChild(br.cloneNode());
    
    // Append the submit button to the form
    form.appendChild(submit);

    // Put on page
    $('formHolder').appendChild(form);
}

/* Select menu slide down */
function selectSlide(id, amt) {
    var dom = $(id);
    if(parseInt(dom.style.top) < 10) {
        // increase top by amt px
        dom.style.top = parseInt(dom.style.top) + amt + "px";
        setTimeout(function() {selectSlide(id, amt);} , 50); // (1000 ms = 1 second)
    }
}

/* Increase font size */
function incFontSize(id, incFactor) {
    var dom = $(id);
    if(parseInt(dom.style.fontSize) < 36) {
        // increase font size x px
        dom.style.fontSize = parseInt(dom.style.fontSize) + incFactor + "px";
        setTimeout(function() {incFontSize(id, incFactor);} , 50); // (1000 ms = 1 second)
    }
}

/* Change font color */
var colorChangeCount = 0;
function changeColor(id, i) {
    var dom = document.getElementById(id);
    const colors = ['indigo', '#FF77CC', '#FF6666', '#33475b'];
    var len = colors.length;
    // change font color
    dom.style.color = colors[i];
    i++;
    if(i == 4) {
        // reset i to go back to the start of colors array
        i = 0;
    }
    colorChangeCount++;
    if(colorChangeCount < 52) { // don't change colors forever - end with last array item
        setTimeout(function() {changeColor(id, i);} , 1000); // (1000 ms = 1 second)
    }
}

/*
    Main function for page - select/option creation
*/
function myFunct(selection) {
    // first call (init)
    if(typeof(selection) == 'string') {
        var hold = data[selection];
        if(hold[0].includes('pet')) {
            var heading = document.createElement('h1');
            heading.innerText = "Pet Finder";
            document.getElementsByTagName('body')[0].prepend(heading);
            topic = 'pet';
        } else if(hold[0].includes('dish')) {
            var heading = document.createElement('h1');
            heading.innerText = "Ice Cream Creator";
            document.getElementsByTagName('body')[0].prepend(heading);
            topic = 'ice cream'; 
        }
        else {
            var heading = document.createElement('h1');
            heading.innerText = "Project 1 with Alternate Data!";
            document.getElementsByTagName('body')[0].prepend(heading);
        }
    } else { // user makes a selection
        var hold = data[selection.value];
        // remove code
        // Is there a next sibling?  If so, remove.
        while(selection.parentNode.nextSibling) {
            selection.parentNode.nextSibling.remove();
        }
        // Remove additional elements (remove summary, results, form)
        removeAllChildNodes($('summaryHolder'));
        removeAllChildNodes($('resultHolder'));
        removeAllChildNodes($('formHolder'));
    }

    if(hold != undefined) {
        // build the next select option menu:
        // build container div
        var div = document.createElement("div");
        // add question to container (hold[0])
        var textele = document.createTextNode(hold[0]);
        div.appendChild(textele);
        // give div a class
        div.setAttribute("class", "sel-opt-div");
        // give div attribute(s)
        div.id = 'sel' + ((document.getElementsByTagName('select')==undefined)? 0: document.getElementsByTagName('select').length);
        var numSelects = ((document.getElementsByTagName('select')==undefined)? 0: document.getElementsByTagName('select').length);
        div.style.position = "relative";

        if(document.getElementById('selectHolder').lastChild) {
            div.style.top = "-70px";
            div.style.zIndex = 100 - numSelects; // alter z-index so select can appear to drop down from behind previous select
        } else {
            div.style.top = '-200px';
            div.style.zIndex = 100;
        }

        // build select
        var selectMenu = document.createElement("select");
        selectMenu.onchange = function() {myFunct(this)};
        // build generic first option / default prompt (ie. Please choose a response)
        var prompt = "~ Please select a response ~";
        var option = document.createElement("option");
        option.value = prompt;
        option.text = prompt;
        selectMenu.appendChild(option);
        // # of values in array (question + options)
        var len = hold.length;
        // create and append options
        for(var i = 1; i < len; i++) {
            option = document.createElement("option");
            // get value for option and set value and text
            var entry = hold[i];
            option.value = entry;
            option.text = entry;
            // add option into select menu
            selectMenu.appendChild(option);
        }
            
        // put select into div
        div.appendChild(selectMenu);
        // put div on page
        $('selectHolder').appendChild(div);
        // slide in from top (or from last div position)
        selectSlide(div.id, 5);

    } else {
        // final form/summary of responses
        var selects = document.getElementsByTagName('select');
        var numRespones = selects.length;
        var responses = [];
        // get all the responses/values selected
        for(var i = 0; i < numRespones; i++) {
            var value = selects[i].options[selects[i].selectedIndex].value;
            responses.push(value);
        }
        // first response is main selection (dog vs cat), then list remaining attributes separated by , and a space
        var hrEle = document.createElement('hr');
        var summaryTxtNode = document.createTextNode('You have selected a ' + responses[0] + ' with the following characteristics: ' + String(responses.slice(1).join(', ')));
        // add to page
        $('summaryHolder').appendChild(hrEle);
        $('summaryHolder').appendChild(summaryTxtNode);
        $('summaryHolder').appendChild(hrEle.cloneNode());

        // end[dom.value]
        hold = end[selection.value]; // final value (use for button text!)
        // if user selects the default prompt, remove any elements that would be added to the page due to no matching end data value
        if(selection.value == '~ Please select a response ~') {
            removeAllChildNodes($('summaryHolder'));
            removeAllChildNodes($('resultHolder'));
        } else {
            var btn = document.createElement('button');
            btn.setAttribute('class', 'dataBtn');
            btn.id = 'getResultsBtn';
            btn.onclick = function() {
                // remove elements so that selections can no longer be made / changed
                removeAllChildNodes($('selectHolder'));
                removeAllChildNodes($('summaryHolder'));
                // Display matching images (pets)
                var filename = responses[0];
                // "./images/";
                for(var i = 1; i < numRespones; i++) {
                    filename += '_' + responses[i];
                }
                createImageElement(filename);
                // then print number of results (called from createImageElement()) and then build form (called from printNumResults())
            };
            // give button text based on end value
            btn.textContent = hold;
            // add to page
            $('summaryHolder').appendChild(btn);
        }
    }
}

/**********************************************************************
    Validation
**********************************************************************/
function validate() {
    var ret = true;

    // Check that all data was entered

    // first name
    if(document.getElementById('fn').value == '') {
        // turn input border red
        document.getElementById('fn').style.borderColor = 'red';
        ret = false;
    } else {
        // if it was red, turn black if now filled out
        document.getElementById('fn').style.borderColor = 'black';
    }

    // last name
    if(document.getElementById('ln').value == '') {
        // turn input border red
        document.getElementById('ln').style.borderColor = 'red';
        ret = false;
    } else {
        // if it was red, turn black if now filled out
        document.getElementById('ln').style.borderColor = 'black';
    }

    // email
    if(document.getElementById('email').value == '') {
        // turn input border red
        document.getElementById('email').style.borderColor = 'red';
        ret = false;
    } else {
        // if it was red, turn black if now filled out
        document.getElementById('email').style.borderColor = 'black';
    }

    if(ret) {
        // store cookie and/or localStorage
        storeData('firstName', $('fn').value);
        storeData('lastName', $('ln').value);
        storeData('email', $('email').value);
    }

    return ret;
}

/**********************************************************************
    Cookies and LocalStorage
**********************************************************************/

/* Test if cookies are enabled */
function testCookies() {
    // create cookie
    document.cookie="myTest=test";
    // test if cookie can be accessed and set cookieEnabled variable to true or false
    (document.cookie.indexOf("myTest") != -1) ? cookiesEnabled = true:cookiesEnabled = false;
}

// call function
testCookies();

var today = new Date();
var expiry = new Date(today.getTime() + 7 * 24 * 3600 * 1000); // + 7 days: (days/1) (hours/day) (minutes/hour) (seconds/minute) (miliseconds/second)

function setCookie(name, value) {
  document.cookie = name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
}

/* Store data (form inputs) in localStorage and as cookies if enabled, otherwise, just use localStorage */
function storeData(input, val) {
  if(cookiesEnabled) {
    setCookie(input, val);
    localStorage.setItem(input, val);
  } else {
    // localStorage
    localStorage.setItem(input, val);
  }
}