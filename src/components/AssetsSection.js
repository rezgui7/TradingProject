import './AssetsSection.css';
import { useState } from 'react';
import {DataTable} from "primereact/datatable";
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primeicons/primeicons.css';


const AssetsSection = () => {

  const [globalFilter, setGlobalFilter] = useState('');


  const [selectedButton, setSelectedButton] = useState('Most Popular');


  const [mostPopular, setMostPopular] = useState([
    {
      id:1,
      1:"XAUUSD",
      2:1955.40 ,
      3:1955.61 ,
      4:"-0.128%",
    },
    {
      id:2,
      1:"USOIL",
      2:71.808 ,
      3:71.858 ,
      4:"1.524%",
    },
    {
      id:3,
      1:"TECH100",
      2:15086.050 ,
      3:15086.550 ,
      4:"-0.564%",
    },
    {
      id:4,
      1:"DJ30",
      2:34309.9 ,
      3:34314.4 ,
      4:"-0.209%",
    },
    {
      id:5,
      1:"BNBUSD",
      2:243.773 ,
      3:245.273 ,
      4:"-0.196%",
    },
    {
      id:6,
      1:"EURUSD",
      2:1.09346 ,
      3:1.09357 ,
      4:"-0.088%",
    },
    
    
  ]);

  const [risesFallers, setrisesFallers] = useState([
    {
      id:1,
      1:"INTC",
      2:36.60 ,
      3:36.72 ,
      4:"2.121%",
    },
    {
      id:2,
      1:"UBER",
      2:43.38 ,
      3:43.48 ,
      4:"0.440%",
    },
    {
      id:3,
      1:"SUGAR",
      2:26.29 ,
      3:26.34 ,
      4:"2.415%",
    },
    {
      id:4,
      1:"BIDU",
      2:145.08 ,
      3:145.38 ,
      4:"-2.231%",
    },
    {
      id:5,
      1:"PDD",
      2:79.88 ,
      3:79.98 ,
      4:"-1.273%",
    },
    {
      id:6,
      1:"MSFT",
      2:342.68 ,
      3:342.83 ,
      4:"-1.704%",
    },
    
    
  ]);

  const [forex, setForex] = useState([
    {
      id:1,
      1:"AUDUSD",
      2:0.68569 ,
      3:0.68589 ,
      4:"-0.233%",
    },
    {
      id:2,
      1:"EURAUD",
      2:1.59567 ,
      3:1.59595 ,
      4:"0.259%",
    },
    {
      id:3,
      1:"EURCAD",
      2:1.44527 ,
      3:1.44560 ,
      4:"0.136%",
    },
    {
      id:4,
      1:"EURCHF",
      2:0.97805 ,
      3:0.97830 ,
      4:"-0.018%",
    },
    {
      id:5,
      1:"EURGBP",
      2:0.85323 ,
      3:0.85339 ,
      4:"0.046%",
    },
    {
      id:6,
      1:"EURNZD",
      2:1.75962 ,
      3:1.76000 ,
      4:"0.280%",
    },
    
    
  ]);
  const [commodities, setCommodities] = useState([
    {
      id:1,
      1:"XAGUSD",
      2:24.040 ,
      3:24.081 ,
      4:"-0.369%",
    },
    {
      id:2,
      1:"XAUUSD",
      2:1955.94 ,
      3:1956.15 ,
      4:"0.028%",
    },
    {
      id:3,
      1:"XCUUSD",
      2:8524.75 ,
      3:8554.75 ,
      4:"-0.478%",
    },
    {
      id:4,
      1:"XNIUSD",
      2:22859.03 ,
      3:23029.47 ,
      4:"-0.274%",
    },
    {
      id:5,
      1:"XPDUSD",
      2:1407.40 ,
      3:1419.20 ,
      4:"-0.085%",
    },
    {
      id:6,
      1:"XPTUSD",
      2:979.85 ,
      3:982.05 ,
      4:"-0.457%",
    },
    
    
  ]);
  const [indice, setIndice] = useState([
    {
      id:1,
      1:"AUS200",
      2:7288.75 ,
      3:7291.85 ,
      4:"0.350%",
    },
    {
      id:2,
      1:"CHINA300",
      2:3915.1 ,
      3:3919.1 ,
      4:"-0.372%",
    },
    {
      id:3,
      1:"CHINA50",
      2:12931.00 ,
      3:12943.00 ,
      4:"-0.680%",
    },
    {
      id:4,
      1:"DJ30",
      2:34249.7 ,
      3:34254.2 ,
      4:"-0.175%",
    },
    {
      id:5,
      1:"ESP35",
      2:9488.86 ,
      3:9497.36 ,
      4:"0.619%",
    },
    {
      id:6,
      1:"EUSTX50",
      2:4373.45 ,
      3:4375.55 ,
      4:"-0.228%",
    },
    
    
  ]);
  const [stocks, setStocks] = useState([
    {
      id:1,
      1:"AAPL",
      2:184.74 ,
      3:184.86 ,
      4:"-0.672%",
    },
    {
      id:2,
      1:"AMZN",
      2:125.68 ,
      3:125.77 ,
      4:"-1.296%",
    },
    {
      id:3,
      1:"BA",
      2:219.88 ,
      3:220.18 ,
      4:"0.242%",
    },
    {
      id:4,
      1:"BABA",
      2:92.04 ,
      3:92.20 ,
      4:"-0.043%",
    },
    {
      id:5,
      1:"BAC",
      2:29.17 ,
      3:29.26 ,
      4:"-0.579%",
    },
    {
      id:6,
      1:"BIDU",
      2:145.08 ,
      3:145.38 ,
      4:"-2.231%",
    },
    
    
  ]);
  const [crypto, setCrypto] = useState([
    {
      id:1,
      1:"ADAUSD",
      2:36.60 ,
      3:36.72 ,
      4:"2.121%",
    },
    {
      id:2,
      1:"BNBUSD",
      2:43.38 ,
      3:43.48 ,
      4:"0.440%",
    },
    {
      id:3,
      1:"BCHUSD",
      2:26.29 ,
      3:26.34 ,
      4:"2.415%",
    },
    {
      id:4,
      1:"BTCUSD",
      2:145.08 ,
      3:145.38 ,
      4:"-2.231%",
    },
    {
      id:5,
      1:"DOGUSD",
      2:79.88 ,
      3:79.98 ,
      4:"-1.273%",
    },
    {
      id:6,
      1:"DOTUSD",
      2:342.68 ,
      3:342.83 ,
      4:"-1.704%",
    },
    
    
  ]);
  
/*-----------------------------------------------------------------------------------*/
const handleButtonClick1 = () =>  {
  
  setSelectedButton((prevButton) => (prevButton === 'Most Popular' ? '' : 'Most Popular'));

  // Update the entire data in the table
  const newData = [
    {
      id:1,
      1:"XAUUSD",
      2:1955.40 ,
      3:1955.61 ,
      4:"-0.128%",
    },
    {
      id:2,
      1:"USOIL",
      2:71.808 ,
      3:71.858 ,
      4:"1.524%",
    },
    {
      id:3,
      1:"TECH100",
      2:15086.050 ,
      3:15086.550 ,
      4:"-0.564%",
    },
    {
      id:4,
      1:"DJ30",
      2:34309.9 ,
      3:34314.4 ,
      4:"-0.209%",
    },
    {
      id:5,
      1:"BNBUSD",
      2:243.773 ,
      3:245.273 ,
      4:"-0.196%",
    },
    {
      id:6,
      1:"EURUSD",
      2:1.09346 ,
      3:1.09357 ,
      4:"-0.088%",
    },
    
    
  ];
  setMostPopular(newData);
};

const handleButtonClick2 = () =>  {
  
  setSelectedButton((prevButton) => (prevButton === "Risers & Fallers" ? '' : "Risers & Fallers"));
  // Update the entire data in the table
  const newData = [
    {
      id:1,
      1:"INTC",
      2:36.60 ,
      3:36.72 ,
      4:"2.121%",
    },
    {
      id:2,
      1:"UBER",
      2:43.38 ,
      3:43.48 ,
      4:"0.440%",
    },
    {
      id:3,
      1:"SUGAR",
      2:26.29 ,
      3:26.34 ,
      4:"2.415%",
    },
    {
      id:4,
      1:"BIDU",
      2:145.08 ,
      3:145.38 ,
      4:"-2.231%",
    },
    {
      id:5,
      1:"PDD",
      2:79.88 ,
      3:79.98 ,
      4:"-1.273%",
    },
    {
      id:6,
      1:"MSFT",
      2:342.68 ,
      3:342.83 ,
      4:"-1.704%",
    },
    
    
  ];
  setMostPopular(newData);
};
const handleButtonClick3 = () => {
  setSelectedButton((prevButton) => (prevButton === "Forex" ? '' : "Forex"));

  // Update the entire data in the table
  const newData = [
    {
      id:1,
      1:"AUDUSD",
      2:0.68569 ,
      3:0.68589 ,
      4:"-0.233%",
    },
    {
      id:2,
      1:"EURAUD",
      2:1.59567 ,
      3:1.59595 ,
      4:"0.259%",
    },
    {
      id:3,
      1:"EURCAD",
      2:1.44527 ,
      3:1.44560 ,
      4:"0.136%",
    },
    {
      id:4,
      1:"EURCHF",
      2:0.97805 ,
      3:0.97830 ,
      4:"-0.018%",
    },
    {
      id:5,
      1:"EURGBP",
      2:0.85323 ,
      3:0.85339 ,
      4:"0.046%",
    },
    {
      id:6,
      1:"EURNZD",
      2:1.75962 ,
      3:1.76000 ,
      4:"0.280%",
    },
    
    
  ];
  setMostPopular(newData);
};
const handleButtonClick4 = () => {
  setSelectedButton((prevButton) => (prevButton === "Commodities" ? '' : "Commodities"));

  // Update the entire data in the table
  const newData = [
    {
      id:1,
      1:"XAGUSD",
      2:24.040 ,
      3:24.081 ,
      4:"-0.369%",
    },
    {
      id:2,
      1:"XAUUSD",
      2:1955.94 ,
      3:1956.15 ,
      4:"0.028%",
    },
    {
      id:3,
      1:"XCUUSD",
      2:8524.75 ,
      3:8554.75 ,
      4:"-0.478%",
    },
    {
      id:4,
      1:"XNIUSD",
      2:22859.03 ,
      3:23029.47 ,
      4:"-0.274%",
    },
    {
      id:5,
      1:"XPDUSD",
      2:1407.40 ,
      3:1419.20 ,
      4:"-0.085%",
    },
    {
      id:6,
      1:"XPTUSD",
      2:979.85 ,
      3:982.05 ,
      4:"-0.457%",
    },
    
    
  ];
  setMostPopular(newData);
};const handleButtonClick5 = () => {
  setSelectedButton((prevButton) => (prevButton === "Indice" ? '' : "Indice"));

  // Update the entire data in the table
  const newData = [
    {
      id:1,
      1:"AUS200",
      2:7288.75 ,
      3:7291.85 ,
      4:"0.350%",
    },
    {
      id:2,
      1:"CHINA300",
      2:3915.1 ,
      3:3919.1 ,
      4:"-0.372%",
    },
    {
      id:3,
      1:"CHINA50",
      2:12931.00 ,
      3:12943.00 ,
      4:"-0.680%",
    },
    {
      id:4,
      1:"DJ30",
      2:34249.7 ,
      3:34254.2 ,
      4:"-0.175%",
    },
    {
      id:5,
      1:"ESP35",
      2:9488.86 ,
      3:9497.36 ,
      4:"0.619%",
    },
    {
      id:6,
      1:"EUSTX50",
      2:4373.45 ,
      3:4375.55 ,
      4:"-0.228%",
    },
    
    
  ];
  setMostPopular(newData);
};
const handleButtonClick6 = () => {
  setSelectedButton((prevButton) => (prevButton === "Stocks" ? '' : "Stocks"));

  // Update the entire data in the table
  const newData = [
    {
      id:1,
      1:"AAPL",
      2:184.74 ,
      3:184.86 ,
      4:"-0.672%",
    },
    {
      id:2,
      1:"AMZN",
      2:125.68 ,
      3:125.77 ,
      4:"-1.296%",
    },
    {
      id:3,
      1:"BA",
      2:219.88 ,
      3:220.18 ,
      4:"0.242%",
    },
    {
      id:4,
      1:"BABA",
      2:92.04 ,
      3:92.20 ,
      4:"-0.043%",
    },
    {
      id:5,
      1:"BAC",
      2:29.17 ,
      3:29.26 ,
      4:"-0.579%",
    },
    {
      id:6,
      1:"BIDU",
      2:145.08 ,
      3:145.38 ,
      4:"-2.231%",
    },
    
    
  ];
  setMostPopular(newData);
};
const handleButtonClick7 = () => {
  setSelectedButton((prevButton) => (prevButton === "Crypto" ? '' : "Crypto"));

  // Update the entire data in the table
  const newData = [
    {
      id:1,
      1:"ADAUSD",
      2:36.60 ,
      3:36.72 ,
      4:"2.121%",
    },
    {
      id:2,
      1:"BNBUSD",
      2:43.38 ,
      3:43.48 ,
      4:"0.440%",
    },
    {
      id:3,
      1:"BCHUSD",
      2:26.29 ,
      3:26.34 ,
      4:"2.415%",
    },
    {
      id:4,
      1:"BTCUSD",
      2:145.08 ,
      3:145.38 ,
      4:"-2.231%",
    },
    {
      id:5,
      1:"DOGUSD",
      2:79.88 ,
      3:79.98 ,
      4:"-1.273%",
    },
    {
      id:6,
      1:"DOTUSD",
      2:342.68 ,
      3:342.83 ,
      4:"-1.704%",
    },
    
    
  ];
  setMostPopular(newData);
};

/*------------------------------------------------------------------------------------*/

const handleGlobalFilter = (event) => {
  
};




    return ( 
        <div class="container">
        <div class="item1">
            <h3 class="h3_tit">Trade Popular Assets Grasp Investment Opportunities</h3>
  <p>Become one of the millions investors in the world and invest in global trending products</p>
            <br/>
            <ul class="list">
  <li class="item">
    <span class="span">Forex Market: Includes major global currencies such as the US dollar, Euro, Japan Yen, Pound Sterling, Australian dollar, Canadian dollar, New Zealand dollar, Swiss Franc and so on;</span>
  </li>
  <li class="item">
    <span class="span">Commodity Market: Includes Gold, Silver, Crude oil, Palladium, Platinum, Copper, Nickel, and natural gas;</span>
  </li>
  <li class="item">
    <span class="span">Index Market: Includes trading of international stock market indices such as the United States, Europe, Asia, Australia, etc;</span>
  </li>
  <li class="item">
    <span class="span">Stock Market: Includes all blue-chip stocks and high-tech companies such as Amazon, Apple, and Tesla in the states;</span>
  </li>
  <li class="item">
    <span class="span">Cryptocurrency Market: Includes popular products such as Bitcoin, Ethereum, and Litecoin, etc;</span>
  </li>
</ul>
<br/>

<p>MTFE provides all free of charge real-time quotation on global assets, professional trading strategies of third party institutions, financial market analysis, 24-hour customer support to let investor trade worry-free.</p>
        </div>
        <div class="item1">
        <div>
        <div className="p-inputgroup">
        <span className="p-inputgroup-addon">
          <i className="pi pi-search" />
        </span>
        <InputText
          type="text"
          placeholder="Search..."
          value={globalFilter}
          onChange={handleGlobalFilter}
        />
      </div>
        <div>
        <div className="button-container">
        <Button label="Most Popular" onClick={handleButtonClick1} className="p-button-secondary" style={{
            background: selectedButton === 'Most Popular' ? 'darkblue' : 'transparent',
            color: selectedButton === 'Most Popular' ? 'white' : 'black',
          }} />
        <Button label="Risers & Fallers" onClick={handleButtonClick2} className="p-button-secondary" style={{
            background: selectedButton === "Risers & Fallers" ? 'darkblue' : 'transparent',
            color: selectedButton === "Risers & Fallers" ? 'white' : 'black',
          }} />
        <Button label="Forex" onClick={handleButtonClick3} className="p-button-secondary" style={{
            background: selectedButton ==="Forex" ? 'darkblue' : 'transparent',
            color: selectedButton === "Forex" ? 'white' : 'black',
          }} />
        <Button label="Commodities" onClick={handleButtonClick4} className="p-button-secondary" style={{
            background: selectedButton === "Commodities" ? 'darkblue' : 'transparent',
            color: selectedButton === "Commodities" ? 'white' : 'black',
          }} />


</div>
<div className="second-row">
        <Button label="Indice" onClick={handleButtonClick5} className="p-button-secondary" style={{
            background: selectedButton === "Indice" ? 'darkblue' : 'transparent',
            color: selectedButton === "Indice" ? 'white' : 'black',
          }} />
        <Button label="Stocks" onClick={handleButtonClick6} className="p-button-secondary" style={{
            background: selectedButton === "Stocks" ? 'darkblue' : 'transparent',
            color: selectedButton === "Stocks"? 'white' : 'black',
          }} />
        <Button label="Crypto" onClick={handleButtonClick7} className="p-button-secondary" style={{
            background: selectedButton === "Crypto" ? 'darkblue' : 'transparent',
            color: selectedButton === "Crypto" ? 'white' : 'black',
          }} />
</div>


      <DataTable value={mostPopular} > 
        
      <Column
    field="1"
    
  />
  
  <Column
    field="2"
    body={(rowData) => {
      const value = parseFloat(rowData['4'].replace('%', ''));
      const isNegative = value < 0;
      const color = isNegative ? 'green' : 'red';
      return (
        <span style={{ color: color }}>
          {rowData['2']}
        </span>
      );
    }}
  />
  <Column 
   body={(rowData) => (
      
        <Button
          label="Sell"
         
          className="p-button-secondary"
        />
        
      
    )} />
  
        <Column
    field="3"
    body={(rowData) => {
      const value = parseFloat(rowData['4'].replace('%', ''));
      const isNegative = value < 0;
      const color = isNegative ? 'green' : 'red';
      return (
        <span style={{ color: color }}>
          {rowData['3']}
        </span>
      );
    }}
  />
  <Column body={(rowData) => (
      <Button
          label="Buy"
          className="p-button-secondary"
        />
    )}
     />
        <Column
    field="4"
    body={(rowData) => {
      const value = parseFloat(rowData['4'].replace('%', ''));
      const isNegative = value < 0;
      const color = isNegative ? 'green' : 'red';
      return (
        <span style={{ color: color }}>
          {rowData['4']}
        </span>
      );
    }}
  />
      </DataTable>
    </div>
    </div>
        </div>
        </div>



        
      );
}
 
export default AssetsSection;