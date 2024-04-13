import react from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Home(){

  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchRecords() {
      try {
        const response = await axios.get('http://localhost:5000/records');
        setRecords(response.data);
    } catch (error) {
        console.error('Error fetching records:', error);
    }
    }

    fetchRecords();
}, []);

return (
    <div>
    <h1>Records</h1>
    <table>
        <thead>
        <tr>
            <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {records.map(record => (
            <tr key={record._id}>
            <td>{record.name}</td>
            <td>{record.age}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
}

export default Home;
