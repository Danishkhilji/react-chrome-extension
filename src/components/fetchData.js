import { useState,useEffect } from 'react';

function FetchData() {
    
  const [obj, setObj] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
    .then(response => response.json())
    .then(data => setObj(data))
  },[id])

   
  const handleId = (event) => {
    setId(Number(event.target.value));
  };
  
  return (
    <div className="container">
    <input
        type="number"
        className="input"
        value={id}
        onChange={handleId}
      />
      <table>
        <tr>
            <th>Title</th>
            <th>price</th>
            <th>rating</th>
        </tr>
        <tr>
            <td>{obj.title}</td>
            <td>{obj.price}</td>
            <td>{obj.rating}</td>
        </tr>
    </table>
    </div>
  );
}

export default FetchData;
