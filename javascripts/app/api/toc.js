$(function(){$("#toc-list .level-1 > a").not("[target=_blank]").click(function(){return $(this).parent().find("> ol").slideToggle(function(){positionBackToTop(!0)}),!1}),$(function(){$(".anchorable-toc").each(function(){var t=$(this),n=t.data("id")||t.attr("id"),o="#"+n,a='<a class="toc-anchor" href="'+o+'"></a>';t.prepend(a)})})});