//ch_03
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import Library from './ch_03/Library';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library/>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



//ch_04
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import Clock from './ch_04/Clock';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

// reportWebVitals();



//ch_05
//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import reportWebVitals from './reportWebVitals';

//import CommentList from './ch_05/CommentList';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <CommentList />
//  </React.StrictMode>
//);

//reportWebVitals();

//ch_06
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import NotificationList from './ch_06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationList />
  </React.StrictMode>
);

reportWebVitals();
