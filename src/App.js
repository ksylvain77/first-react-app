import React, { useState } from 'react';
import FileUpload from './FileUpload';
import ColumnSelection from './ColumnSelection';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [selectedColumns, setSelectedColumns] = useState([]);

  const handleFileUpload = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const data = JSON.parse(reader.result);
      setJsonData(data);
    };
    reader.readAsText(file);
  };


  return (
    <div className="App">
      <header className="App-header">
        <FileUpload handleFileUpload={handleFileUpload} />
        {jsonData && (
          <ColumnSelection
            jsonData={jsonData}
            selectedColumns={selectedColumns}
            setSelectedColumns={setSelectedColumns}
          />
        )}
      </header>
    </div>
  );
}

export default App;
