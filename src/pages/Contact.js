import React, { Component } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import Subpage from "../components/Subpage";
import styled from "styled-components";
import Github from "../assets/svg/github";
import Linkedin from "../assets/svg/Linkedin";
import { validateEmail } from "../utils/validateEmail";
export default class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    submitted: false,
    isEmailValid: true,
  };

  handleSubmit = async event => {
    event.preventDefault();
    if (!validateEmail(this.state.email)) {
      this.setState({ isEmailValid: false });
      return;
    } else {
      try {
        await axios.post(
          "https://marshalltuinier.com/submitcontact/",
          this.state
        );
      } catch (error) {
        console.log("Sorry, an error has occured");
      }
      this.setState({
        name: "",
        email: "",
        message: "",
        submitted: true,
        isEmailValid: true,
      });
    }
  };

  render() {
    return (
      <Layout location={this.props.location}>
        <Subpage>
          <h1>CONTACT</h1>
          <h3>Let's build something awesome together.</h3>
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
          </Form>
          <IconContainer>
            <StyledLink
              href="https://github.com/marshalltuinier"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </StyledLink>
            <StyledLink
              href="https://www.linkedin.com/in/marshall-tuinier-051b69a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </StyledLink>
          </IconContainer>
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
  background: #fff;

  & :active {
    transform: translateY(1px);
  }
`;

const StyledLink = styled.a`
  svg {
    transition: transform 0.25s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const IconContainer = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0 0 0;
`;
