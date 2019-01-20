$.get('../csv/itemlist.csv',function(data){
    var csv = $.csv.toArrays(data);
    var itemlist = '';
    var i = false;

    $(csv).each(function(index){
        var li = this[0].replace("<br>","");
        if(i != false){
            itemlist += "<li>" + li + "</li>";
        }
        i = true;
    })
    $(".list").append(itemlist);

})
console.log('***');