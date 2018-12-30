// class CustomeComponent extends React.Component{

// 	render(){
// 			return (
// 			 React.createElement('div',null,h1,p)
			
// 		);
		
// 	}

// }
// var h1=  React.createElement('h1',null,'First Heading');	 
// var p =React.createElement('p',null,'jump on me');
// var first=React.createElement(CustomeComponent,null)
// var content = document.getElementById('app');
// ReactDOM.render(first ,content);

//



class Customelinks extends React.Component{
render(){
	return(
			React.createElement('a',this.props,this.props.linkname)
		);
	}			
}  
var list =React.createElement('div',null,

	React.createElement(Customelinks,{href:'http://www.google.com',linkname:"google"}),
	React.createElement(Customelinks,{href:'http://www.facebook.com',linkname:"facebook"}),
	React.createElement(Customelinks,{href:'http://www.youtube.com',linkname:"youtube"})

	)
var content = document.getElementById('app');
ReactDOM.render(list ,content);

