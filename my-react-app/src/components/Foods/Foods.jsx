import Menu from "../Menu/Menu"
import burger from '../../assets/img/burger.jpg';
import  pizza from '../../assets/img/pizza.jpg';
import momo from '../../assets/img/momo.jpg'
import bu from '../../assets/img/bu.jpg'

const Foods = () => {
  return (
    <div>
        
        <div><h1>FOOD MENU</h1></div>
        
        <Menu img={burger} title='burger' price='20$' description='Made with Italian Sauce, Chicken, and organice vegetables.' />
        <Menu img={pizza} title='pizza' price='10$' description='best pizza ever in city ' /> 
        <Menu img={pizza} title='pizza' price='10$' description='best pizza ever in city ' /> 
        
        <Menu img={bu} title='bu' price='60$' description='best bu ever in city ' /> 
        <Menu img={momo} title='momo' price='40$' description='best momo ever in city ' /> 
    </div>
  )
}

export default Foods