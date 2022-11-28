import React from "react"
import { createRoot } from 'react-dom/client';
import Cars from "./Cars"

// Practice array
const numbers = [1, 2, 3, 4, 5];
// Create a doubled array that doubles each value


let cars = [
    {
        brand: "Tesla",
        color: "Red"
    },
    {
        brand: "Toyota",
        color: "White"
    },
    {
        brand: "VW",
        color: "Purple"
    },
    {
        brand: "Honda",
        color: "Green"
    }
]
function App() {
    return(
    <div class = "cardContainer">
    {/* Write your map function here! */}
        {cars.map((car) => <Cars car = {car} />)}
        
    </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);