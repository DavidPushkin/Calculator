 send.addEventListener("click",calc);
function calc(){
    let a = dlina.value;
    let b = shirina.value;
    let c = visota.value;
    let v;
    v = a*b*c;
    result.innerHTML = v.toFixed(2);

}