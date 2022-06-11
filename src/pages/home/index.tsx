import { useNavigate } from 'react-router-dom'
import './index.css'


export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div id="outer"><h1>
                
                Hi, welcome to
            </h1></div>
            <div id="outer"><h1>
                LocalFoods
            </h1></div>
            <div id="outer">
            <button type="button" className="inner" onClick={() => navigate('browse')}>Browse</button>
            <button type="button" className="inner" onClick={() => navigate('post')}>Add Stuff</button>
            <button type="button" className="inner" onClick={() => navigate('diagnose')}>Diagnose</button>
            </div>

    </div>
    
    )
}