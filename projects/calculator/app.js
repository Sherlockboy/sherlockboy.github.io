function pageLoad(){
    // var numsAndOps = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "×", "÷", "."];

    // for(key in numsAndOps){
    //     document.getElementById(key).onclick = get;
    // }
    document.getElementById("1").onclick = get;
    document.getElementById("2").onclick = get;
    document.getElementById("3").onclick = get;
    document.getElementById("4").onclick = get;
    document.getElementById("5").onclick = get;
    document.getElementById("6").onclick = get;
    document.getElementById("7").onclick = get;
    document.getElementById("8").onclick = get;
    document.getElementById("9").onclick = get;
    document.getElementById("0").onclick = get;
    document.getElementById("+").onclick = get;
    document.getElementById("-").onclick = get;
    document.getElementById("×").onclick = get;
    document.getElementById("÷").onclick = get;
    document.getElementById(".").onclick = get;

    document.getElementById("AC").onclick = cls;
    document.getElementById("=").onclick = calculate;

    var expression="";
    var regExp=/(\+|\-|\×|\÷|\.)/;
    var rx=/(\+|\-|\×|\÷)/;

    function get(val){
        val = this.id;
        if(expression=="" && val.match(regExp))
            display("0");
        else if(expression.charAt(expression.length-1).match(regExp) && val.match(regExp))
            display(expression);
        else if(expression.length<=12){
            var temp=expression;
            temp += val;
            if(isValid(temp)){
                expression+=val;
                display(expression);        
            }
        }
    }

    function calculate(){
        var operator = (expression.match(rx))[0];
        var num1 = Number(expression.substring(0, expression.indexOf(operator)));
        var num2 = Number(expression.substring(expression.indexOf(operator)+1, expression.length));
        expression = (calc(num1, num2, operator)).toString();
        display(expression);
    }

    function isValid(exp){
        var count=0;
        for(var i=0; i<exp.length; i++){
            if(exp.charAt(i).match(rx))
                count++;
        }
        if(count<=1)
            return true;
        else
            return false;
    }

    function cls(){
        expression = "";
        display("0");
    }

    function display(tx){
        document.getElementById("output").innerHTML = tx;
    }

    function calc(n1,n2,op){
        switch(op){
            case "+":
                return n1+n2;
                break;
            case "-":
                return n1-n2;
                break;
            case "×":
                return n1*n2;
                break;
            case "÷":
                return n1/n2;
                break;
            default:
                break;
        }
    }
}

window.onload = pageLoad;

// Kobilov Khurshidbek Sherlockboy