let site = prompt("Выберите тип сайта: 1 - Визитка, 2 - Интернет-магазин, 3 - Корпоративный");
prompt("...");
let design = prompt("Выберите дизайн сайта: 1 - Интерфейсный, 2 - Динамический, 3 - Полиграфический");
let adaptivityNum = prompt("Выберите адаптивность сайта: 1 - Адаптивный, 2 - Жесткий, 3 - Комбинированный");

/*for(let i = 0; i < 4; i++){
    if(i == 0){
        site = prompt("Выберите тип сайта: 1 - Визитка, 2 - Интернет-магазин, 3 - Корпоративный");
    }
    else if (i == 1){
        prompt("Сломаное сообщение");
    }
    else if(i == 2){
        design = prompt("Выберите дизайн сайта: 1 - Интерфейсный, 2 - Динамический, 3 - Полиграфический");
    }
    else if(i == 3){
        adaptivityNum = prompt("Выберите адаптивность сайта: 1 - Адаптивный, 2 - Жесткий, 3 - Комбинированный");
    }
    console.log(i);
}*/


let vizit = 1000, intenetShop = 2000, corp = 2500, interface = 3000, dynamic = 3500, poligraphic = 1500, adaptiv = 5000, hard = 2000, combo = 3000, price = 0;
function calculate(){
    if(site === "1"){
        price += vizit;
    }
    else if(site === "2"){
        price += intenetShop;
    }
    else if(site === "3"){
        price += corp;
    }
    console.log(price);
    /*------------------------------------*/
    if(design === "1"){
        price += interface;
    }
    else if(design === "2"){
        price += dynamic;
    }
    else if(design === "3"){
        price += poligraphic;
    }
    console.log(price);
    /*------------------------------------*/
    if(adaptivityNum === "1"){
        price += adaptiv;
    }
    else if(adaptivityNum === "2"){
        price += hard;
    }
    else if(adaptivityNum === "3"){
        price += combo;
    }
    console.log(price);
}
calculate();

alert("Итоговая стоимость = "+(price)+"руб.");

