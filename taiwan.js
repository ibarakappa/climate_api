let climateData = [];
let weather = [];
let cityone = document.querySelector(".city1-1");
let citytwo = document.querySelector(".city1-2");
let citythree = document.querySelector(".city2-1");
let cityfour = document.querySelector(".city2-2");
let wx = document.querySelector(".wx");
let minT = document.querySelector(".minT");
let maxT = document.querySelector(".maxT");
let icon = document.querySelector("#icon");

fetch(
   "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-7DB8EFD7-DE30-4538-808F-BF297E8D4109"
)
   .then(function (response) {
      return response.json();
   })

   .then(function (data) {
      console.log(data);
      climateData = data;
      cityWeather(cityone, "臺北市");
      cityWeather(citytwo, "高雄市");
      cityWeather(citythree, "宜蘭縣");
      cityWeather(cityfour, "臺東縣");
   });

function cityWeather(city, cityName) {
   city.innerText = cityName;
   climateData.records.location.forEach((i) => {
      if (i.locationName === cityName) {
         locate = i;
         return;
      }
   });
   wx.innerText = locate.weatherElement[0].time[0].parameter.parameterName;
   console.log(wx.innerText);
   minT.innerText =
      locate.weatherElement[2].time[0].parameter.parameterName + "-";
   maxT.innerText =
      locate.weatherElement[4].time[0].parameter.parameterName + "°C";
   console.log("成功!");
   switch (+locate.weatherElement[0].time[0].parameter.parameterValue) {
      case 1:
         icon.setAttribute("class", "fa-solid fa-sun");
         break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
         icon.setAttribute("class", "fa-solid fa-cloud");
         break;
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
         icon.setAttribute("class", "fa-solid fa-cloud-rain");
         break;
   }
}
