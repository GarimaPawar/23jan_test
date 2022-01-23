var countryInput = $("#country");

$("form button").click(function (e) {
    e.preventDefault();
    let country = countryInput.val();
    
    console.log(country);
    
    if( country === "") {
        alert("Please fill the field");
        return;
    }

    let url = "http://universities.hipolabs.com/search?country=" + country ;
    
    $.get(url, function (data) {
        
        console.log(data)

        for(let i=0;i<data.length;i++){
            //  console.log(data[i].web_pages[0]);
            let div  = document.createElement('div');
         div.innerHTML= `<p> country : ${data[i].country},university :${data[i].name} , website: <a href=${data[i].web_pages[0]}>${data[i].web_pages[0]}</a>  </p>`
          
        document.getElementById('country-details').appendChild(div);
  
        }
         

    });

});