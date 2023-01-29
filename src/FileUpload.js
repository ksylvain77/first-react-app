import React, { useState } from 'react';
import * as XLSX from 'xlsx';

function FileUpload({ setFile }) {
  const [jsonData, setJsonData] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      setJsonData(XLSX.utils.sheet_to_json(worksheet));
    };
    fileReader.readAsArrayBuffer(file);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {jsonData &&
        jsonData.map((row, index) => (
          <div key={index}>{Object.values(row).join(', ')}</div>
        ))}
    </div>
  );
}

export default FileUpload;
