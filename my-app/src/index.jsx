import React from 'react';
import ReactDOM from 'react-dom';
import LoginContainer from './js/components/LoginContainer';
import './index.css';

class Index extends React.Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
                <div className='index'>
                    <LoginContainer 
                        login={false}
                    />
                </div>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById("root"));