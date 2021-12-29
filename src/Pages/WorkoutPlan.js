import React from 'react'
import { useState } from 'react/cjs/react.development'

function WorkoutPlan() {
    const [experience,setExperience] = useState('Less than 1 year')
    const [goal,setGoal] = useState('Muscle Gain')
    return (
        <div>
            <form action="">
                <label >How many years have you been training?</label>
                  <select onChange={(e)=>{setExperience(e.target.value)}}>
                     <option>Less than 1 year</option>
                     <option>1 to 3 years</option>
                     <option>4 to 6 years</option>
                     <option>More than 6 years</option>
                  </select>
                  
                <label >What is your primary goal for training?</label>
                  <select onChange={(e)=>{setExperience(e.target.value)}}>
                     <option>Muscle Gain</option>
                     <option>Strenght Gain</option>
                     <option>Combination</option>
                  </select>
                
            </form>
        </div>
    )
}

export default WorkoutPlan
