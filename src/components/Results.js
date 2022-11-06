import React from "react";


const Results = (props) => {
    const {repos} = props;
    console.log('Repos is: ', repos);

const listRepos = repos.map((item) => 
   ( <div className="Reposresults" key={item.id}> 
        <a href= {item.html_url} target= '_blank'>
            {item.name}
        </a>
        </div>)

    )


    return (
      
             <div className="row">
           {listRepos}
        </div>
    )

};
export default Results;