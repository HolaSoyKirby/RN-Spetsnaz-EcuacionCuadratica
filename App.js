import React, {PureComponent} from 'react'
import {View,TextInput,Button} from 'react-native'

export default class App extends PureComponent{

  constructor(props){
    super (props);

    this.state={
      a:0,
      b:0,
      c:0
    }

  }

  render(){ 

    return(
      <View>
        <TextInput style={{BorderWidth:1, margin:0}} placeholder='ax' 
        onChangeText={a=>this.setState({a}) }/>
        
        <TextInput style={{BorderWidth:1, margin:0}} placeholder='bx' 
        onChangeText={b=>this.setState({b}) }/>

        <TextInput style={{BorderWidth:1, margin:0}} placeholder='c' 
        onChangeText={c=>this.setState({c}) }/>

        <Button title='Presionar' onPress={this.Suma}/>
        
      </View>

    );

  }

  Suma=()=>{
    let a= parseInt(this.state.a);
    let b= parseInt(this.state.b);
    let c= parseInt(this.state.c);

    let x1= ((-1 * b) + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    let x2= ((-1 * b) - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
    
    alert(`x1= ${x1} \nx2= ${x2}`);
  }
}