import 'babel-polyfill'
import React from 'react';
import ReactDom from 'react-dom';
class Clock extends React.Component {
        constructor(props){
            super(props);
            this.state={date:new Date()   };
        }
        render(){
            return  (
                <div>
                    <h1>hello world!</h1>
                    <h2>this is {this.state.date.toLocatTimeString()}</h2>
                </div>
            )
        }
}
Renderdom.render(
    <Clock />,document.getElementById('root')
)
