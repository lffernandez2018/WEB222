
/********************************************************************************* 
*
* WEB222 – Assignment #4a
*
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: Leny Fe Fernandez Student ID: 120818174 Date: 2018-03-18
* 
********************************************************************************/

var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

function loadTableWithFilters()
{
    var myContainer = document.querySelector("#main-table-body");
    myContainer.innerHTML = "";

    //loop through petData array
    for(var i = 0; i <petData.length; i++)
    {
        if ((filterType === "dog" && petData[i].type === "dog") || 
            (filterType === "cat" && petData[i].type === "cat") || 
            (filterType === "bird" && petData[i].type === "bird") || 
            (filterType === ""))
        {
                if (petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax)
                    {
                        var tr = document.createElement("tr");
                        var td = document.createElement("td");
                        var img = document.createElement("img");
                            img.src = petData[i].image.src;
                            img.alt = petData[i].image.alt;
                            img.height = petData[i].image.height;
                            img.width = petData[i].image.width;
                          td.appendChild(img);
                        var td_a = document.createElement("td");
                        var h4 = document.createElement("h4");
                        var h4_text = document.createTextNode(petData[i].name);
                            h4.appendChild(h4_text);
                        var p = document.createElement("p");
                            p.innerHTML = petData[i].description;
                        var span = document.createElement("span");
                        var span_text = document.createTextNode("Age: ");
                        var span_texta = document.createTextNode(petData[i].age);
                        var span_textb = document.createTextNode(" years old.");
                            span.appendChild(span_text);
                            span.appendChild(span_texta);
                            span.appendChild(span_textb);

                            td_a.appendChild(h4);
                            td_a.appendChild(p);
                            td_a.appendChild(span);

                            tr.appendChild(td);
                            tr.appendChild(td_a);

                            myContainer.appendChild(tr);

                            
                    }
        }

    }
}
function filterDog(){
    filterType = "dog";
    loadTableWithFilters();
}
function filterCat(){
    filterType = "cat";
    loadTableWithFilters();
}
function filterBird(){
    filterType = "bird";
    loadTableWithFilters();
}
function filter_zero_1(){
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}
function filter_1_3(){
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}
function filter_4_plus(){
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
function filterAllPets(){
    filterType = ""
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}
window.onload = function()
{
    loadTableWithFilters();
}