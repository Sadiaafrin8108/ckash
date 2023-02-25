let totalBalance=document.getElementById('total_balance');
let totalcashout=document.getElementById('total_cashout');
let totalsandMoney=document.getElementById('total_sendMoney');
let totalRecharge=document.getElementById('total_recharge');

let cashinbtn=document.getElementById('cashin_button');
let cashOutbtn=document.getElementById('cashout_button');
let sendMoneybtn=document.getElementById('sendMoney_button');
let rechargebtn=document.getElementById('recharge_button');


let cashIninput=document.getElementById('cash_in');
let cashOutinput=document.getElementById('cash_out');
let sendMoneyinput=document.getElementById('send_money');
let rechargeinput=document.getElementById('re_charge');

//cash in start


cashinbtn.addEventListener('click',function(){


    if(cashIninput.value==''){
        cashIninput.style.borderColor="red"
        cashIninput.focus()
    }

    else{
    let cashInputconverter=parseFloat(cashIninput.value)
    let totalBalanceconverter=parseFloat(totalBalance.innerText)
    totalBalance.innerHTML=cashInputconverter+totalBalanceconverter;
    cashIninput.value='';
    }

    
})
// //cash in end

// //cash out start

cashOutbtn.addEventListener('click',function(){

    if(cashOutinput.value==''){
        cashOutinput.style.borderColor="red"
        cashOutinput.focus()
    }
    else{
    let cashOutInputconverter=parseFloat(cashOutinput.value)
    let totalcashoutconverter=parseFloat(totalcashout.innerText)
    let updateCashout=cashOutInputconverter+totalcashoutconverter;
    totalcashout.innerHTML=updateCashout

    let updatetotalBalance=totalBalance.innerHTML-cashOutinput.value
    totalBalance.innerHTML=updatetotalBalance
    cashOutinput.value='';
    }

    
})
// //cash out end

// //send money start

sendMoneybtn.addEventListener("click",function(){

    if(sendMoneyinput.value==''){
        sendMoneyinput.style.borderColor="red"
        sendMoneyinput.focus();
    }

    else{
    let sendMoneyInputconverter=parseFloat(sendMoneyinput.value)
    let totalsendMoneyconverter=parseFloat(totalsandMoney.innerHTML)
    let updatesendMOney=sendMoneyInputconverter+totalsendMoneyconverter;
    totalsandMoney.innerHTML=updatesendMOney;
    
    let updatetotalBalance=totalBalance.innerHTML-sendMoneyinput.value
    totalBalance.innerHTML=updatetotalBalance;
    
    }

    
})

// //send money end

// //send recharge start

rechargebtn.addEventListener('click',function(){

    if(rechargeinput.value==''){
        rechargeinput.style.borderColor="red"
        rechargeinput.focus();
    }
    else{
    let rechargeInputconverter=parseFloat(rechargeinput.value)
    let totalRechargeconverter=parseFloat(totalRecharge.innerHTML)
    let updateRecharge=rechargeInputconverter+totalRechargeconverter;
    totalRecharge.innerHTML=updateRecharge;

    let updatetotalBalance=totalBalance.innerHTML-rechargeinput.value;
    totalBalance.innerHTML=updatetotalBalance;
    }

    
    

})

// //send recharge end
/*

function getInnerTextNumber(inputFiled){
    let innerText=document.getElementById(inputFiled);
    let getinnerTextconvarter=parseFloat(innerText.innerHTML);
    return getinnerTextconvarter;
}

function getInputvalue(inputFiled){
    let getInput=document.getElementById(inputFiled);
    let getInputconvarter=parseFloat(getInput.value);
    return getInputconvarter
}

document.getElementById('cashin_button').addEventListener('click',function(){
    let cashAmonut=getInputvalue('cash_in');
    let totalBalance=getInnerTextNumber('total_balance')
    let previousTotalBalance=document.getElementById('total_balance')
    previousTotalBalance.innerHTML=cashAmonut+totalBalance
    let cashinputFeild=document.getElementById('cash_in')
    cashinputFeild.value=''
    
    
        
    
 
})
*/





















































