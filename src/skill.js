import React from 'react'
import{useState} from 'react'

function Skill() {
    const [checked, setChecked] = useState([]);
    const handleSkill=(e) =>{
        console.log(e.target.value, e.target.checked);
        if(e.target.value){
            setChecked([...checked ,e.target.value])
        } else{
            setChecked(checked.filter((item )=> item !== e.target.value))
        }

    }    
    
    return (
      <div>
      <input type="checkbox" id="php" value="PHP" onChange={handleSkill} />
      <label htmlFor="php">PHP</label>
      <input type="checkbox" id="javascript" value="JavaScript" onChange={handleSkill} />
      <label htmlFor="javascript">JavaScript</label>
      <input type="checkbox" id="python" value="Python" onChange={handleSkill} />
      <label htmlFor="python">Python</label>
      <input type="checkbox" id="java" value="Java" onChange={handleSkill} />
      <label htmlFor="java">Java</label>
      <h4>// 23 Selected Skills: {checked.join(", ")}</h4>
    </div>
  )
}

export default Skill
