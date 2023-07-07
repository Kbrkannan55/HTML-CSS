function f1()
    {
        document.writeln("Hello");  //danger 
    }
    

function f2()
{
    window.alert("Hey");
}

function f3()
{
    const x=5;
    const y=5;                                              //Dont redeclare the variables with const
    document.getElementById("p2").innerHTML=x+y;
    {
        x=5,y=2;
        document.getElementById("p3").innerHTML=x+y;
    }
}

function f4(a,b)
{
    const stud={name:'a', age:21, email:'kbrkannan55@gmail.com'};
    document.getElementById("p4").innerHTML=stud.name +" "+ stud.age;
    stud.name="Boo";

}

function f5(){
    num=['1','2','3','4'];
    document.getElementById("p5").innerHTML=num[2];
    
}

function f6()
{
    const num1=new Array(100,200,300,400,500);
    alert(num1[3]);

    num1=[];
    alert(num1);
}

