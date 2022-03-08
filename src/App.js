import { useEffect, useState } from 'react';

const data = [
  {
    id: '1',
    name: 'Pilsner',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
  {
    id: '2',
    name: 'IPA',
    minimumTemperature: 5,
    maximumTemperature: 6,
  },
  {
    id: '3',
    name: 'Lager',
    minimumTemperature: 4,
    maximumTemperature: 7,
  },
  {
    id: '4',
    name: 'Stout',
    minimumTemperature: 6,
    maximumTemperature: 8,
  },
  {
    id: '5',
    name: 'Wheat beer',
    minimumTemperature: 3,
    maximumTemperature: 5,
  },
  {
    id: '6',
    name: 'Pale Ale',
    minimumTemperature: 4,
    maximumTemperature: 6,
  },
];

export async function getTemperature(id) {
  const temperature = await fetch(`http://localhost:8081/temperature/${id}`);
  const body = await temperature.json();
  if (temperature.ok && body) {
    return body;
  };
}

export function returnCombineArrayById(array1, array2) {
  return array1.map(v => ({ ...v, ...array2.find(i => i.id === v.id) }));
}

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const request = async () => {
      // return all of request data as array
      const request = await Promise.all(data.map(product => getTemperature(product.id)));
      // combine data and request into one array
      const result = returnCombineArrayById(request, data);
      setItems(result);
    }
    request();

    setInterval(request, 5000);
  }, []);

  return (
    <div className="App">
      <h2 data-testid="title">Beers</h2>
      <table>
        <thead>
          <tr>
            <th data-testid="product" align="left">Product</th>
            <th data-testid="temperature" align="left">Temperature</th>
            <th data-testid="status" align="left">Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(items).map((itemKey) => (
            <tr data-testid={`item-row-`+items[itemKey].id} key={items[itemKey].id}>
              <td width={150}>{items[itemKey].name}</td>
              <td width={150}>{items[itemKey].temperature}</td>
              <td width={150}>
                {items[itemKey].temperature <
                  items[itemKey].minimumTemperature && <span>too low</span>}
                {items[itemKey].temperature >
                  items[itemKey].maximumTemperature && <span>too high</span>}
                {items[itemKey].temperature <=
                  items[itemKey].maximumTemperature &&
                  items[itemKey].temperature >=
                    items[itemKey].minimumTemperature && <span>all good</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
