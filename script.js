// Write all your Javascript here!

function uk() {
    $.ajax({
    url:" https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh",
    success: function(data) {
        console.log(data);
        console.log(data.imageURL);
        console.log(data.date*1000);
        var d = new Date();
              // let d1 = new Date(data.list[0].dt*1000);
      document.querySelector(".image").innerHTML = `<img width="500" height="300"src="${data.imageURL}">`;
      document.querySelector(".card-title").innerHTML = `<div>${data.info.heading}</div>`;
      document.querySelector(".card-text").innerHTML = `<p>${data.info.description}'</p>`;
      document.querySelector(".date").innerHTML= d;

      document.querySelector(".title").innerHTML = `<div>${data.sale.heading}</div>`;
      document.querySelector(".description").innerHTML = `<p>${data.sale.description}'</p>`;


        }


   
}); //try to change language

    
}
$.ajax({
    url:" https://techkaro-test.herokuapp.com/api/v1/getdata",
    success: function(data) {
        console.log(data);
        console.log(data.imageURL);
        console.log(data.date*1000);
        var d = new Date();
              // let d1 = new Date(data.list[0].dt*1000);
      document.querySelector(".image").innerHTML = `<img width="500" height="300"src="${data.imageURL}">`;
      document.querySelector(".card-title").innerHTML = `<div>${data.info.heading}</div>`;
      document.querySelector(".card-text").innerHTML = `<p>${data.info.description}'</p>`;
      document.querySelector(".date").innerHTML= d;

      document.querySelector(".title").innerHTML = `<div>${data.sale.heading}</div>`;
      document.querySelector(".description").innerHTML = `<p>${data.sale.description}'</p>`;



     

      // document.querySelector(".min").innerHTML = data.main.temp_min;
      // document.querySelector(".max").innerHTML = data.main.temp_max;






        }


   
});