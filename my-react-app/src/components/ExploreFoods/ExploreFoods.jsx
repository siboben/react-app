
import  bg from '../../assets/img/bg.jpg';
import pizza from '../../assets/img/pizza.jpg';

const ExploreFoods = () => {
    return (
  <div >
    <img src={bg} alt="background" style={{ width: '100%', height: '500px' }} />
    <h1>Explore Foods</h1>
    <div className='explore-foods'>
    <div style={{width: '50%',height:'50vh'}}>
    <img src={pizza} alt="background" style={{ width: '100%', height: '500px' }} />
    <h1>Get Once Quick</h1>
    </div>
    <div style={{width: '50%',height:'50vh'}}>
    <img src={pizza} alt="background" style={{ width: '100%', height: '500px' }} />
    <span >Get Once Quick</span>
    </div>
    <div style={{width: '50%',height:'50vh'}}>
    <img src={pizza} alt="background" style={{ width: '100%', height: '500px' }} />
    <span >Get Once Quick</span>
    </div>


    </div>
    
    </div>
    


     
    );
}

export default ExploreFoods;
