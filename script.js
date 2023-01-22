/** Events to add
    1. Validation
    2. Keyboard Event (Enter)
    3. Using the delete all button alert to pop up a warning window
    4. Design value-up
    */
    var ins_val;
    var todo_value;
    var stime_value;
    var ftime_value;
    var edit_val;
    
    function create_ins(obj) {
      ins_val = obj;
      if ($("#control_todo").hasClass("d-none")) {
        $("#control_todo").removeClass("d-none");
      } else {
        $("#control_todo").addClass("d-none");
      }
    }
    
    function insert() {
      var weekly = $(ins_val).val() - 1;
      var todo_value = $("#todo").val();
      var stime_value = $("#stime").val();
      var ftime_value = $("#ftime").val();
      $($("#weekend").children()[weekly]).append(
        "<div class='to_do'><span id='values'>" +
          todo_value +
          "</span><br><span id='time'>" +
          stime_value +
          "-" +
          ftime_value +
          "</span><div><button onclick='edit_open(this.parentElement)' class='mod'>&#9998;</button><button onclick='del(this)' class='close'>&times;</button></div></div>"
      );
    }
    
    function edit_open(obj) {
      edit_val = obj;
      if ($("#control_edit").hasClass("d-none")) {
        $("#edit").val($(edit_val).siblings("span").html());
        $("#control_edit").removeClass("d-none");
      } else {
        $("#control_edit").addClass("d-none");
      }
    }
    
    function edit(obj) {
      if ($("#control_edit").hasClass("d-none")) {
        $("#control_edit").removeClass("d-none");
      } else {
        $(edit_val).siblings("span").html($("#edit").val());
        $(edit_val).siblings("span").html($("#estime").val());
        $(edit_val).siblings("span").html($("#eftime").val());
        $("#control_edit").addClass("d-none");
      }
    }
    
    function del(obj) {
      $($($(obj).parent()).parent()).remove();
    }
    function allRemove() {
      $(".to_do").remove();
    }
    