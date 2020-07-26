import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DataTable from './components/Table';
import Loading from './components/Loading';
import './App.css';

const App = () => {

  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const json = require('../src/assets/data.json');
    setData(json);
    setItems(json);
    setIsLoading(false);
  }, []);

  const updateItems = (search) => {
    setIsLoading(true);
    const items = data.filter((item) => {
      return item.XMLName.toLowerCase().includes(search);
    });
    setItems(items);
    setIsLoading(false);
  }

  const find = (text) => {
    updateItems(text);
  }

  return (
    <div className="app">
      {isLoading && <Loading />}
      <Header search={find} />
      <DataTable items={items} />
    </div>
  );

}

export default App;
