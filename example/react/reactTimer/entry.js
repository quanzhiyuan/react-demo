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
                    <h1>hello wor!</h1>
                    <h2>this is {this.state.date.toLocaleDateString()}</h2>
                </div>
            )
        }
}
ReactDom.render(
    <Clock />,document.getElementById('reactTimer')
)