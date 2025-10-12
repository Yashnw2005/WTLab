
function Array1(){

    let [arr,setArr]=useState([10,20,30]);
    function Add(){
        let temp=arr[arr.length-1]+10;
        arr.push(temp);
        setArr([...arr,temp]);
        console.log(arr);
    }

   return(
         <>
          <h3>Array elements are:-</h3>
          <button onClick={()=>{Add()}}></button>
         </>
   )
}
export default Array1;