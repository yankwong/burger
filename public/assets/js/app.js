var YTK = YTK || {};

YTK.burgers = (function($) {
  verifyForm = function(obj) {
    return true;
  },
  initAddBurgerBtn = function() {
    var $addBtn = $('.add-burger-btn');

    $addBtn.on('click', function(e) {
      var $textArea = $('#new-burger-ta'),
          newBurgerName = $textArea.val().trim();

      if (newBurgerName !== '') {
        var newBurger = {
          name : newBurgerName
        };

        $.ajax({
          dataType: "json",
          method: 'post',
          url: "/api/new",
          data: newBurger,
        })
        .done(function(data) {
          window.location.href = '/';
        });
      }

    });
  },
  initEatBtns = function() {
    var $eatBtns = $('.eat-btn');

    $eatBtns.on('click', function(e) {
      var $this = $(this),
          burgerID = parseInt($this.attr('data-id')),
          postObj = {
            id : burgerID
          }

      if (burgerID > 0) {
        $.ajax({
          dataType: "json",
          method: 'post',
          url: "/api/devour",
          data: postObj,
        })
        .done(function(data) {
          var $thisRow  = $this.closest('.burger-row'),
              $midCol   = $thisRow.find('.devour-action'),
              $leftCol  = $thisRow.find('.active'),
              $rightCol = $thisRow.find('.eaten');

          $leftCol.addClass('hidden');
          $rightCol.removeClass('hidden');
          $midCol.addClass('hidden');
        });
      }
      
    });
  },
  initPage = function() {
    initEatBtns();
    initAddBurgerBtn();
  };

return {
    initPage : initPage
  }
})(jQuery);

$(function() {
  YTK.burgers.initPage();
});