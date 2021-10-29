import React, { useState } from "react";
import { mock } from "./mock";

function App() {
  const [data, setData] = useState(mock);
  const [newName, setName] = useState("");
  const [newStatus, setStatus] = useState("");
  const [selected, setSelected] = useState(null);
  const [addName, SetAddName] = useState('')
  const [addStatus, SetAddStatus] = useState('')


  const onSelect = (e) => {
    // console.log(e, 'qe');
    setName(e.name);
    setStatus(e.status);
    setSelected(e.id);
  };

  const onSave = () => {
    setSelected(null);
    let newdata = data.map((value) =>
      value.id === selected
        ? { ...value, name: newName, status: newStatus }
        : value
    );
    setData(newdata);
  };

  const onDelete = (e) => {
    console.log(e, "asda");
    const many = data.filter((value) => value.id !== e.id);
    setData(many);
  };

  const onAdd=()=>{
    const data1 = {id: data[data.length-1].id+1, name: addName, status: addStatus}
    const data2 = data
    data2.push(data1)
    setData(data2)
    console.log(data);
    SetAddName('')
    SetAddStatus('')
    // data.push()
  }

  const Restore = () => {
    
  };

  return (
    <div>
      <table
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "50%",
          margin: "100px auto",
        }}
      >
        <thead>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" onChange={(e)=>SetAddName(e.target.value)} value={addName} />
            </td>
            <td>
              <input type="text" onChange={(e)=>SetAddStatus(e.target.value)} value={addStatus} />
            </td>
            <td><button onClick={onAdd}>Add</button></td>
          </tr>
          
        </tbody>
      </table>

      <table
        border="1"
        style={{
          borderCollapse: "collapse",
          width: "50%",
          margin: "100px auto",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>
                {selected === value.id ? (
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={newName}
                  />
                ) : (
                  value.name
                )}
              </td>
              <td>
                {selected === value.id ? (
                  <input
                    type="text"
                    onChange={(e) => setStatus(e.target.value)}
                    value={newStatus}
                  />
                ) : (
                  value.status
                )}
              </td>
              <td>
                {selected === value.id ? (
                  <button onClick={() => onSave(value)}>save</button>
                ) : (
                  <button onClick={() => onSelect(value)}>edit</button>
                )}
                <button onClick={() => onDelete(value)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length === 0 ? (
        <button onClick={() => Restore()}>Restore</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
