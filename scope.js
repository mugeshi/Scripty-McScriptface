/* Global Scope: Variables and functions declared outside of any function or block have 
global scope. They can be accessed from anywhere within the program */

const globalVariable = 10;

function globalFunction() {
  console.log(globalVariable); // Accessing the globalVariable
}

globalFunction(); 



/*Local Scope : Varibles and functions declared within a  function or block have local scope. 
They can only be accessed from within that function or block*/

function outterVarible(){
    const localVarible= 20;

    function innerFunction(){
        console.log(localVarible);
    }

    innerFunction();
}
