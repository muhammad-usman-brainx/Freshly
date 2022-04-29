const months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const containerr = document.getElementById('dates-con');
localStorage.setItem('count',0);
localStorage.setItem('remaining',0);
localStorage.setItem('ogPrice',0);
localStorage.setItem('cutPrice',0);
let min = parseInt(localStorage.getItem('min'));
let max = parseInt(localStorage.getItem('max'));
let count = parseInt(localStorage.getItem('count'));
let remaining = parseInt(localStorage.getItem('remaining'));
remaining = min;
let OrigPrice = parseInt(localStorage.getItem('ogPrice'));
let Discount = parseInt(localStorage.getItem('cutPrice'));
let prev;
const itemsSelected = {};
const images_food = ['food1.PNG','food2.PNG','food3.PNG','food4.PNG'];
const mealsData = [
    {
        "image": "food1.PNG",
        "heading": "Steak PepperCorn",
        "subheading": "500 cal | Gluten Free | Single Serv"
    },{
        "image": "food2.PNG",
        "heading": "HomeStyle Chicken",
        "subheading": "500 cal | Gluten Free | Single Serv"
    },{
        "image": "food3.PNG",
        "heading": "SausageBaked Penne",
        "subheading": "500 cal | Gluten Free | Single Serv"
    },{
        "image": "food4.PNG",
        "heading": "CaulliFlower Shell Beef",
        "subheading": "500 cal | Gluten Free | Single Serv"
    },
    ,{
        "image": "food1.PNG",
        "heading": "Protein Pack Chicken",
        "subheading": "500 cal | Gluten Free | Single Serv"
    },{
        "image": "food2.PNG",
        "heading": "Pork Carnitas",
        "subheading": "500 cal | Gluten Free | Single Serv"
    },{
        "image": "food3.PNG",
        "heading": "Sesame Ginger Chicken",
        "subheading": "500 cal | Gluten Free | Single Serv"
    },{
        "image": "food4.PNG",
        "heading": "White bean Bowl",
        "subheading": "500 cal | Gluten Free | Single Serv"
    },
    
];


function fillFood(){
    const container = document.getElementById('added-food');
    const containDiv = document.createElement('div');
    containDiv.classList.add('container-fluid');
    containDiv.classList.add('d-flex');
    containDiv.classList.add('justify-content-center');
    containDiv.classList.add('images-food');
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    rowDiv.classList.add('mb-3');
    rowDiv.classList.add('mt-1');
    const containDiv2 = document.createElement('div');
    containDiv2.classList.add('container-fluid');
    containDiv2.classList.add('d-flex');
    containDiv2.classList.add('justify-content-center');
    containDiv2.classList.add('images-food');
    const rowDiv2 = document.createElement('div');
    rowDiv2.classList.add('row');
    rowDiv2.classList.add('mb-3');
    rowDiv2.classList.add('mt-1');

    for(let i = 0; i < 4; i++){
        const mainImageDiv = document.createElement('div');
        mainImageDiv.classList.add('col-lg-3');
        mainImageDiv.classList.add('col-6');
        mainImageDiv.classList.add('food-img-padding');

        const linkContain = document.createElement('a');
        linkContain.setAttribute('href','#');
        linkContain.classList.add('a-images');
        linkContain.classList.add('d-inline-flex');
        linkContain.classList.add('flex-column');

        const foodzoom = document.createElement('div');
        foodzoom.classList.add('food-zoom');
        const img = document.createElement('img');
        img.classList.add('food-img');
        img.setAttribute('src',mealsData[i].image);
        foodzoom.append(img);

        const spanHead = document.createElement('span');
        spanHead.classList.add('d-inline-block');
        spanHead.classList.add('mt-1');
        spanHead.classList.add('text-dark');
        spanHead.classList.add('food-img-heading');
        spanHead.innerText = mealsData[i].heading;

        const spansubHead = document.createElement('span');
        spansubHead.classList.add('text-muted');
        spansubHead.classList.add('mt-1');
        spansubHead.classList.add('food-img-subheading');
        spansubHead.innerText = mealsData[i].subheading;

        linkContain.append(foodzoom);
        linkContain.append(spanHead);
        linkContain.append(spansubHead);
        mainImageDiv.append(linkContain);
        rowDiv.append(mainImageDiv);
    }
    for(let i = 0; i < 4; i++){
        const mainImageDiv = document.createElement('div');
        mainImageDiv.classList.add('col-lg-3');
        mainImageDiv.classList.add('col-6');
        mainImageDiv.classList.add('food-img-padding');

        const linkContain = document.createElement('a');
        linkContain.setAttribute('href','#');
        linkContain.classList.add('a-images');
        linkContain.classList.add('d-inline-flex');
        linkContain.classList.add('flex-column');

        const foodzoom = document.createElement('div');
        foodzoom.classList.add('food-zoom');
        const img = document.createElement('img');
        img.classList.add('food-img');
        img.setAttribute('src',mealsData[i].image);
        foodzoom.append(img);

        const spanHead = document.createElement('span');
        spanHead.classList.add('d-inline-block');
        spanHead.classList.add('mt-1');
        spanHead.classList.add('text-dark');
        spanHead.classList.add('food-img-heading');
        spanHead.innerText = mealsData[i].heading;

        const spansubHead = document.createElement('span');
        spansubHead.classList.add('text-muted');
        spansubHead.classList.add('mt-1');
        spansubHead.classList.add('food-img-subheading');
        spansubHead.innerText = mealsData[i].subheading;

        linkContain.append(foodzoom);
        linkContain.append(spanHead);
        linkContain.append(spansubHead);
        mainImageDiv.append(linkContain);
        rowDiv2.append(mainImageDiv);
    }
    containDiv2.append(rowDiv2);
    containDiv.append(rowDiv);
    container.append(containDiv);
    container.append(containDiv2);
}



$(document).ready(function(){
    $('#items-count-btn').click(()=>{
        if(count < min){
            $('#toast1').toast('show');
            $('#toast-text').text('Add '+ remaining + ' to continue');
        }
    })
});

$(document).ready(function(){
    $('#showmodal').click(()=>{
            $('#maintoast').toast('show');
    })
});


function fourfive(){
    localStorage.setItem("min", 4);
    localStorage.setItem("max", 5);
    window.location.replace('index2.html');
}

function sixseven(){
    localStorage.setItem("min", 6);
    localStorage.setItem("max", 7);
 
}
function eightnine(){
    localStorage.setItem("min", 8);
    localStorage.setItem("max", 9);
  
}
function teneleven(){
    localStorage.setItem("min", 10);
    localStorage.setItem("max", 11);
    
}
function twelve(){
    localStorage.setItem("min", 12);
    localStorage.setItem("max", 12);
  
}



containerr.onscroll = ()=>{
    document.getElementById('scroll-upper').classList.remove('scroll-upper');

}

function displaycustomer(){
    const el = document.getElementById('customer-support');
    el.style.display = 'block';
    el.classList.add('customer-display');
}


function DateNext(){
    localStorage.setItem('selDate',prev.innerText);
}

function addDates(){
    const curr = new Date();
    const startdate = new Date();
    let day = curr.getDay();
    let diff = 7- day + 1;


    startdate.setDate(curr.getDate() + diff);
    const firstDate = document.getElementById('first-del-date');
    firstDate.innerText = 'First Delivery Date, ' + days[startdate.getDay()] + ", " + months[startdate.getMonth()] + " " + startdate.getDate();

    for(let i =0;i<10;i++){
        const elem = document.createElement('div');
        elem.classList.add('dates');
        elem.classList.add('white-bg');
        elem.setAttribute('id',i.toString());
        elem.innerText = days[startdate.getDay()] + ", " + months[startdate.getMonth()] + " " + startdate.getDate();

        if(i==0){
            elem.focus();
            elem.classList.add('border-blue');
            elem.classList.add('bg-con-color');
            prev = elem;
        }

        containerr.append(elem);
        startdate.setDate(startdate.getDate() + 1);

        elem.addEventListener('click',()=>{
            if(prev){
                prev.classList.remove('border-blue');
                prev.classList.remove('bg-con-color');
            }
            elem.focus();
            elem.classList.add('border-blue');
            elem.classList.add('bg-con-color');
            firstDate.innerText = 'First Delivery Date, ' + elem.innerText;
            prev = elem;
        })

    }

}



function fillmealsPage(){

    document.getElementById('items-count-btn').innerText = 'Add ' + min +' To Continue';
    document.getElementById('items-count-btn').classList.add('cart-nxt-btn');

    const container = document.getElementById('first-row');
    const container2 = document.getElementById('scd-row');
    const container3 = document.getElementById('thd-row');
    for(let i =0;i< 4;i++){
        const outerdiv = document.createElement('div');
        outerdiv.classList.add('col-lg-3');
        outerdiv.classList.add('col-md-6');
        outerdiv.classList.add('col-sm-12');
        outerdiv.classList.add('food-img-padding1');
        const innera = document.createElement('a');
        innera.setAttribute('href','#');
        innera.classList.add('a-images');
        innera.classList.add('f-column');


        const imagezoon = document.createElement('div');
        imagezoon.classList.add('food-zoom1');
        const imagefood = document.createElement('img');
        imagefood.setAttribute('src',mealsData[i].image);
        imagefood.classList.add('food-img1');
        imagezoon.append(imagefood);
        const spanDiv = document.createElement('div');
        spanDiv.classList.add('w-100');
        const heading = document.createElement('span');
        heading.classList.add('d-inline-block');
        heading.classList.add('mt-1');
        heading.classList.add('text-dark');
        heading.classList.add('food-img-heading1');
        
        heading.innerText = mealsData[i].heading;
        itemsSelected[mealsData[i].heading] = 0;
        const subheading = document.createElement('span');
        subheading.classList.add('mt-1');
        subheading.classList.add('text-muted');
        subheading.classList.add('food-img-subheading1');
        subheading.innerText = mealsData[i].subheading;
        spanDiv.append(heading);
        spanDiv.append(subheading);

        const plusbtn = document.createElement('div');
        plusbtn.classList.add('mt-3');
        plusbtn.classList.add('plusbtndiv');
        const buttonn = document.createElement('button');
        buttonn.innerText = '+'
        buttonn.classList.add('btn');
        buttonn.classList.add('btn-primary');
        buttonn.classList.add('add-btn');
        plusbtn.append(buttonn);

        const divbtnheading = document.createElement('div');
        divbtnheading.classList.add('d-flex');
        divbtnheading.classList.add('flex-column');
        
        divbtnheading.classList.add('w-100');
        

        innera.append(imagezoon);
        outerdiv.append(innera);
        divbtnheading.append(spanDiv);
        divbtnheading.append(plusbtn);
        outerdiv.append(divbtnheading);
        container3.append(outerdiv);
        //container2.append(outerdiv);


        

        buttonn.addEventListener('click',()=>{
            count++;
            document.getElementById('clearallup').classList.remove('d-none');
            document.getElementById('items-count').innerText = count.toString();
            remaining = localStorage.getItem('min') - count;
            itemsSelected[heading.innerText] += 1;
            localStorage.setItem('itemsFood',JSON.stringify(itemsSelected));
            if(count < min){
                document.getElementById('items-count-btn').innerText = 'Add ' + remaining +' To Continue';
                document.getElementById('items-count-btn').classList.add('cart-nxt-btn');
                document.getElementById('items-count-btn').classList.remove('cart-nxt-btn2');
            }
            else
            {
                document.getElementById('items-count-btn').innerText = 'Next';
                document.getElementById('items-count-btn').classList.add('cart-nxt-btn2');
                document.getElementById('items-count-btn').classList.remove('cart-nxt-btn');

            }
            //document.getElementById
            OrigPrice += 10.80;
            document.getElementById('ogprice').innerText = '$'+OrigPrice.toPrecision(4).toString();
            const containerFood = document.getElementById('food-items-added');
            const containerFood2 = document.getElementById('scrolling-part');


            const contain = document.createElement('div');
            contain.classList.add('container');
            const containIn = document.createElement('div');
            containIn.classList.add('d-flex');
            containIn.classList.add('row');
            containIn.classList.add('food-item');
            containIn.classList.add('mt-3');

            const contain2 = document.createElement('div');
            contain2.classList.add('container');
            const containIn2 = document.createElement('div');
            containIn2.classList.add('d-flex');
            containIn2.classList.add('row');
            containIn2.classList.add('food-item');
            containIn2.classList.add('mt-3');


            const divimage = document.createElement('div');
            divimage.classList.add('col-5');
            divimage.classList.add('zero-pad');
            const containImage = document.createElement('img');
            containImage.classList.add('mx-2');
            containImage.classList.add('mt-1');
            containImage.classList.add('added-img');
            containImage.setAttribute('src','food1.PNG');
            containImage.setAttribute('alt','food');
            divimage.append(containImage);

            const divimage2 = document.createElement('div');
            divimage2.classList.add('col-5');
            divimage2.classList.add('zero-pad');
            const containImage2 = document.createElement('img');
            containImage2.classList.add('mx-2');
            containImage2.classList.add('mt-1');
            containImage2.classList.add('added-img');
            containImage2.setAttribute('src','food1.PNG');
            containImage2.setAttribute('alt','food');
            divimage2.append(containImage2);


            const divP = document.createElement('div');
            divP.classList.add('col-5');
            divP.classList.add('zero-pad');
            const foodname = document.createElement('p');
            foodname.classList.add('mx-2');
            foodname.classList.add('food-item-text');
            foodname.innerText = heading.innerText;
            divP.append(foodname);

            const divP2 = document.createElement('div');
            divP2.classList.add('col-5');
            divP2.classList.add('zero-pad');
            const foodname2 = document.createElement('p');
            foodname2.classList.add('mx-2');
            foodname2.classList.add('food-item-text');
            foodname2.innerText = heading.innerText;
            divP2.append(foodname2);



            const divButton = document.createElement('div');
            divButton.classList.add('col-2');
            divButton.classList.add('zero-pad');
            divButton.classList.add('d-flex');
            divButton.classList.add('flex-column');

            const divButton2 = document.createElement('div');
            divButton2.classList.add('col-2');
            divButton2.classList.add('zero-pad');
            divButton2.classList.add('d-flex');
            divButton2.classList.add('flex-column');



            const plus = document.createElement('button');
            plus.classList.add('plus-minus-btn');
            plus.classList.add('text-primary');
            plus.innerText ='+';
            const minus = document.createElement('button');
            minus.classList.add('plus-minus-btn');
            minus.classList.add('text-muted');
            minus.innerText = '-';

            const plus2 = document.createElement('button');
            plus2.classList.add('plus-minus-btn');
            plus2.classList.add('text-primary');
            plus2.innerText ='+';
            const minus2 = document.createElement('button');
            minus2.classList.add('plus-minus-btn');
            minus2.classList.add('text-muted');
            minus2.innerText = '-';



            divButton.append(plus);
            divButton.append(minus);
            containIn.append(divimage);
            containIn.append(divP);
            containIn.append(divButton);
            contain.append(containIn);

            divButton2.append(plus2);
            divButton2.append(minus2);
            containIn2.append(divimage2);
            containIn2.append(divP2);
            containIn2.append(divButton2);
            contain2.append(containIn2);

            
            containerFood.insertBefore(contain,document.getElementById('food-items-added').children[count-1]);
            containerFood2.classList.add('text-dark');
            containerFood2.insertBefore(contain2,document.getElementById('scrolling-part').children[count-1]);


            if(count == min){
                document.getElementById('saving-line').innerText = 'Add 2 more meals to save $10.80';
            }
            else if(count == max){
                document.getElementById('saving-line').innerText = 'Add 1 more meal to save $10.80';
            }
            else if(count > max){
                document.getElementById('saving-line').innerText = 'The more you\'ll add, the more you save ';
                document.getElementById('cutprice').innerText = OrigPrice.toPrecision(4).toString();
                document.getElementById('ogprice').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                document.getElementById('saved-amount').classList.remove('d-none');
                document.getElementById('savedPrice').innerText = 'You saved ' + (OrigPrice - (OrigPrice - (OrigPrice/10))).toPrecision(4).toString();
            }
            else{
                document.getElementById('saving-line').innerText = '';
            }

            if(count > 0){
                document.getElementById('orderSummary').classList.remove('d-none');
                document.getElementById('nummeals').innerText = count + ' meals';
                document.getElementById('mealsprice').innerText ='$' + OrigPrice.toPrecision(4).toString();
                document.getElementById('subtotal').innerText = '$'+ OrigPrice.toPrecision(4).toString();
                document.getElementById('orderSummary2').classList.remove('d-none');
                document.getElementById('nummeals2').innerText = count + ' meals';
                document.getElementById('mealsprice2').innerText ='$' + OrigPrice.toPrecision(4).toString();
                document.getElementById('subtotal2').innerText = '$'+ OrigPrice.toPrecision(4).toString();
                if(count > max){
                    document.getElementById('discountedsummary').classList.remove('d-none');
                    document.getElementById('nummealsdiscount').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('discountedsummary2').classList.remove('d-none');
                    document.getElementById('nummealsdiscount2').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice2').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal2').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                }
            }
            else{
                document.getElementById('orderSummary').classList.add('d-none');
                document.getElementById('orderSummary2').classList.add('d-none');
            }
            

            

            minus.addEventListener('click',()=>{
                
                containerFood.removeChild(contain);
                count--;
                itemsSelected[heading.innerText] -= 1;
                localStorage.setItem('itemsFood',JSON.stringify(itemsSelected));
                document.getElementById('items-count').innerText = count.toString();
                remaining++;
                if(count < min){
                    document.getElementById('items-count-btn').innerText = 'Add ' + remaining +' To Continue';
                    document.getElementById('items-count-btn').classList.add('cart-nxt-btn');
                    document.getElementById('items-count-btn').classList.remove('cart-nxt-btn2');
                }else{
                    document.getElementById('items-count-btn').innerText = 'Next';
                    document.getElementById('items-count-btn').classList.add('cart-nxt-btn2');
                    document.getElementById('items-count-btn').classList.remove('cart-nxt-btn');

                }

                OrigPrice -= 10.80;
                document.getElementById('ogprice').innerText = '$'+OrigPrice.toPrecision(4).toString();
                document.getElementById('nummeals').innerText = count + ' meals';
                document.getElementById('mealsprice').innerText ='$' + OrigPrice.toPrecision(4).toString();
                document.getElementById('subtotal').innerText = '$'+ OrigPrice.toPrecision(4).toString();
                if(count == 0){
                    document.getElementById('orderSummary').classList.add('d-none');
                    document.getElementById('orderSummary2').classList.add('d-none');
                    document.getElementById('clearallup').classList.add('d-none');
                    document.getElementById('ogprice').innerText = '';
                }
                if(count == min){
                    document.getElementById('saving-line').innerText = 'Add 2 more meals to save $10.80';
                }
                else if(count == max){
                    document.getElementById('saving-line').innerText = 'Add 1 more meal to save $10.80';
                    document.getElementById('cutprice').innerText = '';
                    document.getElementById('saved-amount').classList.add('d-none');
                    document.getElementById('savedPrice').innerText = '';
                    document.getElementById('discountedsummary').classList.add('d-none');
                }
                else if(count > max){
                    document.getElementById('saving-line').innerText = 'The more you\'ll add, the more you save ';
                    document.getElementById('cutprice').innerText = OrigPrice.toPrecision(4).toString();
                    document.getElementById('ogprice').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('saved-amount').classList.remove('d-none');
                    document.getElementById('savedPrice').innerText = 'You saved ' + (OrigPrice - (OrigPrice - (OrigPrice/10))).toPrecision(4).toString();

                    document.getElementById('nummealsdiscount').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('nummeals').innerText = count + ' meals';
                    document.getElementById('mealsprice').innerText ='$' + OrigPrice.toPrecision(4).toString();
                    document.getElementById('nummealsdiscount2').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice2').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal2').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('nummeals2').innerText = count + ' meals';
                    document.getElementById('mealsprice2').innerText ='$' + OrigPrice.toPrecision(4).toString();
                }
                else{
                    document.getElementById('saving-line').innerText = '';
                }
                
            })
            plus.addEventListener('click',()=>{
                buttonn.click();
            })

            plus2.addEventListener('click',()=>{
                plus.click();
            })
            minus2.addEventListener('click',()=>{
                containerFood2.removeChild(contain2);
                minus.click();
            })

        })


    }
    for(let i =0;i< 4;i++){
        const outerdiv = document.createElement('div');
        outerdiv.classList.add('col-lg-3');
        outerdiv.classList.add('col-md-6');
        outerdiv.classList.add('col-sm-12');
        outerdiv.classList.add('food-img-padding1');
        const innera = document.createElement('a');
        innera.setAttribute('href','#');
        innera.classList.add('a-images');
        innera.classList.add('f-column');


        const imagezoon = document.createElement('div');
        imagezoon.classList.add('food-zoom1');
        const imagefood = document.createElement('img');
        imagefood.setAttribute('src',mealsData[i].image);
        imagefood.classList.add('food-img1');
        imagezoon.append(imagefood);
        const spanDiv = document.createElement('div');
        spanDiv.classList.add('w-100');
        const heading = document.createElement('span');
        heading.classList.add('d-inline-block');
        heading.classList.add('mt-1');
        heading.classList.add('text-dark');
        heading.classList.add('food-img-heading1');
        
        heading.innerText = mealsData[i].heading;
        itemsSelected[mealsData[i].heading] = 0;
        const subheading = document.createElement('span');
        subheading.classList.add('mt-1');
        subheading.classList.add('text-muted');
        subheading.classList.add('food-img-subheading1');
        subheading.innerText = mealsData[i].subheading;
        spanDiv.append(heading);
        spanDiv.append(subheading);

        const plusbtn = document.createElement('div');
        plusbtn.classList.add('mt-3');
        plusbtn.classList.add('plusbtndiv');
        const buttonn = document.createElement('button');
        buttonn.innerText = '+'
        buttonn.classList.add('btn');
        buttonn.classList.add('btn-primary');
        buttonn.classList.add('add-btn');
        plusbtn.append(buttonn);

        const divbtnheading = document.createElement('div');
        divbtnheading.classList.add('d-flex');
        divbtnheading.classList.add('flex-column');
        
        divbtnheading.classList.add('w-100');
        

        innera.append(imagezoon);
        outerdiv.append(innera);
        divbtnheading.append(spanDiv);
        divbtnheading.append(plusbtn);
        outerdiv.append(divbtnheading);
        container.append(outerdiv);
        //container2.append(outerdiv);


        

        buttonn.addEventListener('click',()=>{
            count++;
            document.getElementById('clearallup').classList.remove('d-none');
            document.getElementById('items-count').innerText = count.toString();
            remaining = localStorage.getItem('min') - count;
            itemsSelected[heading.innerText] += 1;
            localStorage.setItem('itemsFood',JSON.stringify(itemsSelected));
            if(count < min){
                document.getElementById('items-count-btn').innerText = 'Add ' + remaining +' To Continue';
                document.getElementById('items-count-btn').classList.add('cart-nxt-btn');
                document.getElementById('items-count-btn').classList.remove('cart-nxt-btn2');
            }
            else
            {
                document.getElementById('items-count-btn').innerText = 'Next';
                document.getElementById('items-count-btn').classList.add('cart-nxt-btn2');
                document.getElementById('items-count-btn').classList.remove('cart-nxt-btn');

            }
            //document.getElementById
            OrigPrice += 10.80;
            document.getElementById('ogprice').innerText = '$'+OrigPrice.toPrecision(4).toString();
            const containerFood = document.getElementById('food-items-added');
            const containerFood2 = document.getElementById('scrolling-part');


            const contain = document.createElement('div');
            contain.classList.add('container');
            const containIn = document.createElement('div');
            containIn.classList.add('d-flex');
            containIn.classList.add('row');
            containIn.classList.add('food-item');
            containIn.classList.add('mt-3');

            const contain2 = document.createElement('div');
            contain2.classList.add('container');
            const containIn2 = document.createElement('div');
            containIn2.classList.add('d-flex');
            containIn2.classList.add('row');
            containIn2.classList.add('food-item');
            containIn2.classList.add('mt-3');


            const divimage = document.createElement('div');
            divimage.classList.add('col-5');
            divimage.classList.add('zero-pad');
            const containImage = document.createElement('img');
            containImage.classList.add('mx-2');
            containImage.classList.add('mt-1');
            containImage.classList.add('added-img');
            containImage.setAttribute('src','food1.PNG');
            containImage.setAttribute('alt','food');
            divimage.append(containImage);

            const divimage2 = document.createElement('div');
            divimage2.classList.add('col-5');
            divimage2.classList.add('zero-pad');
            const containImage2 = document.createElement('img');
            containImage2.classList.add('mx-2');
            containImage2.classList.add('mt-1');
            containImage2.classList.add('added-img');
            containImage2.setAttribute('src','food1.PNG');
            containImage2.setAttribute('alt','food');
            divimage2.append(containImage2);


            const divP = document.createElement('div');
            divP.classList.add('col-5');
            divP.classList.add('zero-pad');
            const foodname = document.createElement('p');
            foodname.classList.add('mx-2');
            foodname.classList.add('food-item-text');
            foodname.innerText = heading.innerText;
            divP.append(foodname);

            const divP2 = document.createElement('div');
            divP2.classList.add('col-5');
            divP2.classList.add('zero-pad');
            const foodname2 = document.createElement('p');
            foodname2.classList.add('mx-2');
            foodname2.classList.add('food-item-text');
            foodname2.innerText = heading.innerText;
            divP2.append(foodname2);



            const divButton = document.createElement('div');
            divButton.classList.add('col-2');
            divButton.classList.add('zero-pad');
            divButton.classList.add('d-flex');
            divButton.classList.add('flex-column');

            const divButton2 = document.createElement('div');
            divButton2.classList.add('col-2');
            divButton2.classList.add('zero-pad');
            divButton2.classList.add('d-flex');
            divButton2.classList.add('flex-column');



            const plus = document.createElement('button');
            plus.classList.add('plus-minus-btn');
            plus.classList.add('text-primary');
            plus.innerText ='+';
            const minus = document.createElement('button');
            minus.classList.add('plus-minus-btn');
            minus.classList.add('text-muted');
            minus.innerText = '-';

            const plus2 = document.createElement('button');
            plus2.classList.add('plus-minus-btn');
            plus2.classList.add('text-primary');
            plus2.innerText ='+';
            const minus2 = document.createElement('button');
            minus2.classList.add('plus-minus-btn');
            minus2.classList.add('text-muted');
            minus2.innerText = '-';



            divButton.append(plus);
            divButton.append(minus);
            containIn.append(divimage);
            containIn.append(divP);
            containIn.append(divButton);
            contain.append(containIn);

            divButton2.append(plus2);
            divButton2.append(minus2);
            containIn2.append(divimage2);
            containIn2.append(divP2);
            containIn2.append(divButton2);
            contain2.append(containIn2);

            
            containerFood.insertBefore(contain,document.getElementById('food-items-added').children[count-1]);
            containerFood2.classList.add('text-dark');
            containerFood2.insertBefore(contain2,document.getElementById('scrolling-part').children[count-1]);


            if(count == min){
                document.getElementById('saving-line').innerText = 'Add 2 more meals to save $10.80';
            }
            else if(count == max){
                document.getElementById('saving-line').innerText = 'Add 1 more meal to save $10.80';
            }
            else if(count > max){
                document.getElementById('saving-line').innerText = 'The more you\'ll add, the more you save ';
                document.getElementById('cutprice').innerText = OrigPrice.toPrecision(4).toString();
                document.getElementById('ogprice').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                document.getElementById('saved-amount').classList.remove('d-none');
                document.getElementById('savedPrice').innerText = 'You saved ' + (OrigPrice - (OrigPrice - (OrigPrice/10))).toPrecision(4).toString();
            }
            else{
                document.getElementById('saving-line').innerText = '';
            }

            if(count > 0){
                document.getElementById('orderSummary').classList.remove('d-none');
                document.getElementById('nummeals').innerText = count + ' meals';
                document.getElementById('mealsprice').innerText ='$' + OrigPrice.toPrecision(4).toString();
                document.getElementById('subtotal').innerText = '$'+ OrigPrice.toPrecision(4).toString();
                document.getElementById('orderSummary2').classList.remove('d-none');
                document.getElementById('nummeals2').innerText = count + ' meals';
                document.getElementById('mealsprice2').innerText ='$' + OrigPrice.toPrecision(4).toString();
                document.getElementById('subtotal2').innerText = '$'+ OrigPrice.toPrecision(4).toString();
                if(count > max){
                    document.getElementById('discountedsummary').classList.remove('d-none');
                    document.getElementById('nummealsdiscount').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('discountedsummary2').classList.remove('d-none');
                    document.getElementById('nummealsdiscount2').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice2').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal2').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                }
            }
            else{
                document.getElementById('orderSummary').classList.add('d-none');
                document.getElementById('orderSummary2').classList.add('d-none');
            }
            

            

            minus.addEventListener('click',()=>{
                
                containerFood.removeChild(contain);
                count--;
                itemsSelected[heading.innerText] -= 1;
                localStorage.setItem('itemsFood',JSON.stringify(itemsSelected));
                document.getElementById('items-count').innerText = count.toString();
                remaining++;
                if(count < min){
                    document.getElementById('items-count-btn').innerText = 'Add ' + remaining +' To Continue';
                    document.getElementById('items-count-btn').classList.add('cart-nxt-btn');
                    document.getElementById('items-count-btn').classList.remove('cart-nxt-btn2');
                }else{
                    document.getElementById('items-count-btn').innerText = 'Next';
                    document.getElementById('items-count-btn').classList.add('cart-nxt-btn2');
                    document.getElementById('items-count-btn').classList.remove('cart-nxt-btn');

                }

                OrigPrice -= 10.80;
                document.getElementById('ogprice').innerText = '$'+OrigPrice.toPrecision(4).toString();
                document.getElementById('nummeals').innerText = count + ' meals';
                document.getElementById('mealsprice').innerText ='$' + OrigPrice.toPrecision(4).toString();
                document.getElementById('subtotal').innerText = '$'+ OrigPrice.toPrecision(4).toString();
                if(count == 0){
                    document.getElementById('orderSummary').classList.add('d-none');
                    document.getElementById('orderSummary2').classList.add('d-none');
                    document.getElementById('clearallup').classList.add('d-none');
                    document.getElementById('ogprice').innerText = '';
                }
                if(count == min){
                    document.getElementById('saving-line').innerText = 'Add 2 more meals to save $10.80';
                }
                else if(count == max){
                    document.getElementById('saving-line').innerText = 'Add 1 more meal to save $10.80';
                    document.getElementById('cutprice').innerText = '';
                    document.getElementById('saved-amount').classList.add('d-none');
                    document.getElementById('savedPrice').innerText = '';
                    document.getElementById('discountedsummary').classList.add('d-none');
                }
                else if(count > max){
                    document.getElementById('saving-line').innerText = 'The more you\'ll add, the more you save ';
                    document.getElementById('cutprice').innerText = OrigPrice.toPrecision(4).toString();
                    document.getElementById('ogprice').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('saved-amount').classList.remove('d-none');
                    document.getElementById('savedPrice').innerText = 'You saved ' + (OrigPrice - (OrigPrice - (OrigPrice/10))).toPrecision(4).toString();

                    document.getElementById('nummealsdiscount').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('nummeals').innerText = count + ' meals';
                    document.getElementById('mealsprice').innerText ='$' + OrigPrice.toPrecision(4).toString();
                    document.getElementById('nummealsdiscount2').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice2').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal2').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('nummeals2').innerText = count + ' meals';
                    document.getElementById('mealsprice2').innerText ='$' + OrigPrice.toPrecision(4).toString();
                }
                else{
                    document.getElementById('saving-line').innerText = '';
                }
                
            })
            plus.addEventListener('click',()=>{
                buttonn.click();
            })

            plus2.addEventListener('click',()=>{
                plus.click();
            })
            minus2.addEventListener('click',()=>{
                containerFood2.removeChild(contain2);
                minus.click();
            })

        })


    }
    for(let i =0;i< 4;i++){
        const outerdiv = document.createElement('div');
        outerdiv.classList.add('col-lg-3');
        outerdiv.classList.add('col-md-6');
        outerdiv.classList.add('col-sm-12');
        outerdiv.classList.add('food-img-padding1');
        const innera = document.createElement('a');
        innera.setAttribute('href','#');
        innera.classList.add('a-images');
        innera.classList.add('f-column');


        const imagezoon = document.createElement('div');
        imagezoon.classList.add('food-zoom1');
        const imagefood = document.createElement('img');
        imagefood.setAttribute('src',mealsData[i].image);
        imagefood.classList.add('food-img1');
        imagezoon.append(imagefood);
        const spanDiv = document.createElement('div');
        spanDiv.classList.add('w-100');
        const heading = document.createElement('span');
        heading.classList.add('d-inline-block');
        heading.classList.add('mt-1');
        heading.classList.add('text-dark');
        heading.classList.add('food-img-heading1');
        
        heading.innerText = mealsData[i].heading;
        itemsSelected[mealsData[i].heading] = 0;
        const subheading = document.createElement('span');
        subheading.classList.add('mt-1');
        subheading.classList.add('text-muted');
        subheading.classList.add('food-img-subheading1');
        subheading.innerText = mealsData[i].subheading;
        spanDiv.append(heading);
        spanDiv.append(subheading);

        const plusbtn = document.createElement('div');
        plusbtn.classList.add('mt-3');
        plusbtn.classList.add('plusbtndiv');
        const buttonn = document.createElement('button');
        buttonn.innerText = '+'
        buttonn.classList.add('btn');
        buttonn.classList.add('btn-primary');
        buttonn.classList.add('add-btn');
        plusbtn.append(buttonn);

        const divbtnheading = document.createElement('div');
        divbtnheading.classList.add('d-flex');
        divbtnheading.classList.add('flex-column');
        
        divbtnheading.classList.add('w-100');
        

        innera.append(imagezoon);
        outerdiv.append(innera);
        divbtnheading.append(spanDiv);
        divbtnheading.append(plusbtn);
        outerdiv.append(divbtnheading);
        //container.append(outerdiv);
        container2.append(outerdiv);


        

        buttonn.addEventListener('click',()=>{
            count++;
            
            document.getElementById('items-count').innerText = count.toString();
            remaining = localStorage.getItem('min') - count;
            itemsSelected[heading.innerText] += 1;
            localStorage.setItem('itemsFood',JSON.stringify(itemsSelected));
            if(count < min){
                document.getElementById('items-count-btn').innerText = 'Add ' + remaining +' To Continue';
                document.getElementById('items-count-btn').classList.add('cart-nxt-btn');
                document.getElementById('items-count-btn').classList.remove('cart-nxt-btn2');
            }
            else
            {
                document.getElementById('items-count-btn').innerText = 'Next';
                document.getElementById('items-count-btn').classList.add('cart-nxt-btn2');
                document.getElementById('items-count-btn').classList.remove('cart-nxt-btn');

            }
            //document.getElementById
            OrigPrice += 10.80;
            document.getElementById('ogprice').innerText = '$'+OrigPrice.toPrecision(4).toString();
            const containerFood = document.getElementById('food-items-added');
            const containerFood2 = document.getElementById('scrolling-part');


            const contain = document.createElement('div');
            contain.classList.add('container');
            const containIn = document.createElement('div');
            containIn.classList.add('d-flex');
            containIn.classList.add('row');
            containIn.classList.add('food-item');
            containIn.classList.add('mt-3');

            const contain2 = document.createElement('div');
            contain2.classList.add('container');
            const containIn2 = document.createElement('div');
            containIn2.classList.add('d-flex');
            containIn2.classList.add('row');
            containIn2.classList.add('food-item');
            containIn2.classList.add('mt-3');


            const divimage = document.createElement('div');
            divimage.classList.add('col-5');
            divimage.classList.add('zero-pad');
            const containImage = document.createElement('img');
            containImage.classList.add('mx-2');
            containImage.classList.add('mt-1');
            containImage.classList.add('added-img');
            containImage.setAttribute('src','food1.PNG');
            containImage.setAttribute('alt','food');
            divimage.append(containImage);

            const divimage2 = document.createElement('div');
            divimage2.classList.add('col-5');
            divimage2.classList.add('zero-pad');
            const containImage2 = document.createElement('img');
            containImage2.classList.add('mx-2');
            containImage2.classList.add('mt-1');
            containImage2.classList.add('added-img');
            containImage2.setAttribute('src','food1.PNG');
            containImage2.setAttribute('alt','food');
            divimage2.append(containImage2);


            const divP = document.createElement('div');
            divP.classList.add('col-5');
            divP.classList.add('zero-pad');
            const foodname = document.createElement('p');
            foodname.classList.add('mx-2');
            foodname.classList.add('food-item-text');
            foodname.innerText = heading.innerText;
            divP.append(foodname);

            const divP2 = document.createElement('div');
            divP2.classList.add('col-5');
            divP2.classList.add('zero-pad');
            const foodname2 = document.createElement('p');
            foodname2.classList.add('mx-2');
            foodname2.classList.add('food-item-text');
            foodname2.innerText = heading.innerText;
            divP2.append(foodname2);



            const divButton = document.createElement('div');
            divButton.classList.add('col-2');
            divButton.classList.add('zero-pad');
            divButton.classList.add('d-flex');
            divButton.classList.add('flex-column');

            const divButton2 = document.createElement('div');
            divButton2.classList.add('col-2');
            divButton2.classList.add('zero-pad');
            divButton2.classList.add('d-flex');
            divButton2.classList.add('flex-column');



            const plus = document.createElement('button');
            plus.classList.add('plus-minus-btn');
            plus.classList.add('text-primary');
            plus.innerText ='+';
            const minus = document.createElement('button');
            minus.classList.add('plus-minus-btn');
            minus.classList.add('text-muted');
            minus.innerText = '-';

            const plus2 = document.createElement('button');
            plus2.classList.add('plus-minus-btn');
            plus2.classList.add('text-primary');
            plus2.innerText ='+';
            const minus2 = document.createElement('button');
            minus2.classList.add('plus-minus-btn');
            minus2.classList.add('text-muted');
            minus2.innerText = '-';



            divButton.append(plus);
            divButton.append(minus);
            containIn.append(divimage);
            containIn.append(divP);
            containIn.append(divButton);
            contain.append(containIn);

            divButton2.append(plus2);
            divButton2.append(minus2);
            containIn2.append(divimage2);
            containIn2.append(divP2);
            containIn2.append(divButton2);
            contain2.append(containIn2);

            
            containerFood.insertBefore(contain,document.getElementById('food-items-added').children[count-1]);
            containerFood2.classList.add('text-dark');
            containerFood2.insertBefore(contain2,document.getElementById('scrolling-part').children[count-1]);


            if(count == min){
                document.getElementById('saving-line').innerText = 'Add 2 more meals to save $10.80';
            }
            else if(count == max){
                document.getElementById('saving-line').innerText = 'Add 1 more meal to save $10.80';
            }
            else if(count > max){
                document.getElementById('saving-line').innerText = 'The more you\'ll add, the more you save ';
                document.getElementById('cutprice').innerText = OrigPrice.toPrecision(4).toString();
                document.getElementById('ogprice').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                document.getElementById('saved-amount').classList.remove('d-none');
                document.getElementById('savedPrice').innerText = 'You saved ' + (OrigPrice - (OrigPrice - (OrigPrice/10))).toPrecision(4).toString();
            }
            else{
                document.getElementById('saving-line').innerText = '';
            }

            if(count > 0){
                document.getElementById('orderSummary').classList.remove('d-none');
                document.getElementById('nummeals').innerText = count + ' meals';
                document.getElementById('mealsprice').innerText ='$' + OrigPrice.toPrecision(4).toString();
                document.getElementById('subtotal').innerText = '$'+ OrigPrice.toPrecision(4).toString();
                document.getElementById('orderSummary2').classList.remove('d-none');
                document.getElementById('nummeals2').innerText = count + ' meals';
                document.getElementById('mealsprice2').innerText ='$' + OrigPrice.toPrecision(4).toString();
                document.getElementById('subtotal2').innerText = '$'+ OrigPrice.toPrecision(4).toString();
                if(count > max){
                    document.getElementById('discountedsummary').classList.remove('d-none');
                    document.getElementById('nummealsdiscount').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('discountedsummary2').classList.remove('d-none');
                    document.getElementById('nummealsdiscount2').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice2').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal2').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                }
            }
            else{
                document.getElementById('orderSummary').classList.add('d-none');
                document.getElementById('orderSummary2').classList.add('d-none');
            }
            

            

            minus.addEventListener('click',()=>{
                
                containerFood.removeChild(contain);
                count--;
                itemsSelected[heading.innerText] -= 1;
                localStorage.setItem('itemsFood',JSON.stringify(itemsSelected));
                document.getElementById('items-count').innerText = count.toString();
                remaining++;
                if(count < min){
                    document.getElementById('items-count-btn').innerText = 'Add ' + remaining +' To Continue';
                    document.getElementById('items-count-btn').classList.add('cart-nxt-btn');
                    document.getElementById('items-count-btn').classList.remove('cart-nxt-btn2');
                }else{
                    document.getElementById('items-count-btn').innerText = 'Next';
                    document.getElementById('items-count-btn').classList.add('cart-nxt-btn2');
                    document.getElementById('items-count-btn').classList.remove('cart-nxt-btn');

                }

                OrigPrice -= 10.80;
                document.getElementById('ogprice').innerText = '$'+OrigPrice.toPrecision(4).toString();
                document.getElementById('nummeals').innerText = count + ' meals';
                document.getElementById('mealsprice').innerText ='$' + OrigPrice.toPrecision(4).toString();
                document.getElementById('subtotal').innerText = '$'+ OrigPrice.toPrecision(4).toString();
                if(count == 0){
                    document.getElementById('orderSummary').classList.add('d-none');
                    document.getElementById('orderSummary2').classList.add('d-none');
                    document.getElementById('clearallup').classList.add('d-none');
                    document.getElementById('ogprice').innerText = '';
                }
                if(count == min){
                    document.getElementById('saving-line').innerText = 'Add 2 more meals to save $10.80';
                }
                else if(count == max){
                    document.getElementById('saving-line').innerText = 'Add 1 more meal to save $10.80';
                    document.getElementById('cutprice').innerText = '';
                    document.getElementById('saved-amount').classList.add('d-none');
                    document.getElementById('savedPrice').innerText = '';
                    document.getElementById('discountedsummary').classList.add('d-none');
                }
                else if(count > max){
                    document.getElementById('saving-line').innerText = 'The more you\'ll add, the more you save ';
                    document.getElementById('cutprice').innerText = OrigPrice.toPrecision(4).toString();
                    document.getElementById('ogprice').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('saved-amount').classList.remove('d-none');
                    document.getElementById('savedPrice').innerText = 'You saved ' + (OrigPrice - (OrigPrice - (OrigPrice/10))).toPrecision(4).toString();

                    document.getElementById('nummealsdiscount').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('nummeals').innerText = count + ' meals';
                    document.getElementById('mealsprice').innerText ='$' + OrigPrice.toPrecision(4).toString();
                    document.getElementById('nummealsdiscount2').innerText =  count + ' meals discount';
                    document.getElementById('nummealsdiscountprice2').innerText =  '$' +(OrigPrice/10).toPrecision(4).toString();
                    document.getElementById('subtotal2').innerText = '$'+ (OrigPrice - (OrigPrice/10)).toPrecision(4).toString();
                    document.getElementById('nummeals2').innerText = count + ' meals';
                    document.getElementById('mealsprice2').innerText ='$' + OrigPrice.toPrecision(4).toString();
                }
                else{
                    document.getElementById('saving-line').innerText = '';
                }
                
            })
            plus.addEventListener('click',()=>{
                buttonn.click();
            })

            plus2.addEventListener('click',()=>{
                plus.click();
            })
            minus2.addEventListener('click',()=>{
                containerFood2.removeChild(contain2);
                minus.click();
            })

        })


    }
    

    
    ///////////////////////////////////////////////////////////////////
    
    const selDate = localStorage.getItem('selDate').toString();
    const dateCon = document.getElementById('menu-dates');
    const curr = new Date();
    const startdate = new Date();
    let day = curr.getDay();
    let diff = 7- day + 1;

    startdate.setDate(curr.getDate() + diff);
    const delDate = document.getElementById('delivery-date-right-col');
    const delDate2 = document.getElementById('delivery-date-right-col2');
    delDate.innerText = selDate;
    delDate2.innerText = selDate;
    let dateSkipped;

    for(let i =0;i<10;i++){
        
        const elem = document.createElement('option');
        elem.setAttribute('value',i);
        elem.classList.add('bold-menu');
        if(i==0){
            dateSkipped = days[startdate.getDay()] + ", " + months[startdate.getMonth()] + " " + startdate.getDate();
            elem.innerText = selDate;
        }
        else if (days[startdate.getDay()] + ", " + months[startdate.getMonth()] + " " + startdate.getDate() == selDate){
            elem.innerText = dateSkipped;
        }
        else{
            elem.innerText = days[startdate.getDay()] + ", " + months[startdate.getMonth()] + " " + startdate.getDate();
        }
        dateCon.append(elem);

        startdate.setDate(startdate.getDate() + 1);

        dateCon.addEventListener('change',(e)=>{
            delDate.innerText = e.options[e.selectedIndex].text;
        })
    }

    
}

function clearall(){

   document.getElementById('food-items-added').innerHTML = '';
   location.reload();

}

function clickedNext(){

    if(count >= min){
        localStorage.setItem('meals',count);
        localStorage.setItem('limit',max);
        localStorage.setItem('prices',OrigPrice);
        localStorage.setItem('foods',JSON.stringify(itemsSelected));
        window.location.href='checkout.html';
    }
    
}


function loadCheckoutPage(){
    const sel = localStorage.getItem('selDate').toString();
    const dateCon = document.getElementById('menu-dates-checkout');
    const curr = new Date();
    const startdate = new Date();
    let day = curr.getDay();
    let diff = 7- day + 1;
    let skipped;

    startdate.setDate(curr.getDate() + diff);

    for(let i =0;i<10;i++){
        const elem = document.createElement('option');
        elem.setAttribute('value',i);
        elem.classList.add('bold-menu');
        if(i==0){
            skipped = days[startdate.getDay()] + ", " + months[startdate.getMonth()] + " " + startdate.getDate();
            elem.innerText = sel;
        }
        else if(days[startdate.getDay()] + ", " + months[startdate.getMonth()] + " " + startdate.getDate() == sel){
            elem.innerText = skipped;

        }
        else{
            elem.innerText = days[startdate.getDay()] + ", " + months[startdate.getMonth()] + " " + startdate.getDate();
        }
        dateCon.append(elem);

        startdate.setDate(startdate.getDate() + 1);

        dateCon.addEventListener('change',(e)=>{
            delDate.innerText = e.options[e.selectedIndex].text;
        })
    }
    let meals = parseInt(localStorage.getItem('meals'));
    let prices = parseInt(localStorage.getItem('prices'));
    let limit = parseInt(localStorage.getItem('limit'));
    if(meals <= limit){
        document.getElementById('numberMeals').innerText =  meals + ' meals';
        document.getElementById('numberMealsPrice').innerText = '$'+prices;
        document.getElementById('totallprice').innerText = '$' + (prices+9.99).toPrecision(4).toString();
        document.getElementById('total-amount').innerText = '$' + (prices+9.99).toPrecision(4).toString();
        
    }else{
        document.getElementById('numberMeals').innerText =  meals + ' meals';
        document.getElementById('numberMealsPrice').innerText = '$'+ (prices - (prices/10)).toPrecision(4).toString();
        document.getElementById('totallprice').innerText = '$' + (prices - (prices/10)+9.99).toPrecision(4).toString();
        document.getElementById('total-amount').innerText = '$' + (prices - (prices/10)+9.99).toPrecision(4).toString();
    }


    let foods = JSON.parse(localStorage.getItem('foods'));
    const con = document.getElementById('mymealsList');
    for(let x in foods){
        if(foods[x]!=0){
            const container = document.createElement('div');
            container.classList.add('d-flex');
            container.classList.add('hr-line');
            container.classList.add('mb-3');
            container.classList.add('pb-2');
            const p = document.createElement('p');
            p.classList.add('mx-2');
            p.classList.add('fw-bold')
            p.innerText = 'x' + foods[x];
            const img = document.createElement('img');
            img.setAttribute('src','food1.PNG');
            img.setAttribute('alt','food');
            img.classList.add('meal-list-image');
            img.classList.add('mx-2');
            const name = document.createElement('p');
            name.classList.add('meal-list-text');
            name.innerText =  x.toString();
            name.classList.add('mx-2');

            container.append(p);
            container.append(img);
            container.append(name);

            con.append(container);

        }
    }



}


function rotate(){
    if(document.getElementById('iconupdown1').style.transform == 'rotate(180deg)'){
        document.getElementById('iconupdown1').style.transform = '';
    }
    else{
        document.getElementById('iconupdown1').style.transform = 'rotate(180deg)';
    }
}

function rotate1(){
    if(document.getElementById('iconupdown2').style.transform == 'rotate(180deg)'){
        document.getElementById('iconupdown2').style.transform = '';
    }
    else{
        document.getElementById('iconupdown2').style.transform = 'rotate(180deg)';
    }
}
function rotate2(){
    if(document.getElementById('iconupdown3').style.transform == 'rotate(180deg)'){
        document.getElementById('iconupdown3').style.transform = '';
    }
    else{
        document.getElementById('iconupdown3').style.transform = 'rotate(180deg)';
    }
}
function rotate3(){
    if(document.getElementById('iconupdown4').style.transform == 'rotate(180deg)'){
        document.getElementById('iconupdown4').style.transform = '';
    }
    else{
        document.getElementById('iconupdown4').style.transform = 'rotate(180deg)';
    }
}
function rotate4(){
    if(document.getElementById('iconupdown5').style.transform == 'rotate(180deg)'){
        document.getElementById('iconupdown5').style.transform = '';
    }
    else{
        document.getElementById('iconupdown5').style.transform = 'rotate(180deg)';
    }
}
function rotate5(){
    if(document.getElementById('iconupdown6').style.transform == 'rotate(180deg)'){
        document.getElementById('iconupdown6').style.transform = '';
    }
    else{
        document.getElementById('iconupdown6').style.transform = 'rotate(180deg)';
    }
}
function rotate6(){
    if(document.getElementById('iconupdown7').style.transform == 'rotate(180deg)'){
        document.getElementById('iconupdown7').style.transform = '';
    }
    else{
        document.getElementById('iconupdown7').style.transform = 'rotate(180deg)';
    }
}
