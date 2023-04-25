let climateData = [];
let select = document.querySelector("#city");
let city = document.querySelector(".city");
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
      tpeWeather(climateData);
   });

setTimeout(function () {}, 1000);

select.addEventListener("change", function () {
   city.innerText = select.value;
   climateData.records.location.forEach((i) => {
      if (i.locationName === select.value) {
         locate = i;
         return;
      }
   });
   wx.innerText = locate.weatherElement[0].time[0].parameter.parameterName;
   minT.innerText =
      locate.weatherElement[2].time[0].parameter.parameterName + "-";
   maxT.innerText =
      locate.weatherElement[4].time[0].parameter.parameterName + "°C";
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
});

function tpeWeather(climateData) {
   let locate = climateData.records.location[5];

   city.innerText = locate.locationName;
   wx.innerText = locate.weatherElement[0].time[0].parameter.parameterName;
   minT.innerText =
      locate.weatherElement[2].time[0].parameter.parameterName + "-";
   maxT.innerText =
      locate.weatherElement[4].time[0].parameter.parameterName + "°C";

   switch (+locate.weatherElement[0].time[0].parameter.parameterValue) {
      case 1:
         icon.setAttribute("class", "fa-solid fa-sun");
         break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
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
   climateData.records.location.forEach((i) => {
      if (i.locationName !== "臺北市") {
         select.options.add(new Option(i.locationName, i.locationName));
      }
   });
}

function cityWeather(cityName) {
   city.innerText = cityName;
   climateData.records.location.forEach((i) => {
      if (i.locationName === cityName) {
         locate = i;
         return;
      }
   });
   wx.innerText = locate.weatherElement[0].time[0].parameter.parameterName;
   minT.innerText =
      locate.weatherElement[2].time[0].parameter.parameterName + "-";
   maxT.innerText =
      locate.weatherElement[4].time[0].parameter.parameterName + "°C";
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
