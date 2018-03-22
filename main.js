// Write your JavaScript here
$("button").click(function(){
    var amountReceived = document.getElementById('amount-received').value;
    var amountDue = document.getElementById('amount-due').value;
    var change = amountReceived - amountDue;
    var coins = change - Math.trunc(change);
    var quarters = coins / .25;
    var dimes = ((coins % .25).toFixed(2)) / .1;
    var nickels = ((((coins % .25).toFixed(2)) % .1).toFixed(2)) / .05;
    var pennies = ((((((coins % .25).toFixed(2)) % .1).toFixed(2)) % .05).toFixed(2)) / .01;
    $("p:first").append(Math.trunc(change));
    $("p:nth-of-type(2)").append(Math.floor(quarters));
    $("p:nth-of-type(3)").append(Math.floor(dimes));
    $("p:nth-of-type(4)").append(Math.floor(nickels));
    $("p:nth-of-type(5)").append(Math.floor(pennies));
})