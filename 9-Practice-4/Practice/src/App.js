import React from 'react';

export function Animal() {
    //Your Code Here:
    
}


export function App() {
    const animals = [
        {
            name: "Fido",
            species: "dog"
        },
        {
            name: "Wiskers",
            species: "cat"
        },
        {
            name:"Fred",
            species: "rabbit"
        }
    ];
    return <>
        {/* Render Animal Component in this Component, one for each animal in array */}
        <h1>Hello World</h1>
    </>
}
