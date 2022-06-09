import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


const FooterPage = () => {

  return (

    
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer  className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title "> [HEAD OFFICE] </h5>
            <address>
                    Address: 10/ 2 , A, Kamar Uddin Sarder Masque Road, Saidabad, Dhaka -1100 <br />
                    <a href="mailto:webmaster@example.com">Email: gmphaque01@gmail.com </a> <br />
                    <a href="tel:01794005282"> Mobile: +8801711785694 </a>
            </address>
          </MDBCol>

          <MDBCol md="4">
            <h5 className="title">[ ONGOING PROGRAMMES ]</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="4">
            <h5 className="title"> [ UPCOMING PROGRAMME ] </h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>

        </MDBRow>
      </MDBContainer>"
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#">  SAJIB AHMED </a>
        </MDBContainer>
      </div>
    </MDBFooter>


  );
}

export default FooterPage;