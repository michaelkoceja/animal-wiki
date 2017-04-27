$(function() {
    $("#img").click(function() {
      $("#hidden-lynx").show();
      $("#hidden-lovebird").hide();
      $("#hidden-hippo").hide();
  });
    $("#img2").click(function() {
      $("#hidden-lovebird").show();
      $("#hidden-lynx").hide();
      $("#hidden-hippo").hide();

  });
    $("#img3").click(function() {
      $("#hidden-hippo").show();
      $("#hidden-lynx").hide();
      $("#hidden-lovebird").hide();
  });
});
