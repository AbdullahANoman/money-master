document.getElementById('cal-btn').addEventListener('click',function(){
    const foodAmount = getValue('food-field');
    const rentAmount = getValue('rent-field');
    const clothesAmount = getValue('clothes-field')
    
    const totalAmount = foodAmount+rentAmount+clothesAmount;
    const income = getValue('income-field');
    
   if(income<totalAmount){
    alert('Please Do not take more please cut some money');
    return;
   }
   setInnerText('expense',totalAmount);
   const expense =  getInner('expense');
   const balance = income - totalAmount;
   setInnerText('balance',balance);
})


document.getElementById('btn-save').addEventListener('click',function(){
    const saveAmount = getValue('save-field');
    const reduceSave = saveAmount/100;
    const income = getValue('income-field')
    const final = income*reduceSave;
    const balance = getInner('balance');
    if(balance<final){
        alert('Please save less money');
        return;
    }
    const remaining = balance -final;
    
    setInnerText('save',final);
    setInnerText('remaining',remaining);
})


function getValue(id){
    const amount = parseFloat(document.getElementById(id).value)
    return amount;
}
function getInner(id){
    const amount = parseFloat(document.getElementById(id).innerText);
    return amount;
}
function setInnerText (id,value){
    document.getElementById(id).innerText = value;
}