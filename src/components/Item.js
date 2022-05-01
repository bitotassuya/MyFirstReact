import './Main.css'
import PropTypes from 'prop-types';
// ES6 using for defining data types


const Item = (props) => {
    const { name, title, amount } = props
    return (
        //When you want to use css , you must create by "className"

        <li className='zoom'>{'ผู้จ่าย' + name + ': '}{title}<spam>{amount} </spam></li>

    );
}
Item.prototype = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}
export default Item