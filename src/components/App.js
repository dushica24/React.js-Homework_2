import Car from "./Car"

/*const App = () => {
  let car1 = 'Audi'
  let car2 = 'BMW'
  let car3 = 'Jeep'

  return (
    <div className="App">

      <Car model={car1} info={car1, car2, car3}/> 
    </div>
  );
}

export default App;*/ 
const App = () => {
   let model1 = 'Audi'
   let model2 = 'Opel'
   let model3 = 'BMW'
   let car1 = {
    type: 'Sport',
    model: 'Audi',
    color: 'Blue',
    doors: 5,
    hatchback: 'No'};

  let car2 = {
    type: 'Family',
    model: 'Opel',
    color: 'Red',
    doors: 2,
    hatchback: 'Yes'};

  let car3 = {
    type: 'Sport',
    model: 'BMW',
    color: 'White',
    doors: 4,
    hatchback: 'No' 
    
  }; 
//   if (hatchback === 'Yes') {
//     doors++;
// };
  return (
    <div id='app'>
       <Car info={car1} />
       <Car info={car2} />
       <Car info={car3} />
       {/* <Car hatchback={'Yes'} /> */}
       <Car carModel={model1} />
       <Car carModel={model2} />
       <Car carModel={model3} />
    </div>
  );
};

export default App;