import React from "react" 
import Info from "./Info" 
import Academics from "./Academics" 
import Conclusion from "./Conclusion" 
class App extends React.Component { 
render (){ 
return (
<div>
    <center>

        <Info />
        <Academics />
        <Conclusion />

    </center>
</div>
) 
} 
} 
export default App