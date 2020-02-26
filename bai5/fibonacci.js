function fibonacci(n)
{
    let number=0;
    if(n==0)
    {
        return(number);
    }
    if(n==1)
    {
        number=number+1;
        return(number);
    }
    else
    {
        return(fibonacci(n - 1) + fibonacci(n - 2));
    }
}
function showFibonacci() {
    let input = document.getElementById("inputNumber").value;
    let result=0;
    if (input<0)
    {
        alert("Vui long nhap lai");
        document.getElementById("inputNumber").value="";
        document.getElementById("result").innerHTML="";
    }
    else
    {
    for(let i=0; i<input; i++) {
        result= result+fibonacci(i);
    }
    document.getElementById("result").innerHTML="Tong "+input+" so fibonacci: "+result;
    }
}