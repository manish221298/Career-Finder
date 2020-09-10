import React from 'react'

function Footer() {
    return (
        <div class="d-flex flex-column">

            <footer className="page-footer font-small mt-5 bg-dark text-light ">  
        <div className="container-fluid ml-0 text-center text-md-left"> 
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h3 className = 'text-warning' style ={{fontFamily: "Times New Roman",fontSize:'40px'}}>Career-Finder</h3>
              <p >This website is a Project developed using JavaScript,React JS, Redux ,NodeJS ,Express JS & MongoDB.
                  <br/> This website have different sections, where User or Applicant create an account and apply for Job and Internship according to their stream.
              </p> 
            </div> 

              <hr className="clearfix w-100 d-md-none pb-3" />
        
              <div className="col-md-3 mb-md-0 mb-3"> 
              </div> 

              <div className="col-md-3 mb-md-0 mb-3"> 
                <h4 style = {{fontFamily: "Times New Roman"}}><u>Personal Links</u></h4>

                <ul className="list-unstyled">
                  <li>
                    <i  style={{fontSize:'18px'}}> iammnsh01@gmail.com</i>
                  </li>
                  <li>
                    <span className = 'fa fa-git-square'  style={{fontSize:'20px'}}>  </span> 
                    <a href="https://github.com/manish221298"   className = 'text-primary bg-dark'
                        style={{fontSize:'20px',fontFamily: "Times New Roman"}}>Manish Kumar</a>
                  </li>
                </ul> 
              </div>

            </div> 
        </div> 
      </footer> 
        </div>
    )
}

export default Footer