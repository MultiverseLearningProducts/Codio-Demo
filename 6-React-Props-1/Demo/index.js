import React from "react"
import { createRoot } from 'react-dom/client';

function Message() {
    return <h1>Hello person!</h1>
}


const root = createRoot(document.getElementById('root'));
root.render(<Message />);