function play()
{
    let rangeStart = parseInt(prompt("Nhap vao khoang bat dau muon doan: "));
    console.log(rangeStart);
    let rangeEnd = parseInt(prompt("Nhap vao khoang ket thuc muon doan: "));
    console.log(rangeEnd);
    let random = Math.floor(Math.random()*(rangeEnd-rangeStart)+rangeStart);
    console.log(random);
    for(let i=0; i<3; i++)
    {
        let diagnose = parseInt(prompt("Nhap vao gia tri ban doan: "));
        if (diagnose===random)
        {
            alert("Chuc mung ban da chien thang");
            break;
        }
        if (diagnose>random)
        {
            alert("So ban chon lon hon so random");
            continue;
        }
        if (diagnose<random)
        {
            alert("So ban chon nho hon so random");
            continue;
        }
    }
}