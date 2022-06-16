var manu = document.getElementById('manu');
var options = document.getElementById('options');
var IsVisible = false;
function OpenManu(){
    manu.style.visibility="visible";
}

function CloseManu(){
    manu.style.visibility="hidden";
}


function ControlOptions(){
    if(IsVisible){
        IsVisible = false;
        options.style.visibility="hidden";
    }
    else{
        IsVisible= true;
        options.style.visibility="visible";
    }
}

function BirthdayCeleration(){
    confirm("Hey There I Hear Your Birthday Is On 10 July , That Means Its In Next Month Wish you Happy Birthday In Advance ");
}

window.document.onload= CheckDevice();

function CheckDevice(){
    var screenWidth = window.screen.width;
    var screenHight = window.screen.height;
    if(screenWidth>768){
       var body =  document.getElementById("body");
        // removing direct all code so no one can see aboutr it.     
        document.body.removeChild(body);
        // showing stats
        console.log(`This Screen is ${screenHight}px height x${screenWidth}px width. our Site Can Only Be loaded on 768px or below width`);


        // appending new element with stats.
        var newBody = document.createElement('div');

        newBody.innerHTML=`<p class="text-center text-info text-capitalize py-5 my-5"  ><i class="bi bi-emoji-frown-fill my-2 h1" ></i><br>This Screen is ${screenHight}px height * ${screenWidth}px width. our Site Can Only Be loaded on 768px or below width.</p>`;
        document.body.appendChild(newBody);
    }
    else{
        console.log("screen Width is ", screenWidth,"& height is ",screenHight);
    }

}