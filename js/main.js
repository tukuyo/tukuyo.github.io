$.get('../csv/itemlist.csv',function(data){
    var csv = $.csv.toArrays(data);
    var itemlist = '';
    var i = false;

    //indexを使ってくり返し回数をカウントします
    $(csv).each(function(index){
        if(i != false){
            var used = this[2].split(",")
            var li = "";
            used.forEach(function(value){
                li += "<li>" + value + "</li>"
            });
            if (this[6]) {
                itemlist += "<div class=" + "swiper-slide" + "><div class=" + "wrapper" + "><div class=" + "product-info" + "><div class=" + "product-text" + "><h2> " + this[0] + "</h2><p>" + this[1] + "</p></div><div class=" + "things-used" + "><p>使用した物</p><ul>" + li + "</ul></div></div><div class=" + "product-image" + ">" + '<a href="' + this[6] +'"><img src="' + 'pic/' + this[3] + '.PNG"' + "></a><p>作成日" + this[4] + "<br> 制作期間 " + this[5] + "</p></div></div></div>";
            } else {
                itemlist += "<div class=" + "swiper-slide" + "><div class=" + "wrapper" + "><div class=" + "product-info" + "><div class=" + "product-text" + "><h2> " + this[0] + "</h2><p>" + this[1] + "</p></div><div class=" + "things-used" + "><p>使用した物</p><ul>" + li + "</ul></div></div><div class=" + "product-image" + '><img src="' + 'pic/' + this[3] + '.PNG"' + "><p>作成日" + this[4] + "<br> 制作期間 " + this[5] + "</p></div></div></div>";
            }
        }
        i = true;
    })
    $(".swiper-wrapper").append(itemlist);

})
console.log('***');