import React from 'react';
import ModalMy from './Components/Modal';
import Search from './Components/Search';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App container">
      <h1 className='text-center'>Quản lý người dùng</h1>
      <ModalMy/>
      <Search/>
      <UserList/>
    </div>
  );
}

export default App;
