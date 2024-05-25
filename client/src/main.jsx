import React from 'react'
import ReactDOM from 'react-dom/client'
import {  ConfigProvider } from 'antd';


import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#76ABAE',
        }
      }}
    >
      <App />
  </ConfigProvider>
  </React.StrictMode>,
)
