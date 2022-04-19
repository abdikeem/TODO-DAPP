import React, {useState, useEffect} from 'react';
import {TextField, Button} from "@mui/material";
import Task from './Task';
import './App.css';

import {TaskContractAddress} from './config.js';
import {ethers} from 'ethers';
import TaskAbi from './utils/TaskContract.json';


function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [currentAccount, setCurrentAccount] = useState('');
  const [correctNetwork, setCurrentNetwork] = useState(false);

  const connectWallet = async
}

export default App;
