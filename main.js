function freshman(){
    alert("check your domitory clicking site blow the button 'ok'");
}

function ok(){
    var name=document.getElementById("name").value;
    var domi=document.getElementsByName("domi").value;

    if (domi=="revanclaw")
    {alert("Congratulations on admission!"<br>"Click on the letter 'Revenclaw' at the top.");}
    else if (domi=="slytherin")
    {alert("Congratulations on admission!"<br>"Click on the letter 'Slytherin' at the top.");}
    else if (domi=="hufflepuff")
    {alert("Congratulations on admission!"<br>"Click on the letter 'Hufflepuff' at the top.");}
    else if(domi=="gryffindor")
    {alert("Congratulations on admission!"<br>"Click on the letter 'Gryffindor' at the top.");}
}