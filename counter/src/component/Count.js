import React from 'react';
export class Count extends React.Component
{
    constructor(){
        super();
        this.counter = 0;
        this.state ={counterValue:this.counter};
        this.fn = this.increment.bind(this);
        this.fin = this.decrement.bind(this);
      
    }
    increment(){
        console.log('what is this ',this);
        this.counter++;
        this.setState({counterValue:this.counter});
        console.log('Counter is ',this.counter);
    }
    decrement(){
        console.log('what is this ',this);
        this.counter--;
        this.setState({counterValue:this.counter});
        console.log('Counter is ',this.counter);

    }


   

      render(){
       console.log('Render CAll');
        return(<div>
               <h1>Count is {this.state.counterValue}</h1>
               <p>Counter is {this.counter}</p>
               <button onClick={this.fn}>Plus</button>
               <button onClick={this.fin}>Minus</button>
              
            </div>)
      }

    
      
      
    }