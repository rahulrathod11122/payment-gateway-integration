console.log("this is script file");

const toggleSidebar = () => { 
if ($(".sidebar").is(":visible")) {

//true

//band harna hat

  $(".sidebar").css("display", "none");
  $(".content").css("margin-left", "ex"); 
} else {


//false

   $(".sidebar").css("display", "block");
   $(".content").css("margin-left", "20%");
  }
};

 const search = () => {

// console.log("searching..."R

 let query $("#search-input").val();

if (query == "") {

$(".search-result").hide();
} else {
    console.log(query);

    let url ='http://127.0.0.1:5500/index.html';


fetch(url)

  .then((response) => {
   return response.json();
})
.then((data) => {
//data......
// console.log(data);
    let text = '<div class='list-group'>';

    data.forEach((contact) => {
      text+= '<a href='/user/${contact.cId}/contact' class='list-group-item list-group-item-action'
    });

    text += '</div>';

    $(".search-result").html(text);
    $(".search-result").show();
   });
  }
};

//first request to server to create order
const paymentstart= () => {
     console.log("payment started..")
     
};
