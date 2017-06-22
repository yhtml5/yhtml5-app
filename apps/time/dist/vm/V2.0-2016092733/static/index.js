;/*!server/author.js*/
/*=====================================================================
 * Author:Kyle && qichao
 * Website:http://yhtml5.com
 * Gihub:https://github.com/yhtml5
 * Description: We work hard to contribute our work back
 *              to the web, mobile, server, & new technology.
 *====================================================================*/
 'use strict';
;/*!components/js/fn.js*/
/*
 * @require ../../../server/author.js
 */
/************  fn  ************/
function toggleValue(selector, event, eventObject) {
    $(selector).on(event, function () {
        $(eventObject).val($(this).text());
    });
};
function toggleActive(selector, event) {
    $(selector).on(event, function () {
        $(selector).removeClass('active');
        $(this).addClass('active');
    });
};
function toggleActive2(selector, event) {
    $(selector).on(event, function () {
        $(selector).find(".y-decorate-default").removeClass('active');
        $(this).find(".y-decorate-default").addClass('active')
    })
};
function openModalSimple(btn, text, time, fun) {
    $(btn).on('click', function () {
        $('[y-text="simple"]').text(text);
        $('[y-modal="simple"]').fadeIn();
        setTimeout(function () {
            $('[y-modal="simple"]').fadeOut();
        }, time);
        fun;
    });
};
function yFadeToggle(selector, event, event2, eventObject) {
    $(selector).on(event, function () {
        $(eventObject).fadeIn();
    });
    $(selector).on(event2, function () {
        $(eventObject).fadeOut();
    });
};
(function () {
    var urlId = window.location.hash.replace(/^(.*[n])*.*(.|n)$/g, "$2") - 1;
    if (urlId >= 0) {
        $('.y-nav a').removeClass('active');
        $('.y-nav a:eq(' + urlId + ')').addClass('active');
    }
})();
function choiceGoods(radio, obj, text) {
    $(radio).on('click', function () {
        $(obj).text(text)
        var l = $('[y-group="good.manager"] .y-radio-success')
    })
}

;/*!components/js/do.js*/
/*
 * @require components/js/fn.js
 * @require shape-shifter.js
 */
/************  do  ************/

$(function () {
    toggleValue("[y-menu='record.status'] > li > a", "click", "[y-input='record.status']");
    toggleActive2(".y-decorate-div", "click", ".y-decorate-default");
    $('[y-btn="testTotalPut"]').on('click', function () {
        $('[y-list="testTotalPut"]').fadeToggle()
    })

    function yCallBack() {
        console.log('callback')
    };

    openModalSimple('[y-btn="store.unPut"]', '商品已下架', 2000, yCallBack);
    openModalSimple('[y-btn="store.order.success"]', '订货成功', 2000, yCallBack);
    // openModalSimple('[y-btn="store.put.success"]', '上架成功', 2000, yCallBack);
    // openModalSimple('[y-btn="store.unPut.success"]', '下架成功', 2000, yCallBack);
    openModalSimple('[y-store="type.add.true"]', '新建分类成功', 2000, yCallBack);
    openModalSimple('[y-btn="store.select"]', '请先选择商品', 2000, yCallBack);
    openModalSimple('[y-btn="store.type.success"]', '商品分类成功', 2000, yCallBack);
    toggleActive(".y-nav a", 'click');

    $("[y-store='type.add.ture']").click(function () {
        $(this).attr("data-dismiss", "modal");
        $("[y-store='type.success']").fadeIn();
    });
    $('[y-btn="store.typeEdit"]').on('click', function () {
        $('[y-div="store.typeEdit"]').fadeIn();
        $('[y-footer="store.finish"]').fadeIn();
        $('[y-footer="store.type"]').fadeOut()
    });
    $('[y-btn="store.finish"]').on('click', function () {
        $('[y-div="store.typeEdit"]').fadeOut();
        $('[y-footer="store.type"]').fadeIn();
        $('[y-footer="store.finish"]').fadeOut()
    });
    $(".y-btn-display-type").click(function () {
        $("[y-radio='radio.success']").each(function () {
            if ($(this).attr("class") == "y-radio-success") {
                window.open("store.display.classify.html", "_self");
            } else {
                $(".y-btn-display-type").attr("y-btn", "store.select");
            }
        })
    });

    $(".y-click-a").click(function () {
        var yRadio = $(this).find("[name='y-click-radio']");
        if (yRadio.attr("class") == "y-empty") {
            $(this).find("[name='y-click-radio']").addClass("y-radio-success").removeClass("y-empty");
        } else {
            $(this).find("[name='y-click-radio']").removeClass("y-radio-success").addClass("y-empty");
        }
    });

    $("[y-store='undisplay.success']").click(function () {
        $("[y-store='undisplay.success.info']").fadeIn();
    });

    function modalAddress() {
        var address = $("[y-modal='order.address']");
        if (address.find(".y-address").html() != "") {
            address.removeClass("y-hide");
        } else {
            address.addClass("y-hide");
            $("[y-modal='order.true']").click(function () {
                $(this).attr("data-dismiss", "modal");
                $("#address").modal("show");
            })
        }
    };

    (function () {
        var hash = window.location.hash;

        function changePut(text, navNum) {
            $('[y-text="simple"]').text(text);
            $('[y-modal="simple"]').fadeIn();
            setTimeout(function () {
                $('[y-modal="simple"]').fadeOut();
            }, 2000);
            $('.y-nav a').removeClass('active');
            $('.y-nav a:eq(' + navNum + ')').addClass('active');

        }

        if (hash === '#unPut') {
            changePut('下架成功', 1);
        } else if (hash === '#put') {
            changePut('上架成功', 0);
        }
    })();

    choiceGoods('[y-radio="goodManager"]', '[y-text="managerUnputAll"]', '批量下架')
    choiceGoods('[y-radio="goodManager"]', '[y-text="managerPutAll"]', '批量上架')
    modalAddress();
    /* fix bug: modal can't show in the ios system */
    $("[y-modal='orderInfo']").click(function () {
        $("#orderGoods").modal("show");
    });
    $("[y-modal='modifyInfo']").click(function () {
        $("#modifyInventory").modal("show");
    });
    $("[y-modal='classifyInfo']").click(function () {
        $("#classifyInfo").modal("show");
    });
    $("[y-btn='orderingGoods']").click(function () {
        $('[y-modal="orderingGoods"]').modal("show");
    });
    $("[y-modal='typeAddInfo']").click(function () {
        $("#typeAdd").modal("show");
    });
    $("[y-modal='typeDeleteInfo']").click(function () {
        $("#typeDelete").modal("show");
    });

    $("[y-modal='storeTypeEdit']").click(function () {
        $("#typeEdit").modal("show");
    });

    $("[y-input='navSearch']").click(function () {
        $("[y-a='navCancel']").addClass("y-hide");
        $("[y-a='navSearch']").removeClass("y-hide")

    })

    // $('[y-btn="listTypeEdit"]').click(function () {
    //     $('[y-modal="listTypeEdit"]').modal("show");
    // });


    $("[y-a='test']").click(function () {
        $("[y-div='test']").addClass("y-hide")
    })

    $(".y-footer-active a").each(function () {
        $(this).click(function () {
            $(this).addClass("active");
        })

    })

});




;/*!server/console.js*/
/*
 * @require server/author.js
 */
console.log("%c 时光激 %c Copyright \xa9 2015-%s", 'font-family: "microsoft yahei", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;", (new Date).getFullYear());
console.warn("%c " + "温馨提示：请不要调皮地在此粘贴执行任何内容，这可能会导致您的账户受到攻击，给您带来损失 ！^_^", "color:#333;font-size:16px;margin:4px;");
function yhtml5() {
    console.clear()
    console.log("%c YHTML5 %c https://github.com/yhtml5", 'font-family: "microsoft yahei", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;");
    console.log("%c " + "We work hard to contribute our work back to the web, mobile, big data, && new Front-End technology.", "color:#333;font-size:16px;margin:4px;");
}