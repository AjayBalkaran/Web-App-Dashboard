var wTrafficChart = document.getElementById("widget-traffic-chart").getContext('2d');
var wDailyTrafficChart = document.getElementById('widget-dailyTraffic-chart').getContext('2d');
var wMobileUsers = document.getElementById('widget-mobileUsers-chart').getContext('2d');

// ====Trafic Chart Line====
var trafficChart = new Chart(wTrafficChart, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// ====Daily Traffic Chart Bar====
var dailyTrafficChart = new Chart(wDailyTrafficChart, {
    type: 'bar',
    data: dailyTrafficData,
    options: dailyTrafficOptions
})

// ====Mobile Users Chart doughnut====
var MobileUsers = new Chart(wMobileUsers, {
    type: 'doughnut',
    data: mobileUsersData,
    options: mobileUsersOptions
});
