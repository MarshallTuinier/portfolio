import React, { Component } from "react";
import Layout from "../components/Layout";
import Subpage from "../components/Subpage";
import styled from "styled-components";
import { validateEmail } from "../utils/validateEmail";
export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    submitted: false,
    isEmailValid: true,
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!validateEmail(this.state.email)) {
      this.setState({ isEmailValid: false });
      return;
    } else {
      this.setState({
        name: "",
        email: "",
        message: "",
        submitted: true,
        isEmailValid: true,
      });
    }
  };

  handleClear = () => {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <Layout location={this.props.location}>
        <Subpage>
          <h1>CONTACT</h1>
          <Form name="contact" onSubmit={this.handleSubmit}>
            <div className="upper">
              <section>
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={this.state.name}
                  onChange={event =>
                    this.setState({ name: event.target.value })
                  }
                />
              </section>
              <section>
                <label htmlFor="email">EMAIL</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={this.state.email}
                  onChange={event =>
                    this.setState({ email: event.target.value })
                  }
                />
              </section>
            </div>
            <section>
              <label htmlFor="message">MESSAGE</label>
              <textarea
                rows="4"
                id="message"
                name="message"
                placeholder="Drop some knowledge"
                value={this.state.message}
                onChange={event =>
                  this.setState({ message: event.target.value })
                }
              />
            </section>
            {!this.state.isEmailValid && (
              <h3>Please submit a valid Email address and try again.</h3>
            )}
            {this.state.submitted && (
              <h3>
                Thanks for reaching out! I will contact you as soon as possible.
              </h3>
            )}
            <Button
              htmlFor="contact"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              SUBMIT
            </Button>
            <Button
              type="button"
              onClick={this.handleClear}
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid #FFF",
                marginLeft: "2rem",
              }}
            >
              CLEAR
            </Button>
          </Form>
        </Subpage>
      </Layout>
    );
  }
}

const Form = styled.form`
  section {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    margin-left: 0;
    margin-right: 2rem;
    label {
      font-size: 1rem;
      letter-spacing: 0.5rem;
      margin-bottom: 0.75rem;
    }
    input,
    textarea {
      background: transparent;
      color: #fff;
      padding: 0.4rem 0.75rem;
      border: 1px solid #fff;
      border-radius: 5px;
      outline: 0;
      text-decoration: none;
      transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
        background-color 0.2s ease-in-out;

      & :focus {
        background: hsla(0, 0%, 100%, 0.075);
        box-shadow: 0 0 0 1px #fff;
      }
    }
  }
  .upper {
    display: flex;
    flex-direction: column;
    section {
    }
  }

  @media (min-width: 769px) {
    section {
      flex-direction: column;
    }
    .upper {
      flex-direction: row;

      section {
        width: 45%;
      }
    }
  }
`;

const Button = styled.button`
  width: 10rem;
  height: 2.5rem;
  border-radius: 5px;
  border: none;
  outline: none;
`;
