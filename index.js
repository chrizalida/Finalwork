   
   $(document).ready(function()
   {
      $.fn.bootstrapcarousel.Constructor.TRANSITION_DURATION = 500;
      $("#Carousel1").bootstrapcarousel({interval:3000});
      $("#Dialog1").dialog(
      {
         title: 'Краткая информация о персонаже',
         modal: true,
         width: 783,
         height: 429,
         position: { my: 'center top', at: 'center top', of: window },
         buttons:
         [
            {
               text: "Ok",
               click: function()
               {
                  closeModal();
               }
            }
         ],
         resizable: true,
         draggable: true,
         closeOnEscape: true,
         show: false,
         hide: false,
         autoOpen: false,
         classes: {'ui-dialog': 'Dialog1'} 
      });

   $("#Dialog2").dialog(
      {
         title: 'Добро пожаловать',
         modal: true,
         width: 408,
         height: 135,
         position: { my: 'center', at: 'center', of: window },
         resizable: false,
         draggable: false,
         closeOnEscape: false,
         show: false,
         hide: false,
         autoOpen: true,
         classes: {'ui-dialog': 'Dialog2'} 
      });

      var container = document.querySelector("#mn_pagin");
      var matches = container.querySelectorAll("li>a");     
        for (var i = 0; i < matches.length; i++) {
              matches[i].addEventListener("click",
                  function (e) {
                    var target = e.target;
                      if (target.tagName == 'A') {
                        e.preventDefault();
                        var page =target.id; 
                        getData(page);
                      }
                   
                  });
        }

      var galery = document.querySelector("#gallery");
      var img = galery.querySelectorAll("img");     
        for (var i = 0; i < img.length; i++) {
              img[i].addEventListener("click",clickImg);
        }
});
  
      function clickImg (e) {
        var target = e.target;
          if (target.tagName == 'IMG') {
            if (sessionStorage.length!=0){
                var data = {};
                    id = target.id.substr(3);
                    if (sessionStorage.getItem(id)) {                               
                        data = JSON.parse(sessionStorage.getItem(id));
                    } else {
                        return false;
                    }
                    var cell1 = document.getElementById("Text11");
                    var span1 =cell1.querySelector("span"); 
                        span1.innerHTML = "";
                        span1.innerHTML = data.name;
                    var cell2 = document.getElementById("Text12");
                    var span2 =cell2.querySelector("span"); 
                        span2.innerHTML = "";
                        span2.innerHTML = data.bday;
                    var cell3 = document.getElementById("Text13");
                    var span3 =cell3.querySelector("span"); 
                        span3.innerHTML = "";
                        span3.innerHTML = data.gender;
                    var cell4 = document.getElementById("Text14");
                    var span4 =cell4.querySelector("span"); 
                        span4.innerHTML = "";
                        span4.innerHTML = data.planet;
                    var cell5 = document.getElementById("Text15");
                    var span5 =cell5.querySelector("span"); 
                        span5.innerHTML = "";
                        for (var i = 0; i < data.listfilms.length; i++) {
                             span5.innerHTML+= data.listfilms[i]+';';
                        }                      
                    $("#Dialog1").dialog('open');
              } else {
                return false;
              }
          }                  
      }              
    
      function closeModal(){
          $("#Dialog1").dialog('close');
     }

  