import React, {useState,useEffect} from 'react'
import './Macrocalculator.css'
import PieChartComp from './PieChart'
import Navbar from './navbar'




  







function Macrocalculator() {

    //variables 
    const [BMR, setBMR] = useState('')
    const [weight,setWeight] = useState(100)
    const [height,setHeight] = useState('')
    const  [age, setAge] = useState('')
    const [goal,setGoal] = useState('Lose weight')
    const [showResults, setShowResults] = useState(false)
    const [sex,setSex] = useState('Female')
    const [targetFat,setTargetFat] = useState(0)
    const [activity, setActivity] = useState('Sedentary')
    const [maintenance,setMaintenance] = useState(1300)
   

    const  [data, setData] = useState(
        [{ name: 'Protein',  value: weight },
        { name: 'Carbs', value: 300 },
        { name: 'Fats', value: 300 },
          ]) 

 
  

   

    



    // BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years) Women: BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years)
    const CalcBMRMan = (weight,height,age) => {
        const bmr = 88.362 + (13.397* weight) + (4.799*height) - (5.677 *age);
        setBMR(Math.round(bmr));
        const fatCals = bmr* .25;
        const TargetFat = Math.round(fatCals/9);
        const mainSed = bmr * 1.2;
        const mainAct = bmr * 1.35;
        const mainInt = bmr * 1.55;
        return [bmr, TargetFat, mainSed, mainAct,mainInt]
       
      
    }
    const CalcBMRWoman = () => {
        const bmr = 447.593 + (9.247* weight) + (3.098*height) - (4.330 *age);
        const mainSed = bmr * 1.2;
        const mainAct = bmr * 1.35;
        const mainInt = bmr * 1.55;
        return [bmr, mainSed,mainAct,mainInt]
       
    
        
    }

    const convertToKG = (val) => {
        return val * 0.453592;
        
    }

    const handleWeightInput = (e) => {
        setWeight(e.target.value);
    }
    const handleAgeInput = (e) => {
        setAge(e.target.value);
    }

    const handleHeightInput = (e) => {
        setHeight(e.target.value);
    }
    
    
    const handleSubmit = (e) => {
        e.preventDefault() ;

        if (sex == 'Male') {
            var results = CalcBMRWoman(weight,height,age);
            
        } else {
            var results  = CalcBMRWoman(weight,height,age);
        }
        if (activity== 'Sedentary'){
            var maintenance= results[1];
        }else if (activity == 'Active'){
            var maintenance = results[2];
        }
        else {
            var maintenance = results[3];

        }
        const fatCals = maintenance * .25;
        const TargetFat = Math.round(fatCals/9);
        setMaintenance(maintenance);
        
        const carbCals = maintenance - fatCals - (weight * 4);
        setData(
            [{ name: 'Protein',  value: parseInt(weight)  },
            { name: 'Carbs', value: carbCals },
            {name:'Fats', value: fatCals }
            
              ]);
        
       
        showResultsSection();
        
    }

    const handleGoal = (e) => {
        setGoal(e.target.value);
    }
    
    
    
    //function to toggle the show results variable
    const showResultsSection = () => {
        setShowResults(true);
    }

    
    
    return (
        <div className='macrocontainer'>
         
          

            <h1>Macro calculator</h1>
            <div className='inputDetails'>
                <form action="" onSubmit={handleSubmit} className='bmrForm'>
                    <div className="weightInput">
                        <label>Please enter weight</label>
                        <input type="integer" onChange={handleWeightInput} />
                        <select >
                            <option>KG</option>
                            <option>LBS</option>
                        </select>
                  </div>
                  <div className="">
                      <label htmlFor="">Please enter your age in years</label>
                      <input type="integer" onChange={handleAgeInput} />

                  </div>
                    
                    <div className="height">
                    <label htmlFor="">Please enter your height </label>
                    <select >
                        <option>Feet</option>
                        <option>cm</option>
                     </select>
                    <input type="integer" onChange={handleHeightInput} />
                    </div>
                    <div className="">
                    <label htmlFor="">What is your sex?</label>
                    <select  onChange={(e)=>{setSex(e.target.value);}}>
                        <option >Female</option>
                        <option >Male</option>
                    </select>
                    </div>
                    <div className="">
                    <label >What is your current activity level?</label>
                    <select  onChange={(e)=> {setActivity(e.target.value)}}>
                        <option >Sedentary</option>
                        <option >Active</option>
                        <option >Very Active</option>
                    </select>
                    </div>
                    <div className="">
                    <label>What is your goal:</label>
                    <select id="diet" name="diet" onChange={handleGoal}>
                        <option >Lose Weight</option>
                        <option >Maintain</option>
                        <option >Gain Weight</option>
                    </select>
                    </div>
                           
                    <input type="submit" value="Submit"></input>  
         
                </form>
            </div>
            <div className="Results">
                {showResults &&

                <div> 
                    <p>Your maintanence calories are {maintenance}</p> 

                    <PieChartComp
                    data={data}
                    />

     
       
                      


                </div>

                
                
                }
          
                
            </div>

        

        </div>
    )
}

export default Macrocalculator
