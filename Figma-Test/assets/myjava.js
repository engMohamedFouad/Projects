function display1(){
    var item1=document.getElementById("t1");
    var bt1=document.getElementById("bt1");
    if(item1.style.display==="none"){
        item1.style.display="block";
        bt1.style.backgroundColor= "orange";
    }
var item2=document.getElementById("t2");
var bt2=document.getElementById("bt2");
var item3=document.getElementById("t3");
var bt3=document.getElementById("bt3");
bt1.style.backgroundColor= "orange";
item2.style.display="none";
bt2.style.backgroundColor="rgba(188, 208, 229, 0.496913)";
item3.style.display = "none";
bt3.style.backgroundColor="rgba(188, 208, 229, 0.496913)";
                }

function display2(){
    var item2=document.getElementById("t2");
    var bt2=document.getElementById("bt2");
    if(item2.style.display==="none"){
        item2.style.display="block"
        bt2.style.backgroundColor= "orange";
    }
    var item1=document.getElementById("t1");
    var bt1=document.getElementById("bt1");
    var item3=document.getElementById("t3");
    var bt3=document.getElementById("bt3");
    item1.style.display="none";
    bt1.style.backgroundColor= "rgba(188, 208, 229, 0.496913)";
    item3.style.display = "none";
    bt3.style.backgroundColor= "rgba(188, 208, 229, 0.496913)";
    }
    function display3(){
        var item3=document.getElementById("t3");
        var bt3=document.getElementById("bt3");
    if(item3.style.display==="none"){
        item3.style.display="block"
        bt3.style.backgroundColor= "orange";
    }
        var item1=document.getElementById("t1");
        var bt1=document.getElementById("bt1");
        var item2=document.getElementById("t2");
        var bt2=document.getElementById("bt2");
        item1.style.display="none";
        bt1.style.backgroundColor= "rgba(188, 208, 229, 0.496913)";
        item2.style.display = "none";
        bt2.style.backgroundColor= "rgba(188, 208, 229, 0.496913)";
        }