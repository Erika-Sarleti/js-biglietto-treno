let userAge= prompt("Quanti anni hai?");
let travel= prompt("Quanti Km devi percorrere?");
const kmPrice= 0.21;
const discountMinors= 20;
const discountElders= 40;
let priceRes =document.getElementById("price-result");

if (userAge < 18){
    priceRes.innerHTML = `${((travel*kmPrice) - (travel*kmPrice * discountMinors / 100)).toFixed(2)}€`;
}else if (userAge >= 65){
        priceRes.innerHTML = `${((travel*kmPrice) - (travel*kmPrice * discountElders / 100)).toFixed(2)}€`;
}else{
    priceRes.innerHTML = `${(travel*kmPrice).toFixed(2)}€`;
}
