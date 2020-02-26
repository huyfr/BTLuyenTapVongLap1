function modSeven()
{
    let input = parseInt(document.getElementById("inputNumber").value);
    let count=0;
    let i=0;
    let sum=0;

    while (count<input)
    {
        if (i%7==0)
        {
            sum=sum+i;
            count++;
        }
        i+=7;
    }
    document.getElementById("result").innerHTML=sum;
}