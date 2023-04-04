import React,{ Component }from 'react'
class App extends React.Component{
  state={
    fullName: "yasmine",
    Bio : "biobio",
    Profession: "IT",
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png',
  show : false,
}
toggle() {
  this.setState({show: !this.state.show})

}
 render() {
  return (
    <div>
    {this.state.fullName} <br/>
    {this.state.Bio} <br/>
    {this.state.Profession} <br/>
    <img src={this.state.img } alt='...'/>
    <button onClick={() => this.toggle()}>show</button>
    {this.state.show ? < show /> : null}

    
    </div>
  )
 } 
}
export default App;
