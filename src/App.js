import logo from './logo.svg';
import './App.css';
import Transaction from './components/Transaction';
import './components/Main.css'
const Description = () => <h2>บันทึกข้อมูลทั่วไปแต่ละวัน</h2>
const Title = () => <h1 style={{ color: 'red' }}>แอพบันทึกรายรับ-รายจ่าย</h1>

function App() {
  return (

    <div>
      <Title />
      <Description />
      <Transaction />
    </div >


  );
}

export default App;
