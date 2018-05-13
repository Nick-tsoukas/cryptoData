
var settings = {
  "async": true,
  "crossDomain": true,
  url: `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=1DAY&time_start=2017-01-01T00:00:00&time_end=2018-01-01T00:00:00&apikey={api key goes here}`,
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "582bb88d-1125-23da-6efe-ea041bf230e2"
  }
}

function getData(settings) {
  $.ajax(settings).then(function(response) {

    var price_close = response["0"].price_close;
    var time = response["0"].time_close;
    var data = response;
    var ourData = [];

    function buildData() {
      for (var i = 0; i < data.length; i++) {
        ourData.push(data.price_close);
      };
      return ourData;
    }

    var NewData = buildData();
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ],
          datasets: [
            {
              data: [
                10101,
                1,
                1,
                1,
                1,
                1
              ],
              lineTension: 0,
              backgroundColor: 'transparent',
              borderColor: '#007bff',
              borderWidth: 4,
              pointBackgroundColor: '#007bff'
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: false
                }
              }
            ]
          },
          legend: {
            display: false
          }
        }
      });
    });
  }

  getData(settings);

  // var ctx = document.getElementById("myChart");
  //
  // var myChart = new Chart(ctx, {
  //   type: 'line',
  //   data: {
  //     labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  //     datasets: [{
  //       data: [10000000000, 100, 18483, 24003, 23489, 24092, 12034],
  //       lineTension: 0,
  //       backgroundColor: 'transparent',
  //       borderColor: '#007bff',
  //       borderWidth: 4,
  //       pointBackgroundColor: '#007bff'
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [{
  //         ticks: {
  //           beginAtZero: false
  //         }
  //       }]
  //     },
  //     legend: {
  //       display: false,
  //     }
  //   }
  // });

  // this is our click event...we get the input from the user and then make the ajax call to the api
  // $("#coin_input").on('click',function(event) {
  //   event.preventDefault();
  //   var coin = $("#coin_val_text").val().toUpperCase();
  //   getData(coin,settings);
  // });
  //
  //
  // function putPrice(){
  // }
  // https://rest.coinapi.io/v1/exchangerate/BTC?apikey=620ACE64-6AA7-4E5C-90BE-C8A7AE16F9A2

  // coin is initialy set to empty string so we don't get a reference error
  //this is the setting object that the ajax call will use in the function getData
  // On the line below... using template literals: `${}`
  // The value of coin:${coin} comes from a user input with the id of... #coin_val_text
  // currently coin is = an empty string ""
  // "url": `https://rest.coinapi.io/v1/exchangerate/${coin}?apikey=620ACE64-6AA7-4E5C-90BE-C8A7AE16F9A2`,
  // "url": `https://rest.coinapi.io/v1/exchangerate/BTC?apikey=620ACE64-6AA7-4E5C-90BE-C8A7AE16F9A2`,
  // url: `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/history?period_id=1DAY&time_start=2016-01-01T00:00:00&time_end=2017-01-01T00:00:00&apikey=620ACE64-6AA7-4E5C-90BE-C8A7AE16F9A2`,


  //========================need this
  // var ourData = [];
  //  .price_close
  //  data.forEach(function(val, index, array) {
  //    ourData.push(val.price_close);
  //    console.log(val.price_close);
  //    return val.price_close;
  //
  // });

  //     var ar = [1,2,3,4,5];
  //
  // var ourData = [];
  //
  //
  // ar.forEach(function(curVal,index,array){
  //   ourData.push(curVal);
  // });
  //
  // console.log(ourData)

  ///this is out con log statment!!!!!!!!!!!@@@@@@@
  // console.log(closing);
  //.time_close

  // var data = response.rates[3];


  // console.log(response.rates[3]);
  //rates is an array
  //  console.log(response, " the total data structure")
  //  console.log(response["0"].time_close, "the first thing in the collection of data");
  // console.log(time, "this is time ");

  // console.log(price_close," this is price close!!!!!", time, " this is the time!!!!!!");

  //whole data ==========================
  // console.log(response, "whole data");
    // console.log(time, "this is time ");
    // var num = price_close;
