function freshman(){
    alert("check your domitory clicking site blow the button 'ok'");
}

function ok(){
    var name=document.getElementById("sel");
    name=name.options[name.selectedIndex].value;

    if (name=="revanclaw"){
        alert("Congratulations on admission! Click on the letter 'Revalclaw' at the top.");
    }
    else if (name=="slytherin"){
        alert("Congratulations on admission! Click on the letter 'Slytherin' at the top.");
    }
    else if (name=="hufflepuff"){
        alert("Congratulations on admission! Click on the letter 'Hufflepuff' at the top.");
    }
    else if(name =="gryffindor"){
        alert("Congratulations on admission! Click on the letter 'Gryffindor' at the top.");
    }
}

function red() {
    document.getElementById('red').style.color=red;
}

function blu() {
    document.getElementById('blu').style.color="blue";
}

function green() {
    document.getElementById('green').style.color="green";
}

function yello() {
    document.getElementById('yello').style.color="yellow";
}