/* ============================================= */
/*      All of the Chart and page data           */
/* ============================================= */


// ================ Chart Data ====================

let trafficData = {
    labels: [
        '16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', 
        '11-17', '18-24', '25-31'
    ],
    datasets: [{
        label: 'Traffic',
        data: ['750', '1250', '1000', '1500', '2000', '1500', '1750', '1250', '1750', '2250', '1750', '2250'],
        backgroundColor:'rgba(116, 119, 191, .3)',
        borderColor: '#BCBFEB',
        borderWidth: 2,
        lineTension: 0,
        pointBackgroundColor: '#FFFFFF',
        pointRadius: 6,
        pointBorderColor: '#7377BF',
        pointBorderWidth: 2
    }]
}

let trafficOptions = {
    responsive: true,
    aspectRatio: 4,
    maintainAspectRatio: true,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false,
    }
}

let dailyTrafficData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: "Number Of Hits",
        data: [75, 100, 175, 125, 225, 200, 100],
          backgroundColor: "#7377BF",
          hoverBackgroundColor: "#81C98F"
    }]
}

let dailyTrafficOptions = {
    responsive:true,
    scales: {
        yAxes: [{
            ticks: {
                maxTicksLimit: 5,
                fontColor: '#6A6969',
            }
        }]
    },
    legend: {
        display: false,
    }
}


let mobileUsersData = {
    labels: ['Phones', 'Tablets','Desktops'],
    datasets: [{
        label: 'Mobile Users',
        data: [2000, 2000, 10000],
        backgroundColor: ['#81C98F', '#73B1BF', '#7477BF']
    }],
}

let mobileUsersOptions = {
    legend: {
        position: 'right',
        align: 'center',
        labels: {
            boxWidth: 28,
            fontFamily: 'Open Sans, sans-serif',
            fontSize: 14,
            padding: 18
    }
    },
    layout: {
        padding: {
          left: 0,
          right: 20,
          top: 20,
          bottom: 0
        }
    }
}


