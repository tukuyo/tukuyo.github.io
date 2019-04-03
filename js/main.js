$.get('../csv/itemlist.csv',function(data){
    var csv = $.csv.toArrays(data);
    var itemlist = '';
    var i = false;
    let button = "<div class="+"button"+"><a href="+"http://www.tukuyo.net/portfolio"+">一覧へ</a></div>"; 

    $(csv).each(function(index){
        if(i != false){
            var used = this[2].split(",")
            var li = "";
            used.forEach(function(value){
                li += "<li>" + value + "</li>"
            });
                // console.log(this[6]);
            if (this[6]) {
                itemlist += "<div><img src=" + "pic/" + this[3] + ".PNG><h3>" + this[0] + "</h3><ul>" + li + "</ul><p>" + this[1] + "</p><div>製作期間：" + this[5] + "</div><div class=" + "button" + "><a href=" + this[6] + ">サイトへ</a></div></div>"
            } else {
                itemlist += "<div><img src=" + "pic/" + this[3] + ".PNG><h3>" + this[0] + "</h3><ul>" + li + "</ul><p>" + this[1] + "</p><div>製作期間：" + this[5] + "</div></div>"                
            }
        }
        i = true;
    })
    $(".Product").append(itemlist);
    $(".Product").append(button)
})
console.log('***');
