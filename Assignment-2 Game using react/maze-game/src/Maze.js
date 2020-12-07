import React,{Component} from 'react';
import ArrowKeysReact from 'arrow-keys-react';


import { FaUserNinja } from 'react-icons/fa';
import { GiNinjaStar } from 'react-icons/gi';

function Square(props) {
  return (
    <button className="square">
      {props.value}
    </button>
  );
}

class Maze extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(this.props.size*this.props.size).fill(null),
          pos: 0,
          enemy: this.props.size,
          moves: 0,
          c_size: 0,
          p_size: 0,
        };
    }

    
    foo() {
      const squares = this.state.squares.slice();
      const s=this.state.c_size;
    
      var val=0;
    if(s%2==0){
      val=(s*(s/2))+(s/2);
      console.log(val);
    }
    else{
     
      val=(s*((s+1)/2))-((s+1)/2);
     
    }

    var z=0;
    var r=0;
     var ar = [];
    for(let m=1;m<=s*s;m++)
    ar.push(m);

    for (let i = ar.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = ar[i];
      ar[i] = ar[j];
      ar[j] = temp;
  }
let el='X'
let ml=<FaUserNinja />
    while(z<s){
      if(squares[ar[r]]==null){
        squares[ar[r]]=el;
        z++;
      }
      r++;
    }

      squares[val]=ml;
    this.setState({
      squares: squares,
      pos: val,
      p_size:s,
    });
  }

    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
        />
      );
    }

    handleKeyright = () =>{
      if(this.state.enemy<=0){
      return null;
      }
      let el='X'
      let ml=<FaUserNinja />
      const squares = this.state.squares.slice();
    const s=this.props.size;
    let p=this.state.pos;
    let m=this.state.moves;
    let enemy=this.state.enemy;
    if(p%s!=0){
      if(squares[p+1]==el){
        squares[p]= null;
        squares[p+1]=ml;
        p=p+1;
        m=m+1;
        enemy=enemy-1;
        console.log(enemy);
      }
      else{
        squares[p]= null;
        squares[p+1]=ml;
        p=p+1;
        m=m+1;
      }
      this.setState({
        squares: squares,
        pos: p,
        moves: m,
        enemy: enemy,
      });
    }
    }

    handleKeyleft = () =>{
      if(this.state.enemy<=0){
        return null;
        }
        let el='X'
        let ml=<FaUserNinja />
      const squares = this.state.squares.slice();
    let s=this.props.size;
    let p=this.state.pos;
    let m=this.state.moves;
    let enemy=this.state.enemy;
    let i=1;
    const arr=[];
    
    while(i<s*s){
      arr.push(i);
      i=i+s;
    }
    
    if(!arr.includes(p)){
      if(squares[p-1]==el){
        squares[p]= null;
        squares[p-1]=ml;
        p=p-1;
        m=m+1;
        enemy=enemy-1;
        console.log(enemy);
      }
      else{
        squares[p]= null;
        squares[p-1]=ml;
        p=p-1;
        m=m+1;
        console.log("s");
      }
      this.setState({
        squares: squares,
        pos: p,
        moves: m,
        enemy: enemy,
      });
    }
    }

    handleKeyup = () =>{
      if(this.state.enemy<=0){
        return null;
        }
        let el='X'
        let ml=<FaUserNinja />
      const squares = this.state.squares.slice();
    let s=this.props.size;
    let p=this.state.pos;
    let m=this.state.moves;
    let enemy=this.state.enemy;
    let i=1;
    const arr=[];
    
    while(i<=s){
      arr.push(i);
      i=i+1;
    }
    
    if(!arr.includes(p)){
      if(squares[p-s]==el){
        squares[p]= null;
        squares[p-s]=ml;
        p=p-s;
        m=m+1;
        enemy=enemy-1;
        console.log(enemy);
      }
      else{
        squares[p]= null;
        squares[p-s]=ml;
        p=p-s;
        m=m+1;
      }
      this.setState({
        squares: squares,
        pos: p,
        moves: m,
        enemy: enemy,
      });
    }
    }

    handleKeydown = () =>{
      if(this.state.enemy<=0){
        return null;
        }
        let el='X'
        let ml=<FaUserNinja />
      const squares = this.state.squares.slice();
    let s=this.props.size;
    let p=this.state.pos;
    let m=this.state.moves;
    let enemy=this.state.enemy;
    let i=s*s;
    const arr=[];
    
    while(i>s*s-s){
      arr.push(i);
      i=i-1;
    }
    
    if(!arr.includes(p)){
      if(squares[p+s]==el){
        squares[p]= null;
        squares[p+s]=ml;
        p=p+s;
        m=m+1;
        enemy=enemy-1;
        console.log(enemy);
      }
      else{
        squares[p]= null;
        squares[p+s]=ml;
        p=p+s;
        m=m+1;
      }
      this.setState({
        squares: squares,
        pos: p,
        moves: m,
        enemy: enemy,
      });
    }
    }

    handleKey =(e)=>{
      if(e.keyCode === 37){
        this.handleKeyleft();
        console.log("left");
      }
      if(e.keyCode === 38){
        this.handleKeyup();
        console.log("up ");
      }
      if(e.keyCode === 39){
        this.handleKeyright();
        console.log("right");
      }
      if(e.keyCode === 40){
        this.handleKeydown();
        console.log("down");
      }
    }


  render() {

    var mat=[];
    var ar=[];
    var j=0;
    const sz=this.props.size*this.props.size;
    const s=this.props.size;
    const sq=Array(this.props.size*this.props.size).fill(null);
    if( this.state.p_size!=s){

      this.setState({
        c_size: s,
        squares: sq,
        enemy: s,
      });
    }
    
    if(this.state.c_size!=this.state.p_size){
      this.foo();
    }
    

    for (var i=1; i <= sz; i++) {
      ar.push(this.renderSquare(i));
      j++;
      if(j==s){
        mat.push(
          <div className="board-row">
            {ar}
          </div>
        )
        ar = [];
        j=0;
      }
      
      }
      return(
        <div onKeyDown={this.handleKey}>
          {mat}
          <h2>Total Moves : {this.state.moves} </h2>
        </div>
      )
    }
  }

export default Maze;