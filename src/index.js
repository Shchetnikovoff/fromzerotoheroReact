import React, {Component} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './Components/app';
// import './index.css';

// class WhoAmI extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             years: 26,
//             nationality: 'uk'
//         }
        // this.nextYear = this.nextYear.bind(this)
        // this.nextYear = () => {
        //     this.setState(state => ({
        //                years: ++state.years
        // }))
        // }

    // }

    // nextYear = () => {
    //     this.setState(state => ({
    //                years: ++state.years
    // }))
    // }

    // nextYear(){
    //     console.log(1)
    //     // this.state.years++
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }

//     render(){
//         const {name, surname, link} = this.props
//         const {years} = this.state
//         return (
//             <>
//             <h1> My name is {name} , surname - {surname}, years = {years}</h1>
//             <button onClick={this.nextYear}>++</button>
//             <a href={link}>My profile</a>
//             </>
//         )
//     }
// }


// function WhoAmI({name,surname,link}){
//     return (
//         <>
//         <h1> My name is {name} , surname - {surname}</h1>
//         <a href={link}>My profile</a>
//         </>
//     )
// }

// const All = () => {
//     return (
//         <>
//         <WhoAmI name="Daniil" surname="Smith" link="facebook.com"/>
//         <WhoAmI name="Sergey" surname="Ads" link="vk.ru"/>
//         <WhoAmI name="Valeria" surname="Schehtnikova" link="inst.com"/>
//         </>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <All />
    <App />
);