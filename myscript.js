let userAge= prompt("Quanti anni hai?");
let travel= prompt("Quanti Km devi percorrere?");
let kmPrice= 0.21;
let priceRes =document.getElementById("price-result");

if (userAge < 18){
    priceRes.innerHTML = `${((travel*kmPrice) - (travel*kmPrice * 20 / 100)).toFixed(2)}€`;
}else if (userAge >= 65){
        priceRes.innerHTML = `${((travel*kmPrice) - (travel*kmPrice * 40 / 100)).toFixed(2)}€`;
}else{
    priceRes.innerHTML = `${(travel*kmPrice).toFixed(2)}€`;
}
