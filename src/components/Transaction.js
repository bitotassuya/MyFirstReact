import Item from './Item'
import './Main.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'; // ES6
{/* using uuid for unique props */ }

const Transaction = () => {
    {/* we define id for using maked unique key*/ }
    const data = [
        { name: "นิก", title: "ค่ารักษาพยาบาล", amount: 2000 },
        { name: "เจม", title: "ค่าอาหาร", amount: 500 },
        { name: "แบม", title: "ค่าไฟ", amount: 1000 },
        { name: "โก้", title: "ค่าห้อง", amount: 10000 },
        { name: "อาร์ม", title: "ค่าเทอม", amount: 30000 },
        { name: "บีม", title: "ค่าอินเตอร์เนต", amount: 1500 }

    ]
    return (
        <ul className='item-list'>

            {/* pull data in array  by map function each property*/}

            {data.map((element) => {
                return <Item name={element.name} title={element.title} amount={element.amount} key={uuidv4()
                } />

                {/* if each property same name  we can use spread operator
                retrun <Item {...element}/>
        */}
            })}


        </ul>
    );
}
export default Transaction;