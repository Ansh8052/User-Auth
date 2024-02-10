import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Header from './component/Header';

//Decision Tree Data
const treeData = [
 {
    id: 1,
    name: 'Question 1',
    children: [
      {
        id: 2,
        name: 'Question 2',
        children: [
          {
            id: 3,
            name: 'Outcome 1',
            children: [],
          },
          {
            id: 4,
            name: 'Outcome 2',
            children: [],
          },
        ],
      },
    ],
 },
];

const DecisionTreeNode = ({ data }) => {
 const [collapsed, setCollapsed] = useState(false);

 const toggleCollapse = () => {
    setCollapsed(!collapsed);
 };

 return (
    <div>
      <div onClick={toggleCollapse}>
        {data.name} {collapsed ? '-' : '+'}
      </div>
      {!collapsed &&
        data.children.map((child) => (
          <DecisionTreeNode key={child.id} data={child} />
        ))}
    </div>
 );
};

const DecisionTree = () => {
 return (
    <div>
      <h2>Decision Tree</h2>
      {treeData.map((node) => (
        <DecisionTreeNode key={node.id} data={node} />
      ))}
    </div>
 );
};

export default function App() {
 return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/decision-tree' element={<DecisionTree />} />
      </Routes>
    </BrowserRouter>
 );
}