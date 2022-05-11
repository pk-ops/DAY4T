var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var dataa=JSON.parse(request.response);
    console.log(dataa);
    //for(var i=0;i<dataa.length;i++){
     //   console.log(dataa[i].flag);
   // }
}