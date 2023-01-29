import React from 'react';

function ColumnSelection({ jsonData, selectedColumns, setSelectedColumns }) {
  return (
    <div>
      <div>
        {jsonData &&
          Object.keys(jsonData[0]).map((column) => (
            <div key={column}>
              <input
                type="checkbox"
                checked={selectedColumns.includes(column)}
                onChange={() => {
                  if (selectedColumns.includes(column)) {
                    setSelectedColumns(
                      selectedColumns.filter((c) => c !== column)
                    );
                  } else {
                    setSelectedColumns([...selectedColumns, column]);
                  }
                }}
              />
              {column}
            </div>
          ))}
      </div>
      <button onClick={() => console.log(selectedColumns)}>
        Submit Selection
      </button>
    </div>
  );
}

export default ColumnSelection;
