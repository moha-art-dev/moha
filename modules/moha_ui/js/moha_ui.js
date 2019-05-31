

function getFileUrl(sourceId) {
  var url;
  if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
    url = document.getElementById(sourceId).value;
  }
  else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
    url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
  }
  else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
    url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
  }
  return url;
}

function getAjaxWrapperId(id){
  var regex = /upload$/g;
  var replaced_id = id.replace(regex, "ajax-wrapper");
  return replaced_id;
}


(function ($) {

  $(function() {
    $("input:file").change(function () {
      var file = $("#"+this.id).val();
      if(file){
        var fileUrl = getFileUrl(this.id);
        var ajaxWrapperId = getAjaxWrapperId(this.id);
        $("#moha_ui_preview").append("<li class='weui-uploader__file' style='background-image:url(" + fileUrl + ");'></li>");
        $("#"+ajaxWrapperId).css("display","none");
      } else {
        //alert('blank');
      }
    });
  });

})(jQuery);
