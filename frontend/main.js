fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(response => response.json())
    .then(data => {
        const populationData = data.data;

        populationData.sort((a, b) => a.Year - b.Year);

        const tableBody = document.getElementById('populationTableBody');
        populationData.forEach (entry => 
        {
            const row = document.createElement('tr');
            row.insertCell().textContent = entry.Year;
            row.insertCell().textContent = entry.Population.toLocaleString();
            tableBody.appendChild(row);
        })
    })
    .catch(error => console.error('Error fetching data:', error));