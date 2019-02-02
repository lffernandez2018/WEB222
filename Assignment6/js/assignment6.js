/*
*
* WEB222 – Assignment #6
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: Leny Fe Fernandez Student ID: 120818174 Date: 2018-04-16
* 
********************************************************************************/

// set a global httpRequest object

var httpRequest;
if(window.XMLHttpRequest){
	httpRequest = new XMLHttpRequest();
}
else if (window.ActiveXObject){
	httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload = makeRequest(1);




function makeRequest(pageNum) {
	
    // TODO: create a variable "url" to store the request to 
	// the current pageNum, ie:
	// 		"https://reqres.in/api/users?page=1" // for page 1
	// 		"https://reqres.in/api/users?page=2" // for page 2
	// 		etc...
	
var url = "https://reqres.in/api/users?page=" + pageNum;


	
	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		    // Just for debugging. 
			console.log(httpRequest.responseText);
			
			// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: use the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			var htmltablebody = document.getElementById('data');

			//clear the contents of the table
			htmltablebody.innerHTML = ""; 
			for (var i = 0; i <jsData.data.length; i++){
				var trow = document.createElement("tr");
				var col_userId = document.createElement("td");
				var col_Fname = document.createElement("td");
				var col_Lname = document.createElement("td");
				var col_avatar = document.createElement("td");

				//create p and img element to store the data from jsData
				// and to be appended in the rows in the table
				var con_userId = document.createElement("p");
				var con_Fname = document.createElement("p");
				var con_Lname = document.createElement("p");
				var con_avatar = document.createElement("img");

				//store jsData data
				con_userId.textContent = jsData.data[i].id;
				con_Fname.textContent = jsData.data[i].first_name;
				con_Lname.textContent = jsData.data[i].last_name;
				con_avatar.src = jsData.data[i].avatar;

				//append child attributes
				col_userId.appendChild(con_userId);
				col_Fname.appendChild(con_Fname);
				col_Lname.appendChild(con_Lname);
				col_avatar.appendChild(con_avatar);

				//append to table elements
				trow.appendChild(col_userId);
				trow.appendChild(col_Fname);
				trow.appendChild(col_Lname);
				trow.appendChild(col_avatar);

				//append to <tbody> element with id= "data"
				htmltablebody.appendChild(trow);
			}

		} else {
			console.log('There was a problem with the request.');
		}
	}
}	