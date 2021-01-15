function init(){
    $("#lblPhone").text("Phone: 123-456-7890");
    $("#lblEmail").text("Email: email@email.com");
    $("#show").click(showInfo);
    $("#hide").click(hideInfo);
    initMap();
}

function initMap(){
    // 39.03971367712422, -95.67954038739728
    const place = {
        lat: 39.03971367712422, 
        lng: -95.67959403157728
    };

    //create the map
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: place,
    });

    //create marker
    const marker = new google.maps.Marker({
        position: place,
        map: map
    })
}



function showInfo(){
    $(".classInfo").show();
}

function hideInfo(){
    $(".classInfo").hide();
}

window.onload = init;

/**
 * Contact form:
 * As a user I want to send the owner of the system a message.
 * 
 * Ask for:
 * Name
 * Email
 * Message
 * 
 * Functionality:
 * 
 * When the user clicks submit message button, create a message object
 * Log it on the console.log
 */

 function submit(){
     let formName=document.getElementById("contactName").value;
     let formEmail=document.getElementById("contactEmail").value;
     let formMessage=document.getElementById("contactMessage").value;

     let theMessage=new Message(formName,formEmail,formMessage)
 }
