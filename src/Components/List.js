import React,{Component} from 'react';
import {FormGroup ,Panel , PanelGroup, Button} from 'react-bootstrap';
import uuid from 'uuid';

class List extends Component {
  constructor(){
    super();
    this.state ={
      text:[],
      myvalue: "",
      activeKey:'1',
      myvalue2: [],
      search:[],
      filterd: false,



    }
  }

handelSubmit(e){
    let x = this.state.text;
    let data = {
      name: this.refs.name.value,
      id: uuid.v4()
    }
    x.push(data)
    this.refs.name.value = ""
    this.setState({text: x})
    this.setState({myvalue: ""})
    e.preventDefault()
  }

  handleSelect(activeKey) {
		this.setState({activeKey});
	}

  handleAdd(id){
  console.log("ID: "+id)
    let x = this.state.text;
    let y = this.state.myvalue2;
    let index = x.findIndex(list => list.id === id);
    y.push(x[index])
    console.log(x[index])
    x.splice(index, 1);
    this.setState({myvalue2: y, text: x}, () => {
      console.log(this.state.myvalue2)
    })
  }

  handleAdd2(id){
  let x = this.state.myvalue2;
  let y = this.state.text;
  let index = x.findIndex(list => list.id === id);
  y.push(x[index])
  x.splice(index,1)
  this.setState({text: y , myvalue2: x})
  }

handelDelete(id){
  let x = this.state.text;
  let index = x.findIndex(y => y.id === id);
  x.splice(index,1);
  this.setState({text: x})
}
filter(e){
    let keyword = e.target.value;
    if (!keyword) {
      this.setState({filterd: false});
      return;
    }
  }

filterList(e){
  let keyword = e.target.value;
  //console.log("keyword: "+keyword)
  //let list1 =this.state.text;
 //let filterd = this.state.filterd;

  var list1 = this.state.text.filter(
     (el) =>{
       this.setState({filterd: true})
   return el.name.search(keyword) !== -1;
});
this.setState({search: list1 , filterd: true})

console.log(this.state.search)
console.log(this.state.filterd)
}
//{this.setState({filterd: true})}
//{this.setState({filterd: true})}



  render (){
    let x;
    let count=0;
      x = this.state.text.map(
        item => {
          count++;
          return(
            <p key={item.id}>
            {item.name}
            <Button bsSize="xsmall" bsStyle="danger" onClick={this.handleAdd.bind(this, item.id)}>watch</Button>
            <Button bsSize="xsmall" bsStyle="success" onClick={this.handelDelete.bind(this, item.id)}>Delete</Button>
            </p>
          );
        }
      );


      let y;
      let counter=0;
        y = this.state.myvalue2.map(
          items => {
            counter++;
            console.log("ITEMs: "+items)
            return(
              <p key={items.id}> {items.name} <Button bsSize="xsmall" bsStyle="danger" onClick={this.handleAdd2.bind(this, items.id)}>unwatch</Button>
              </p>
            );
          }
        );

        let z;

          z = this.state.search.map(
            ser => {
              console.log("search:"+ser.name)
              if(this.state.filterd === true){
              return(
                <p key={ser.id}>
                {ser.name}
                <Button bsSize="xsmall" bsStyle="danger" onClick={this.handleAdd.bind(this, ser.id)}>watch</Button>
                <Button bsSize="xsmall" bsStyle="success" onClick={this.handelDelete.bind(this, ser.id)}>Delete</Button>
                </p>
              );
            }else{
              return <p>No Items</p>;
            }
          }
          );

          // let z;
          //
          //   z = this.state.search.map(
          //     ser => {
          //       if (ser.name !== ""){
          //       console.log("search:"+ser.name)
          //       return(
          //         <p key={ser.id}>
          //         {ser.name}
          //         </p>
          //       );
          //     }else{
          //       return <p>No Items</p>;
          //     }
          //     }
          //   );

    return(

  <div className="container">
  <PanelGroup accordion style={{width:200, height: 200 }} id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
    <Panel bsStyle="primary" eventKey="1">
      <Panel.Heading>
          <Panel.Title >Movies Dashboard</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <PanelGroup accordion style={{width: 200, height: 150 }} id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
            <Panel.Title toggle style={{color: "black"}}>Action</Panel.Title>
            <Panel.Body collapsible>
              <h1 style={{fontSize: 15}}>Iron man</h1>
              <h1 style={{fontSize: 15}}>Prisoners</h1>
              <h1 style={{fontSize: 15}}>Friends</h1>
            </Panel.Body>
        </PanelGroup>
      </Panel.Body>
    </Panel>
  </PanelGroup>


    <PanelGroup accordion style={{width:400, height: 200 , marginLeft: "300px", marginTop: "-220px"}} id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
      <Panel bsStyle="primary" eventKey="1">
        <Panel.Heading>
  						<Panel.Title toggle>WatchList {count}
              </Panel.Title>
  			</Panel.Heading>
        <Panel.Body collapsible >
          {this.state.filterd ? z : x}
          {this.state.myvalue}

              <form onSubmit={this.handelSubmit.bind(this)}>
                <FormGroup>
                  <input type="text" placeholder="movie.." ref="name" onChange={() => {this.setState({myvalue:this.refs.name.value})} } />
                </FormGroup>
              </form>
              <div>
              <input type="text" placeholder="search for.." onChange={this.filterList.bind(this)} />
              </div>

        </Panel.Body>
    </Panel>
  </PanelGroup>

  <PanelGroup accordion style={{width:400, height: 200 , marginLeft: "300px", marginTop: "-50px"}} id="accordion-controlled-example" activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)}>
    <Panel bsStyle="primary">
      <Panel.Heading>
            <Panel.Title>Watched {counter}</Panel.Title>
      </Panel.Heading>
      <Panel.Body>
      {y}
      </Panel.Body>
  </Panel>
</PanelGroup>
 </div>

    );
  }
  }
export default List;


// list1 = this.state.text.map(
// list =>{
//   console.log("COMPARING ("+list.name+") WITH ("+keyword+")")
//   if(list.name === keyword){
//     return(
//       <p key={list.id}>
//       {list.name}
//       </p>
//     );
//   } else {
//     return "";
//   }
// }
// );

//{this.state.filterd ? this.state.search : x }

//style={{marginLeft: "100px" , marginTop: "-26px"}}.. for the movie name bar

//<h1 style={{fontSize: 20}}>Food</h1>
// handleChange(e){
//   let x = this.state.text
//   let y = e.target.value
//   x.push(y)//push() is used to add e.target.value inside the text list
//   this.setState({text: x}, () => {console.log(this.state.text)});
//
// }// to add to a list

/*onChange={() => {this.setState({myvalue:this.refs.name.value})}.. this is as same as

        onChange={this.handleChange.bind(this)}

         handleChange(){
         this.setState({myvalue:this.refs.name.value})
       }// to add to dictionary
*/


/* onBlur={this.onBlur.bind(this)}:

    the the onChange handler is fired on every key stroke.
     Not just when the whole input field has changed.
*/
