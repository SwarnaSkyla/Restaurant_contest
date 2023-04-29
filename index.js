/* First function - getMenu() -> On the load of the screen run this function and 
In this function you'll make an api call using fetch to get the food items from an api
 and show them to a user - https://free-food-menus-api-production.up.railway.app/burgers.*/


 async function getMenu(){
    const url='https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json';
    const response=await fetch(url);
    const data=await response.json();

    // console.log(data);


    //Now showing menu items on screen

     const menuList=document.getElementById("menu-items");

    data.forEach(menuItem =>{
        // console.log(menuItem.name,"-",menuItem.price);
         const item=document.createElement("li");
         item.innerHTML=`${menuItem.name} -${menuItem.price}`;
         menuList.appendChild(item);
    });
 }

 /*TakeOrder() - Now assume that the user is ordering and 
 make a functiion called TakeOrder() -This function should 
 return a promise and shoud take 2500 milliseconds to resolve 
 the order. in teh resolve choose any 3 burgers randomly and add 
 them in the object.

 */

  
function takeOrder(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            const burgers=[
                {name:'chicken burger',price:'300'},
                {name:'veg burger',price:'200'},
                {name:'mushroom burger',price:'100'}
            ];
            const torder=burgers.sort(function(){
                return 0.5-Math.random();
            }).slice(0,3);
            resolve(torder);
        },2500);
    });
}



/*
orderPrep() - This function also returns a promise and 
takes 1500 milliseconds to resolve and the resolve should
 return {order_status:true; paid:false}
*/


function orderPrep(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve({order_status:true, paid:false});
        },1500);
    });
}

/*payOrder() - This function also returns a promise
 and tajes 1000 milliseconds to reolve and the resolve 
 returns the object {order_status:true; paid:true}*/

function payOrder(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve( {order_status:true,paid:true});
        },1000);
    });
}

/*
thankyouFnc() - Once {paid:true} is received, 
give an alert on the screen saying thankyou for eating 
with us today!
*/

function thankyouFnc(){
    alert("Thankyou for eating  with us today!");
}

//Handling promises

async function restaurantFlow(){
    try{
        await getMenu();
        const order=await takeOrder();
        console.log(('Order :',order));
        const orderStatus=await orderPrep();
        console.log('Order Status :',orderStatus);
        const paymentStatus=await payOrder();
        console.log('Payment Status : ',paymentStatus);
        thankyouFnc();

    }
    catch(error){
        console.log(error);
    }
}

restaurantFlow();