import logo from './logo.svg';
import './App.css';
import Box from './Box';
import List from './List';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';

const list = [
  {id: 1, title: 'Laptops'},
  {id: 2, title: 'Computers'},
  {id: 3, title: 'Iphones'},
];

const ListPage = () => {
  return (
    <div>
      <h2>The list</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DetailPage = () => {
  const { id } = useParams();
  const item = list.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h4>Details</h4>
      <p>ID: {item.id}</p>
      <p>Title: {item.title}</p>
      <p>Description: {item.description}</p>
    </div>
  );
};

function App() {
  // const liElements = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  // const renderItem = (item, index) => {
  //   const style = { color: index % 2 === 0 ? 'red' : 'green' };
  //   return (
  //     <li key={index} style={style}>{item} - App </li>
  //   );
  // };

  return (
    <div className='App'>
      {/* <Box>
        <p>This is first item</p>
      </Box>
      <Box>
        <p>This is second item</p>
      </Box>
      <Box>
        <p>This is third item</p>
      </Box>
      <Box>
        <img src='https://www.freeimages.com/photo/paper-texture-1195765'/>
      </Box> */}

      {/* <List listItems={liElements} renderItem={renderItem} /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListPage items={list} />} />
          <Route path="/products/:id" element={<DetailPage items={list} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
