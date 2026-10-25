function AppInteral(){
    return (
        <div>
            <h1>Parent Component</h1>
            <Render />
            <Render2 />
        </div>
    )    
}
function Render(){
    return (
        <div>
            <h1>Child component</h1>
        </div>
    )    
}  
function Render2(){
    return (
        <div>
            <h1>Child component 2</h1>
        </div>
    )    
}    
export default AppInteral; 
