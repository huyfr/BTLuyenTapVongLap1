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
function showFibonacci()
{
    let input = document.getElementById("inputNumber").value;
    let result="";
    let first=0;

    if (input<0)
    {
        alert("Vui long nhap lai");
        document.getElementById("inputNumber").value="";
        document.getElementById("result").innerHTML="";
    }
    else
    {
    for(let i=0; i<input; i++) {
        if (first == 0)
        {
            if (fibonacci(i) % 5 == 0)
            {
                first = fibonacci(i);
            }
        }
        result=result+"&nbsp;"+fibonacci(i);
    }
        document.getElementById("result").innerHTML="Day fibonacci: "+result;
        document.getElementById("modFive").innerHTML="So dau tien trong day fibonacci chia het cho 5: "+first;
    }
}