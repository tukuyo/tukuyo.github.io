(function() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var date  = today.getDate();
    if( location.pathname != "/NYD.html"){
        if(1 == month && 1 == date) 
            location.href = './NYD.html';
    } else {
        if(!(1 == month && 1 == date)) 
            location.href = "../index.html";
    }
})();
