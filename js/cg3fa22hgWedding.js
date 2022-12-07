var numberGuests
var numberTables
let numberGuests = prompt("How many guests will attend?");
let numberTables = prompt("How Many tables?")
var table = $('.sortable'),
      z = 1;
  
  $('#table').on("click", function(){
      z++;
      $('#tables').append('<ul id="table_'+z+'" class="snap_target guests"><p></p><span class="table_number" contenteditable="true">'+z+'</span></ul>');
      start_drag();
  });
  
  
  $('#fix').on("click", function(){
    start_drag();
  });
    
  
  $("#add_guests").on("click", function(){
    var temp = $("#guest_names").val();
    var guests = [];
    guests = temp.split(",");
    
    for (var i = 0; i < guests.length; i++) {
      if (guests[i]!==" " ){
        $("#sortable").append("<li><div contenteditable='true'>"+guests[i]+"</div><span>x</span></li>");
      }
    }
    start_drag();
  });
  
  $("#export").on("click", function(){
  var export_val = $('#tables').html(); 
  $("#export_text").val(export_val);
    $("#tables ul").each(function(){
      var table_no = "\(" + $(this).find(".table_number").text()+"\)",
      guest_na = "" + $(this).find('li div').text();
      console.log(table_no + guest_na[0]); 
     });
   
  });
  $('body').on("click", "li span", function(){
    $(this).parent().remove();
  })
;