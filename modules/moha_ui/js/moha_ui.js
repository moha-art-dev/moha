

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


(function ($) {

  var count = 0;
  var fileList=[];
  $(function() {
    $("#uploaderCustomInput").change(function () {

      var file = $("#uploaderCustomInput").val();
      if(file){

        var fileUrl = getFileUrl(this.id);
        $("ul#uploaderCustomFiles").append("<li class='weui-uploader__file' style='background-image:url(" + fileUrl + ");'></li>");

        var reader = new FileReader();
        reader.onloadend = function(event) {
          var base64data = event.target.result
          fileList.push(base64data + ",");
          $("input[name='moha_ui_file_values']:hidden").val(fileList);
        }
        reader.readAsDataURL(this.files[0]);

        count++;
      } else {
        //alert('blank');
      }
    });
  });

})(jQuery);
