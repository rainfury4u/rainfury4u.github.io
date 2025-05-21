// Skills radar chart
const skillsChart = new Chart(document.getElementById('skillsChart'), {
    type: 'radar',
    data: {
        labels: ['Leadership', 'Customer Service', 'Problem Solving', 'Teamwork', 'Technical Skills'],
        datasets: [{
            label: 'Skill Level',
            data: [85, 90, 88, 92, 75],
            backgroundColor: 'rgba(37, 99, 235, 0.2)',
            borderColor: '#2563eb',
            pointBackgroundColor: '#2563eb'
        }]
    },
    options: {
        scales: {
            r: {
                angleLines: { display: true },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    }
});
