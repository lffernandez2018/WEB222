//Student Name: Leny Fe Fernandez
//Date: 2018-03-08
//email: lffernandez@myseneca.ca
//audio.js

// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};
window.onload= function(){
    var audioContainer= document.querySelector("#audiolist");
    var audios = "";

    if(audio.controls)
    {
        audios = "<audio controls>";
    }
    
    for (var i= 0; i<audio.source.length; i++)
    {
        audios += "<source src='"+audio.source[i].src+"' type= '"+audio.source[i].type +"'";
    }
    audios += "Your browser does not support the audio tag used. </audio>";
    audioContainer.innerHTML = audios;
};