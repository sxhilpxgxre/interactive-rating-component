function display(){
    document.querySelector(".box").style.display="none";
    document.querySelector(".ty").style.display="block";
    let re=document.getElementsByName("r");
    for (i = 0; i < re.length; i++) {
        if (re[i].checked)
            document.getElementById("rate").innerHTML
                = re[i].value;
    }
}