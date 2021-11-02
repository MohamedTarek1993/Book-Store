// <!-- tooltip -->

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// <!-- tooltip -->
// <!-- data-tabel -->

$(document).ready(function () {
    $('#example').DataTable({
        responsive: true
    });
});

// <!-- data-tabel -->

// responsive sidebar

let btn = document.querySelector('#btn');
let sidebar = document.querySelector('.sidebar');
let searchBtn = document.querySelector('.bx-search');

btn.onclick = function () {
    sidebar.classList.toggle('active');
}
searchBtn.onclick = function () {
    sidebar.classList.toggle('active');
}
// responsive sidebar

//chart1
const myChart1 = document.getElementById('myChart').getContext('2d');
const labels1 = [
    'Yes',
    'Yes But In Green',
];
const colors1 = ['#49a9ea', '#36caab'];
const data = {
    labels: labels1,
    datasets: [{
        data: [
            69, 31
        ],
        backgroundColor: colors1
    }]
}
const config = {
    type: 'doughnut',
    data: data,
    options: {
        title: {
            text: 'Do You Love Zamalek',
            display: true
        },
    },

};
const myChart = new Chart(myChart1, config);
//chart1

//chart2
let myChart2 = document.getElementById('myChart2').getContext('2d');
const labels2 = [
    'Delta Air Lines',
    'American Airlines Group',
    'Lufthansa Group',
    'United Airlines',
    'Air France–KLM',
];
const colors2 = ['#49a9ea', '#36caab', '#34495e', '#b370cf', '#000'];
const data2 = {
    labels: labels2,
    datasets: [{
        data: [
            89.000,
            128.900,
            534.92,
            81.527,
            125.205,

        ],
        backgroundColor: colors2,
        label: 'AirPlane Company Employee',
    }]
};
const config2 = {
    type: 'bar',
    data: data2,
    options: {
        title: {
            text: 'Do You Love Zamalek',
            display: true
        },
    },
};
let myChart3 = new Chart(myChart2, config2);
//chart2

//chart3
let xcd = document.getElementById('myChart3').getContext('2d');
const labels3 = [
    'Attack',
    'Defence',
    'Passing',
    'Tackle',
    'Speed',
];
const colors3 = "rgba(179 , 181 , 198 , .2)";
const borderColor3 = "rgba(179 , 181 , 198 ,1)";
const colors4 = "rgba(175 , 170 , 198 , .2)";
const borderColor4 = "rgba(175 , 170 , 198 ,1)";

const data3 = {
    labels: labels3,
    datasets: [{
        data: [
            50,
            12,
            55,
            7,
            29,
        ],
        backgroundColor: colors3,
        borderColor: borderColor3,
        label: 'Messi',
        fill: true,
        pointBorderColor: '#fff',
        pointBackgroundColor: borderColor3,
    }, {
        data: [
            80,
            15,
            50,
            13,
            40,
        ],
        backgroundColor: colors4,
        borderColor: borderColor4,
        label: 'ronaldo',
        fill: true,
        pointBorderColor: '#ccc',
        pointBackgroundColor: borderColor4,
    }
    ]
};

const config3 = {
    type: 'radar',
    data: data3,
    options: {
        title: {
            text: 'Who Is The Best',
            display: true
        },
    },
};
let myChart4 = new Chart(xcd, config3);
//chart3

//chart4
let xxz = document.getElementById('myChart4').getContext('2d');
const labels4 = [
    'Alexandria',
    'Aswan',
    'Cairo',
    'Dakahlia',
    'Giza',
];
const colors5 = ['#49a9ea', '#36caab', '#34495e', '#b370cf', '#000'];
const data4 = {
    labels: labels4,
    datasets: [{
        data: [
            20,
            15,
            30,
            15,
            20,

        ],
        backgroundColor: colors5,
    }]
};
const config4 = {
    type: 'pie',
    data: data4,
    options: {
        title: {
            text: 'Urban and Rural Population of Governorates',
            display: true
        },
    },
};
let myChart5 = new Chart(xxz, config4);
//chart4




