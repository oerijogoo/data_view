const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const { Parser } = require('json2csv');
const pdf = require('html-pdf');
const ExcelJS = require('exceljs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const pdfkit = require('pdfkit');
const _ = require('lodash');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'openmrs',
});

const app = express();

// Route to fetch and display the patient data
app.get('/meru', (req, res) => {
  // Perform a database query to call the stored procedure and fetch data
  pool.query('CALL GetexitPatientDatameru()', (err, results) => {
    if (err) {
      console.error('Error executing stored procedure: ', err);
      res.status(500).send('Error executing stored procedure');
      return;
    }

    // Process the fetched data
    let patientData = results[0]; // Stored procedure results are returned in the first element of the results array

    // Remove duplicates based on EICI_ID
    patientData = _.uniqBy(patientData, 'EICI_ID');

    let htmlTable = '';
    patientData.forEach(item => {
      htmlTable += `
        <tr>
          <td>${item.patient_id}</td>
          <td>${item.patient_name}</td>
          <td>${item.exit_date}</td>
          <td>${item.coded_value}</td>
          <td>${item.disposition_factor}</td>
          <td>${item.state_province}</td>
          <td>${item.facility}</td>
          <td>${item.EICI_ID}</td>
          <td>${item.PROGRAM}</td>
          <td>${item.PHONE_NUM}</td>
          <td>${item.provider_Name}</td>
        </tr>
      `;
    });

    // Read the index.html file
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading index.html file: ', err);
        res.status(500).send('Error reading index.html file');
        return;
      }

      // Replace the table body with the populated patient data
      const html = data.replace('<!-- Table data will be populated dynamically -->', htmlTable);
      res.send(html);
    });
  });
});

// Route to fetch and display the patient data for GetexitPatientDataKisumu stored procedure
app.get('/kisumu', (req, res) => {
  // Perform a database query to call the stored procedure and fetch data
  pool.query('CALL GetexitPatientDataKisumu()', (err, results) => {
    if (err) {
      console.error('Error executing GetexitPatientDataKisumu stored procedure: ', err);
      res.status(500).send('Error executing stored procedure');
      return;
    }

    // Process the fetched data
    let patientData = results[0]; // Stored procedure results are returned in the first element of the results array

    // Remove duplicates based on EICI_ID
    patientData = _.uniqBy(patientData, 'EICI_ID');

    let htmlTable = '';
    patientData.forEach(item => {
      htmlTable += `
        <tr>
          <td>${item.patient_id}</td>
          <td>${item.patient_name}</td>
          <td>${item.exit_date}</td>
          <td>${item.coded_value}</td>
          <td>${item.disposition_factor}</td>
          <td>${item.state_province}</td>
          <td>${item.facility}</td>
          <td>${item.EICI_ID}</td>
          <td>${item.PROGRAM}</td>
          <td>${item.PHONE_NUM}</td>
          <td>${item.provider_Name}</td>
        </tr>
      `;
    });

    // Read the index.html file
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading index.html file: ', err);
        res.status(500).send('Error reading index.html file');
        return;
      }

      // Replace the table body with the populated patient data
      const html = data.replace('<!-- Table data will be populated dynamically -->', htmlTable);
      res.send(html);
    });
  });
});

// Route to fetch and display the patient data for GetexitPatientDataBungoma stored procedure
app.get('/bungoma', (req, res) => {
  // Perform a database query to call the stored procedure and fetch data
  pool.query('CALL GetexitPatientDataBungoma()', (err, results) => {
    if (err) {
      console.error('Error executing GetexitPatientDataBungoma stored procedure: ', err);
      res.status(500).send('Error executing stored procedure');
      return;
    }

    // Process the fetched data
    let patientData = results[0]; // Stored procedure results are returned in the first element of the results array

    // Remove duplicates based on EICI_ID
    patientData = _.uniqBy(patientData, 'EICI_ID');

    let htmlTable = '';
    patientData.forEach(item => {
      htmlTable += `
        <tr>
          <td>${item.patient_id}</td>
          <td>${item.patient_name}</td>
          <td>${item.exit_date}</td>
          <td>${item.coded_value}</td>
          <td>${item.disposition_factor}</td>
          <td>${item.state_province}</td>
          <td>${item.facility}</td>
          <td>${item.EICI_ID}</td>
          <td>${item.PROGRAM}</td>
          <td>${item.PHONE_NUM}</td>
          <td>${item.provider_Name}</td>
        </tr>
      `;
    });

    // Read the index.html file
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading index.html file: ', err);
        res.status(500).send('Error reading index.html file');
        return;
      }

      // Replace the table body with the populated patient data
      const html = data.replace('<!-- Table data will be populated dynamically -->', htmlTable);
      res.send(html);
    });
  });
});

// Route to fetch and display the patient data for GetexitPatientDataUasingishu stored procedure
app.get('/uasingishu', (req, res) => {
  // Perform a database query to call the stored procedure and fetch data
  pool.query('CALL GetexitPatientDataUasingishu()', (err, results) => {
    if (err) {
      console.error('Error executing GetexitPatientDataUasingishu stored procedure: ', err);
      res.status(500).send('Error executing stored procedure');
      return;
    }

    // Process the fetched data
    let patientData = results[0]; // Stored procedure results are returned in the first element of the results array

    // Remove duplicates based on EICI_ID
    patientData = _.uniqBy(patientData, 'EICI_ID');

    let htmlTable = '';
    patientData.forEach(item => {
      htmlTable += `
        <tr>
          <td>${item.patient_id}</td>
          <td>${item.patient_name}</td>
          <td>${item.exit_date}</td>
          <td>${item.coded_value}</td>
          <td>${item.disposition_factor}</td>
          <td>${item.state_province}</td>
          <td>${item.facility}</td>
          <td>${item.EICI_ID}</td>
          <td>${item.PROGRAM}</td>
          <td>${item.PHONE_NUM}</td>
          <td>${item.provider_Name}</td>
        </tr>
      `;
    });

    // Read the index.html file
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading index.html file: ', err);
        res.status(500).send('Error reading index.html file');
        return;
      }

      // Replace the table body with the populated patient data
      const html = data.replace('<!-- Table data will be populated dynamically -->', htmlTable);
      res.send(html);
    });
  });
});

// Route to fetch and display the patient data for GetexitPatientDataAll stored procedure
app.get('/all', (req, res) => {
  // Perform a database query to call the stored procedure and fetch data
  pool.query('CALL GetexitPatientDataAll()', (err, results) => {
    if (err) {
      console.error('Error executing GetexitPatientDataAll stored procedure: ', err);
      res.status(500).send('Error executing stored procedure');
      return;
    }

    // Process the fetched data
    let patientData = results[0]; // Stored procedure results are returned in the first element of the results array

    // Remove duplicates based on EICI_ID
    patientData = _.uniqBy(patientData, 'EICI_ID');

    let htmlTable = '';
    patientData.forEach(item => {
      htmlTable += `
        <tr>
          <td>${item.patient_id}</td>
          <td>${item.patient_name}</td>
          <td>${item.exit_date}</td>
          <td>${item.coded_value}</td>
          <td>${item.disposition_factor}</td>
          <td>${item.state_province}</td>
          <td>${item.facility}</td>
          <td>${item.EICI_ID}</td>
          <td>${item.PROGRAM}</td>
          <td>${item.PHONE_NUM}</td>
          <td>${item.provider_Name}</td>
        </tr>
      `;
    });

    // Read the index.html file
    fs.readFile('index.html', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading index.html file: ', err);
        res.status(500).send('Error reading index.html file');
        return;
      }

      // Replace the table body with the populated patient data
      const html = data.replace('<!-- Table data will be populated dynamically -->', htmlTable);
      res.send(html);
    });
  });
});

// Route to export data to CSV
app.post('/export-csv', (req, res) => {
  pool.query('CALL GetexitPatientDatameru()', (err, results) => {
    if (err) {
      console.error('Error executing stored procedure: ', err);
      res.status(500).send('Error executing stored procedure');
      return;
    }

    const patientData = results[0];
    const csvWriter = createCsvWriter({
      path: 'patient_data.csv',
      header: [
        { id: 'patient_id', title: 'Patient ID' },
        { id: 'patient_name', title: 'Patient Name' },
        { id: 'exit_date', title: 'Exit Date' },
        { id: 'coded_value', title: 'Coded Value' },
        { id: 'disposition_factor', title: 'Disposition Factor' },
        { id: 'state_province', title: 'State/Province' },
        { id: 'facility', title: 'Facility' },
        { id: 'EICI_ID', title: 'EICI ID' },
        { id: 'PROGRAM', title: 'Program' },
        { id: 'PHONE_NUM', title: 'Phone Number' },
        { id: 'provider_Name', title: 'Provider Name' },
      ],
    });

    csvWriter
      .writeRecords(patientData)
      .then(() => {
        console.log('CSV file has been written successfully.');
        res.download('patient_data.csv');
      })
      .catch((error) => {
        console.error('Error writing CSV file:', error);
        res.status(500).send('Error exporting data to CSV');
      });
  });
});

// Route to export data to Excel
app.post('/export-excel', (req, res) => {
  pool.query('CALL GetexitPatientDatameru()', (err, results) => {
    if (err) {
      console.error('Error executing stored procedure: ', err);
      res.status(500).send('Error executing stored procedure');
      return;
    }

    const patientData = results[0];
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Patient Data');
    worksheet.columns = [
      { header: 'Patient ID', key: 'patient_id' },
      { header: 'Patient Name', key: 'patient_name' },
      { header: 'Exit Date', key: 'exit_date' },
      { header: 'Coded Value', key: 'coded_value' },
      { header: 'Disposition Factor', key: 'disposition_factor' },
      { header: 'State/Province', key: 'state_province' },
      { header: 'Facility', key: 'facility' },
      { header: 'EICI ID', key: 'EICI_ID' },
      { header: 'Program', key: 'PROGRAM' },
      { header: 'Phone Number', key: 'PHONE_NUM' },
      { header: 'Provider Name', key: 'provider_Name' },
    ];

    worksheet.addRows(patientData);

    workbook.xlsx
      .writeFile('patient_data.xlsx')
      .then(() => {
        console.log('Excel file has been written successfully.');
        res.download('patient_data.xlsx');
      })
      .catch((error) => {
        console.error('Error writing Excel file:', error);
        res.status(500).send('Error exporting data to Excel');
      });
  });
});

// Route to export data to PDF
app.post('/export-pdf', (req, res) => {
  pool.query('CALL GetexitPatientDatameru()', (err, results) => {
    if (err) {
      console.error('Error executing stored procedure: ', err);
      res.status(500).send('Error executing stored procedure');
      return;
    }

    const patientData = results[0];
    let htmlTable = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Meru exit patient data</title>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
            table-layout: fixed;
          }
          th, td {
            border: 1px solid black;
            padding: 8px;
            font-size: 6px; /* Adjust the font size as needed */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          th {
            background-color: #f2f2f2;
          }
          .scrollable-table {
            overflow-x: auto;
            white-space: nowrap;
          }
        </style>
      </head>
      <body>
        <h1>Meru exit data</h1>
        <div class="scrollable-table">
          <table>
            <thead>
              <tr>
                
                <th>Patient Name</th>
                <th>Exit Date</th>
                
               
                
                <th>Facility</th>
                <th>EICI ID</th>
                <th>Program</th>
                <th>Phone Number</th>
                <th>Provider Name</th>
                <!-- Add more table headers for additional columns -->
              </tr>
            </thead>
            <tbody>
    `;

    patientData.forEach(item => {
      const sanitizedData = Object.values(item).map(value => value || ''); // Ensure that null or undefined values are converted to empty strings
      htmlTable += `
              <tr>
                
                <td>${sanitizedData[1]}</td>
                <td>${sanitizedData[2]}</td>
                
                
                <td>${sanitizedData[6]}</td>
                <td>${sanitizedData[7]}</td>
                <td>${sanitizedData[8]}</td>
                <td>${sanitizedData[9]}</td>
                <td>${sanitizedData[10]}</td>
                <!-- Add more table cells for additional columns -->
              </tr>
      `;
    });

    htmlTable += `
            </tbody>
          </table>
        </div>
      </body>
      </html>
    `;

    const pdfOptions = {
      format: 'A4',
      landscape: true
    };
    pdf.create(htmlTable, pdfOptions).toFile('patient_data.pdf', (err, result) => {
      if (err) {
        console.error('Error generating PDF: ', err);
        res.status(500).send('Error exporting data to PDF');
        return;
      }
      console.log('PDF file has been written successfully.');
      res.download('patient_data.pdf');
    });
  });
});
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
  });