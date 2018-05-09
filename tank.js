function checkJquery(){
  if(typeof $ === "function"){
    console.log("jquery has load");
     main()

  }else{
    setTimeout(checkJquery, 100);
   };
};
checkJquery()

  function main(){
var forward ="http://creator.kitsunei.com/hook/1d8cc980/forward";
var back ="http://creator.kitsunei.com/hook/1d8cc980/back";
var left ="http://creator.kitsunei.com/hook/1d8cc980/left";
var right ="http://creator.kitsunei.com/hook/1d8cc980/right";

    $( "#forward").click(function(){
          $.ajax({url:forward});
     });

     $( "#back").click(function(){
       
        $.ajax({url:back});
    });

    $( "#back").click(function(){
       
        $.ajax({url:left});
    });

    $( "#back").click(function(){
       
        $.ajax({url:right});
    });
     
 };


