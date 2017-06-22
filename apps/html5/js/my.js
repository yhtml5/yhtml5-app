$(function(){
    var tabActive = $(".multab #tabview .t-bla .sc-text-active");
    var tabSingle = $(".multab #tabview .t-bla .sc-text-tab").parent();
    $(".sc-text-active").addClass("focus1");
    tabSingle.on("click",function(){
        var tabIndex = $(this).attr("data-index");
        if(tabIndex=="0"){
            $(".sc-text-active").removeClass("focus1 focus2").addClass("focus2");
        }else{
            $(".sc-text-active").removeClass("focus1 focus2").addClass("focus1");
        }
    })
})
