$(function() {


  

  $("#send").click(function(){

    $("#modal").removeClass("hidden");
    $("#mask").removeClass("hidden");

    $("#modal-name").text(`名前：${$("#name").val()}`)
    $("#modal-kana").text(`カナ：${$("#kana").val()}`)
    $("#modal-postnum").text(`郵便番号${$("#kana").val()}`)
    $("#modal-address").text(`住所：${$("#towns").val()} ${$("#address").val()}`)
    $("#modal-sex").text(`性別：${$("input:radio[name = 'sex']:checked").val()}`);

    $("#form").validate({
      rules: {
        name: {
          required: true,
        },
        kana: {
          required: true,
        },
        postnum: {
          required: true,
        },
        address: {
          required: true,
        },
        towns: {
          required: true,
        },
        sex: {
          required: true,
        },
      },
      
      messages: {
        name: {
          required: "入力してください",
        },
        kana: {
          required: "入力してください",
        },
        postnum: {
          required: "入力してください",
        },
        address: {
          required: "入力してください",
        },
        towns: {
          required: "入力してください",
        },
        sex: {
          required: "選択してください",
        }
      },

      errorPlacement: function (err, element) {
        if (element.attr("name") === "sex") {
          element.parent().before(err);
        } else {
          element.before(err);
        }
    }

      
    })
  
  });

  $("#no").click(function() {
    $("#modal").addClass("hidden");
    $("#mask").addClass("hidden");
  });

  $("#yes").click(function() {
    $("form").submit()
    if ($(".error").text() !== "") {
      $("#modal").addClass("hidden");
      $("#mask").addClass("hidden");
    }
  });

  $("#mask ").click(function() {
    $("#no").click();
  });

});