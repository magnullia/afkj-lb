// Fetch and display the data
fetch('filtered_data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const tableHeader = document.getElementById('table-header');
        const tableBody = document.getElementById('table-body');

        // Add "Index" column to the table header
        const indexHeader = document.createElement('th');
        indexHeader.textContent = 'Index';
        tableHeader.appendChild(indexHeader);

        // Add other column headers
        const keys = Object.keys(data[0]);
        keys.forEach(key => {
            const th = document.createElement('th');
            th.textContent = key;
            tableHeader.appendChild(th);
        });

        // Populate table rows
        data.forEach((item, index) => {
            const row = document.createElement('tr');

            // Add Index cell
            const indexCell = document.createElement('td');
            indexCell.textContent = index + 1; // Index starts from 1
            if (index < 30) {
                indexCell.style.fontWeight = 'bold'; // Highlight top 30
                indexCell.style.color = 'gold';
            }
            row.appendChild(indexCell);

            // Add data cells
            keys.forEach(key => {
                const td = document.createElement('td');
                td.textContent = item[key];
                row.appendChild(td);
            });

            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
