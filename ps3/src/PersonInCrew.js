import {Component} from 'react';
import ListOfAge from './ListOfAge';
class PersonInCrew extends Component{
    constructor(props){
        super(props);
        this.state = {
            personInCrewArray:[
                {name: "John", lastName:"Xina", age:21, rank:"Sternik", email:"XinaZina@wp.pl"},
                {name: "Ho Lee", lastName:"Dm", age:32, rank:"Kapitan", email:"DMDMDM@o2.com"},
                {name: "Hue.G.", lastName:"Raction", age:45, rank:"Sternik", email:"HRHR@gmail.com"},
                {name: "Ben", lastName:"Tower", age:35, rank:"Sternik", email:"binbon@gmail.com"},
                {name: "Peter", lastName:"Inis", age:18, rank:"Sternik", email:"peterpeter@gmail.com"},

            ]
        }
    }
    render(){
        return(
            <div>
                {this.state.personInCrewArray.map((user) => 
                    <div>
                        <span>imie: {user.name}</span>
                        <span> nazwisko: {user.lastName}</span>
                        <span> wiek: {this.ageCorrectness(user.age)}</span>
                        <span> stopień: {user.rank}</span>
                        <span> adresEmail: {user.email}</span>
                    </div>
                )}
                <ListOfAge ages={this.state.personInCrewArray.map( a => a.age)}/>
            </div>
        )
    }
    ageCorrectness(age){
        if(age === 1)
            return age + "rok"
        else if(age % 10 >= 2 && age % 10 <= 4)
            return age + "lata"
        else 
            return age + "lat"
    }
}
export default PersonInCrew;