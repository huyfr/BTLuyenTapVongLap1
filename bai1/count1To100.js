function count() {
    let result = "";

    for (let i=1; i<100; i++)
    {
        result = result + "&nbsp;" + i;
    }
    document.getElementById("result").innerHTML = result;
    alert("Da hoan thanh");
}