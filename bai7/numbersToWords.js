
function displayTranslate() {
    let input = parseInt(document.getElementById("inputNumber").value);
    let result="";

    for (let i=1; i <= input; i++)
    {
        if (i % 15 == 0)
            result+=" FizzBuzz ";
        else if (i % 3 == 0)
            result+=" Fizz ";
        else if (i % 5 == 0)
            result+=" Buzz ";
        else
            result+="&nbsp;"+i;
    }
   document.getElementById("result").innerHTML=result;
}