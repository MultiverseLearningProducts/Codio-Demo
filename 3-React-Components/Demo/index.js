import React from "react"
import { createRoot } from 'react-dom/client';
import Message from "./components/Message"

const root = createRoot(document.getElementById('root'));
root.render(<Message />);