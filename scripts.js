// Fetch and display the data
fetch('filtered_data.json')
    .then(response => response.json())
    .then(data => {
        const tableHeader = document.getElementById('table-header');
        const tableBody = document.getElementById('table-body');

        // Get keys for table headers
        const keys = Object.keys(data[0]);
        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            tableHeader.appendChild(th);
        });

        // Populate table rows
        data.forEach(item => {
            const row = document.createElement('tr');
            keys.forEach(key => {
                const td = document.createElement('td');
                td.textContent = item[key];
                row.appendChild(td);
            });
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

