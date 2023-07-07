function regex()
{
    let pattern =/[a-zA-Z]/g; 
    let input="HyDa";
    alert(input.match(pattern));
}

function newregex()
{
    let pattern1=/[A-Za-z0-9_]+@[a-z]+\.[a-z/]+/g;
    let input1=document.getElementById("un").value; 
    alert(input1.match(pattern1));
    if(input1.match(pattern1)==null)
    {
    document.getElementById("p").innerHTML='Not validing';
    }
    else{
        document.getElementById("p").innerHTML='Valid';
    }
}


// if(pattern.match(input)==-1)
// {

//     document.getElementById("p1").innerHTML='Pattern not matching';
//     document.getElementById("p1").style.display="block";
// }
// else{
//     alert(pattern.search(input));
// }
// }