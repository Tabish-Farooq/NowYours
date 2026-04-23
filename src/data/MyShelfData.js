const Habit = require('../assets/habits.png');
const Rich  = require('../assets/rich.png');
const The   = require('../assets/the.png');
const Harry = require('../assets/harry.png');

export const MyShelfData = [
  {
    id: '1',
    title: 'Atomic Habits',
    price: '₹250',
    date: '12 April 2026',
    status: 'Active',
    statusColor: '#4CAF50',
    views: 128,
    chats: 24,
    img: Habit,
  },
  {
    id: '2',
    title: 'Rich Dad Poor Dad',
    price: '₹180',
    date: '10 April 2026',
    status: 'Active',
    statusColor: '#4CAF50',
    views: 95,
    chats: 18,
    img: Rich,
  },
  {
    id: '3',
    title: 'The Alchemist',
    price: '₹150',
    date: '8 April 2026',
    status: 'Sold',
    statusColor: '#FF9800',
    views: 40,
    chats: 5,
    img: The,
  },
  {
    id: '4',
    title: 'Harry Potter',
    price: '₹300',
    date: '5 April 2026',
    status: 'Draft',
    statusColor: '#9C27B0',
    views: 210,
    chats: 47,
    img: Harry,
  },
];