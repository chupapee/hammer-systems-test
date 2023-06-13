import axios from 'axios';

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export async function getCustomers() {
  await timer(getRandom(300, 1000))
  const customers = await axios.get( BASE_URL )
  return customers?.data;
}

const timer = (ms) => new Promise(ok => setTimeout(ok, ms))
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
