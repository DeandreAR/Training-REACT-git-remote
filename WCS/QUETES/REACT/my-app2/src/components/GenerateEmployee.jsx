import  React  from  'react';

const  GenerateEmployee = ({ selectEmployee }) => {
    return (
        <div  className="GenerateEmployee">
        <button  onClick={selectEmployee} color='blue'>Get employee</button>
        </div>
    );
};

export  default  GenerateEmployee;