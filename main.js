    getData(1); 
    function getData(param) {
      var arrPerson = []; 
      var urlB = 'https://swapi.co/api/people/?page='+param;
         fetch(urlB, {
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
          })
            .then(function (resp) {
                 return resp.json()
            })
            .then(function (data) {
               i = 0;
                  for (var item of data.results) {
                       arrPerson[i] = {
                       name: item.name,
                       bday: item.birth_year,
                       gender:item.gender,
                       planet:item.homeworld,
                       listfilms:item.films,
                       }   
                     var caption = document.getElementById("cap"+i);
                     var image = document.getElementById("img"+i);
                         caption.textContent= arrPerson[i].name; 
                         image.title = 'Нажмите для получения информации о герое'; 
                         image.src="images/"+arrPerson[i].name+".png";  
                     
               i++;
                 }
               if (param=="1"){
                  $("#Dialog2").dialog('close'); 
               } 

               if (arrPerson.length!=10){
                 for (var i = arrPerson.length; i < 10; i++) {
                       var caption = document.getElementById("cap"+i);
                        var image = document.getElementById("img"+i);
                         caption.textContent= ''; 
                         image.title = ''; 
                         image.src="images/no.jpg";  
                         image.removeEventListener("click",clickImg);                      
                   }  
               }
           })
           .then (function(){
                 for (var i = 0; i < arrPerson.length; i++) {
                      getNameplanet(arrPerson[i].planet,i);      
                 }
            })

           .then (function(){
                 for (var i = 0; i < arrPerson.length; i++) {
                   for (var y = 0; y < arrPerson[i].listfilms.length;y++) {
                        getMapofFilms(arrPerson[i].listfilms[y],i,y);                  
                   }
                }
           });
 
          
      function getNameplanet(param,l){
         fetch(param, {
         headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
         })
          .then(function (resp) {
           return resp.json()
          })
          .then(function (data) {
            arrPerson[l].planet = data.name;      
         });
        }


      function getMapofFilms(param,l,n){
         fetch(param, {
         headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
         })
          .then(function (resp) {
           return resp.json()
          })
          .then(function (data) {
            arrPerson[l].listfilms[n]=data.title;    
         })
          .then(function () {
            sessionStorage.clear();
            for (var i = 0; i < arrPerson.length; i++) {
              sessionStorage.setItem(i, JSON.stringify(arrPerson[i])); 
            }   
        });
                     
    }
 }
