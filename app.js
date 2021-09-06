
//get single item price
function singleItemPriceAmount(id){
    let itemPrice = document.getElementById(id).innerText;
    let itemPriceAmount = parseFloat(itemPrice);
    return itemPriceAmount;
}
//print single item 
function updateSingleInnerText(id, newPrice){
    let singleInner = document.getElementById(id);
    singleInner.innerText = newPrice;
    return singleInner;
}

//working for memory 
document.getElementById('memory').addEventListener('click', function(e){
    // get all singe prices 
    let basePrice = singleItemPriceAmount('base-price'); 
    let totalPrice = singleItemPriceAmount('total-price');
    let memoryPrice = singleItemPriceAmount('extra-memory-cost');
    let storage = singleItemPriceAmount('extra-storage-cost');
    let deliveryPrice = singleItemPriceAmount('extra-delivery-cost');

    if(e.target.id == 'memory-8gb'){
        memoryPrice = 0;
        totalPrice = basePrice + memoryPrice + storage + deliveryPrice ;
        updateSingleInnerText('extra-memory-cost', memoryPrice);
    }else if(e.target.id == 'memory-16gb' ){
        memoryPrice = 180
        totalPrice = basePrice + memoryPrice + storage + deliveryPrice;
        updateSingleInnerText('extra-memory-cost', memoryPrice);
    }
    //update total price 
    updateSingleInnerText('total-price', totalPrice);
    updateSingleInnerText('grand-total', totalPrice);

})

//working for storage 
document.getElementById('storage').addEventListener('click', function(e){
    // get all singe prices 
    let basePrice = singleItemPriceAmount('base-price'); 
    let totalPrice = singleItemPriceAmount('total-price');
    let storage = singleItemPriceAmount('extra-storage-cost');
    let memoryPrice = singleItemPriceAmount('extra-memory-cost');
    let deliveryPrice = singleItemPriceAmount('extra-delivery-cost');

    if(e.target.id == 'storage-256gb'){
        storage = 0;
        totalPrice = basePrice + storage + memoryPrice + deliveryPrice ;
        updateSingleInnerText('extra-storage-cost', storage);
    }else if(e.target.id == 'storage-512gb' ){
        storage = 100;
        totalPrice = basePrice + storage + memoryPrice + deliveryPrice ;
        updateSingleInnerText('extra-storage-cost', storage);
    }else if(e.target.id == 'storage-1tb' ){
        storage = 180;
        totalPrice = basePrice + storage + memoryPrice + deliveryPrice;
        updateSingleInnerText('extra-storage-cost', storage);
    }
    //update total price 
    updateSingleInnerText('total-price', totalPrice);
    updateSingleInnerText('grand-total', totalPrice);

})


//working for delivery 
document.getElementById('delivery').addEventListener('click', function(e){
    // get all singe prices 
    let basePrice = singleItemPriceAmount('base-price'); 
    let totalPrice = singleItemPriceAmount('total-price');
    let storage = singleItemPriceAmount('extra-storage-cost');
    let memoryPrice = singleItemPriceAmount('extra-memory-cost');
    let deliveryPrice = singleItemPriceAmount('extra-delivery-cost');

    if(e.target.id == 'delviry-0'){
        deliveryPrice = 0
        totalPrice = basePrice + storage + memoryPrice + deliveryPrice ;
        updateSingleInnerText('extra-delivery-cost', deliveryPrice);
    }else if(e.target.id == 'delivery-20' ){
        deliveryPrice = 20;
        totalPrice = basePrice + storage + memoryPrice + deliveryPrice;
        updateSingleInnerText('extra-delivery-cost', deliveryPrice);
    }

    //update total price 
    updateSingleInnerText('total-price', totalPrice);
    updateSingleInnerText('grand-total', totalPrice);

})

// //working for coupon code 
document.getElementById('apply-coupon').addEventListener('click', function(){
    let grandTotal = singleItemPriceAmount('grand-total');
    let coupon = document.getElementById('coupon-box');
    if(coupon.value == 'stevekaku' ){
        let discount = grandTotal * 0.2;
        grandTotal = grandTotal - discount;
        updateSingleInnerText('grand-total', grandTotal);
    }else{
        console.log("Not matched your coupon code ");
    }
    coupon.value = '';
})



