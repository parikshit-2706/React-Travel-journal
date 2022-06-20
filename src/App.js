import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data';
function App() {

  console.log(data);
  const info = data.map((ele) =>{
    console.log(ele.title);
    console.log(ele.location);

    return  <Card title ={ele.title} 
    location = {ele.location}
    googleMapsUrl = {ele.googleMapsUrl}
    startDate = {ele.startDate}
    endDate = {ele.endDate}
    description = {ele.description}
    imageUrl = {ele.imageUrl}
  />;
  })


  return (
    <div className="App">
     <Navbar/>
    {info}
    </div>
  );
}

export default App;
