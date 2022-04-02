import './App.css';
import Place from "./place";
import {Table} from 'react-bootstrap';

var places = [
    {
      name: "Pu Pu Point",
      latitude: 
        {
          degrees: 47,
          minutes: 29,
          seconds: 57,
          direction: "N"
        },
        longitude:
        {
          degrees: 122,
          minutes: 0,
          seconds: 29,
          direction: "W"
        },
        date: new Date("2021-06-03")
    },
    {
        name: "Pa Pa Creek",
        latitude: 
        {
          degrees: 39,
          minutes: 5,
          seconds: 50,
          direction: "N"
        },
        longitude:
        {
          degrees: 82,
          minutes: 59,
          seconds: 9,
          direction: "W"
        },
        date: new Date("2021-06-04")
    },
    {
      name: "Pa Pa Island",
      latitude: 
      {
        degrees: 47,
        minutes: 11,
        seconds: 29,
        direction: "N"
      },
      longitude:
      {
        degrees: 52,
        minutes: 50,
        seconds: 13,
        direction: "W"
      },
      date: new Date("2021-06-05")
  },
  {
    name: "Big Lick",
    latitude: 
    {
      degrees: 38,
      minutes: 53,
      seconds: 12,
      direction: "N"
    },
    longitude:
    {
      degrees: 84,
      minutes: 45,
      seconds: 12,
      direction: "W"
    },
    date: new Date("2021-06-06")
  },
  {
    name: "BrowLick",
    latitude: 
    {
      degrees: 38,
      minutes: 52,
      seconds: 44,
      direction: "N"
    },
    longitude:
    {
      degrees: 84,
      minutes: 41,
      seconds: 39,
      direction: "E"
    },
    date: new Date("2021-07-03")
  }
];
// sorting array by date
places = places.sort((a, b) => a.date - b.date)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table style={{border: 'ridge'}}>
          <thead>
            <tr>
              <td style={{width:"150px",border: 'ridge'}}>Name</td>
              <td style={{width:"150px",border: 'ridge'}}>Latitude</td>
              <td style={{width:"150px",border: 'ridge'}}>Longitude</td>
              <td style={{width:"200px",border: 'ridge'}}>Date</td>
              <td style={{width:"400px",border: 'ridge'}}>Distance from last point</td>
              <td style={{width:"200px",border: 'ridge'}}>How many days</td>
            </tr>

            {places.map( (note,key) => {
                if(key === 0)
                  return (
                      <Place
                          name={note.name}
                          previous_date={places[key].date}
                          current_date={note.date}
                          previous_one={places[key]}
                          current={note}/>                      
                  );
                else
                  return (
                    <Place
                        name={note.name}
                        previous_date={places[key-1].date}
                        current_date={note.date}
                        previous_one={places[key-1]}
                        current={note}/>                      
                 );
              }
              )
              }
            </thead>
        </Table>
      </header>
    </div>
  );
}
Place.defaultProp={
  
}
export default App;
