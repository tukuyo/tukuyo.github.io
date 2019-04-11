$.get('../csv/itemlist.csv',function(data){
    var csv = $.csv.toArrays(data);
    var itemlist = '';
    var i = false;

    $(csv).each(function(index){
        if(i != false){
            var used = this[2].split(",");
            var li = "";
            used.forEach(function(value){
                li += "<li>" + value + "</li>";
            });
                // console.log(this[6]);
            if (this[6]) {
                itemlist += "<li><a href=" + this[6] + "></a><div class='product'><img src='./pic/" + this[3] + ".PNG' class='back'><div class='detail1'><h3>" + this[0] + "</h3><div class='detail2'>" + this[1] + "</div><div class='detail2'>使用：" + this[2] + "</div><div class='detail2'>制作期間：" + this[5] + "</div></div></div></li>";

            } else {
                itemlist += "<li><div class='product'><img src='./pic/" + this[3] + ".PNG' class='back'><div class='detail1'><h3>" + this[0] + "</h3><div class='detail2'>" + this[1] + "</div><div class='detail2'>使用：" + this[2] + "</div><div class='detail2'>制作期間：" + this[5] + "</div></div></div></li>";
            }
        }
        i = true;
    })
    $(".Product-list").append(itemlist);
})
console.log('***');
