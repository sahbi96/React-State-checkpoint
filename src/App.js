import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        FullName: "Sahbi Noureddine",
        Bio: "I'm sahbi from sousse i'm 25 years old",
        Profession: "Full Stack JS developer",
        imgSrc: "/me.jpg",
      },
      show: false,
      time: 0,
    };
  }
  componentDidMount() {
    setInterval(() => this.setState({ time: this.state.time + 1 }), 1000);
  }
  render() {
    return (
      <div style={{ backgroundColor: "grey" }}>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Hello </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#Home">Home </Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="Contact">
                Contact me
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <div>
          <button
            style={{
              marginTop: "70px",
              backgroundColor: "blue",
              marginLeft: "36.3%",
              borderRadius: "15px",
            }}
            onClick={() => this.setState({ show: !this.state.show })}
          >
            <h3 style={{ color: "white" }}>
              Click to Show or Hide my profile{" "}
            </h3>
          </button>
          <br />
          <br />
          <div />

          <div style={{ color: "black", textAlign: "center" }}>
            <h5 style={{ color: "black" }}>
              Time for watching my profile and thanks !{" "}
            </h5>
            <span style={{ color: "red" }}>{this.state.time} seconds.</span>
          </div>
          {this.state.show ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "70px",
                height: "500px",
                margin: "auto",
                backgroundColor: "blue",
                marginTop: "23px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "60px",
                  marginTop: "150px",
                }}
              >
                <h1 style={{ color: "white" }}>
                  Name: {this.state.Person.FullName}
                </h1>
                <h2 style={{ color: "white " }}>{this.state.Person.Bio}. </h2>
                <h2 style={{ color: "white  " }}>
                  Profession: {this.state.Person.Profession}
                </h2>

                <img
                  src={this.state.Person.imgSrc}
                  style={{
                    width: "20%",
                    height: "80%",
                    borderRadius: "50px",
                    cursor: "pointer",
                  }}
                  alt="profile"
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
