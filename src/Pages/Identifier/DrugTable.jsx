
const DrugTable =()=>{
        //pass all the prop in this let type

    return(
        <>
        
              <div className="container justify-content-md-center bg-light w-75">
                <table class="table">
                  <thead>
                  <tr>
                      <th scope="col">Name</th>
                      <td>drugName</td>
                    </tr>
                  </thead>
                </table>
                <p className="text-dark">Generic Name: generic_name</p>
              </div>
           
        </>
    );
};

export default DrugTable;