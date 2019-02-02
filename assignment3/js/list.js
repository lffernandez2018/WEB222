//Student Name: Leny Fe Fernandez
//Date: 2018-03-08
//email: lffernandez@myseneca.ca
//list.js

// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function() {
    
        var fruitsContainer = document.querySelector("#fruitlist");
        var fruitorderlist = '<ol>';
    
        for (var i = 0; i < fruits.length; i++) 
        {
            fruitorderlist += '<li>' + fruits[i] + '</li>';
        }
        fruitorderlist += '</ol>';
        fruitsContainer.innerHTML += fruitorderlist;

        var directoryCOntainer = document.querySelector("#directorylist");
        var directoryorderlist = '<ul>';
        
        for (var x = 0; x < directory.length; x++)
        {
            directoryorderlist += '<li>' + directory[x].name + '</li>';
            if(directory[x].type == "directory")
            {
                 directoryorderlist += '<ul>';
                 for (var y = 0; y < directory[x].files.length; y++)
                {directoryorderlist += '<li>' + directory[x].files[y].name + '</li>';}
                directoryorderlist += '</ul>';

            }

            
        }
        directoryorderlist += '</ul>';
        directoryCOntainer.innerHTML += directoryorderlist;

};

