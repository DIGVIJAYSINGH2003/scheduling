 import React from 'react'// now in latest version we dont need to wrote it
 import ReactDOM from 'react-dom/client'
 import App from './App';
 const Index = () => {
   return (
     // component should return jsx
     //strictmode run code twice to find bugs in code and help developer
     // shortcut for reqact fragment 
     <>
       <React.StrictMode>
         <div>hello</div>
       </React.StrictMode>
     </>

     // jsx always a return a single element
     // u should close each tag in jsx
     // use camelcase for attributes eg className 
     // in jsx we use curly braces to use javascript 
   );
 }
 
 export default Index 

 const root = ReactDOM.createRoot(document.getElementById("root"));

 root.render(<App />);

 