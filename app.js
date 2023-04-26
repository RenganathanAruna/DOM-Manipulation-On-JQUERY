$(".roll-span-class").css("color","red").hide();
$(".name-span-class").css("color","red").hide();
$(".mark-span-class").css("color","red").hide();


$(".btn-class").on("click",function(event){

    event.preventDefault();

   let rollno =  $("#input-roll-id").val();
   let name =  $("#input-name-id").val();
   let mark =  $("#input-mark-id").val();

    rollno.trim();
    name.trim();
    mark.trim();

 if(rollno == "" && name == "" && mark == "")
 {
    $(".roll-span-class").show();
    $(".name-span-class").show();
    $(".mark-span-class").show();
 }

 if(rollno == "")
 {
    $(".roll-span-class").show();
 }

 if(name == "")
 {
    $(".name-span-class").show();
 }

 if(mark == "")
 {
    $(".mark-span-class").show();
 }

 if(rollno != "" && name != "" && mark != "")
 {
    $("#table-id").append(`<tr><td>${rollno}</td><td>${name}</td><td>${mark}</td></tr>`)
    $("#input-roll-id").val("");
    $("#input-name-id").val("");
    $("#input-mark-id").val("");
 }

 
});

$(".input-roll-class").on("keyup",function(event)
{

    if(event.target.value.length > 0)
    {
        $(".roll-span-class").hide();
    }

    if(event.target.value.length == 0)
    {
        $(".roll-span-class").show();
    }

});


$(".input-name-class").on("keyup",function(event)
{

    if(event.target.value.length > 0)
    {
        $(".name-span-class").hide();
    }

    if(event.target.value.length == 0)
    {
        $(".name-span-class").show();
    }

});


$(".input-mark-class").on("keyup",function(event)
{

    if(event.target.value.length > 0)
    {
        $(".mark-span-class").hide();
    }

    if(event.target.value.length == 0)
    {
        $(".mark-span-class").show();
    }

});



