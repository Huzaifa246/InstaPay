import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import { EmailAddress, Password, SignIn } from "../../../Constant";
import { useNavigate } from "react-router-dom";
import man from "../../../assets/images/login/login_bg.jpg";

import FormPassword from "./FormPassword";
import axios from "axios";
import { encryptData } from "./Helpers/Encryption";
import { decryptData } from "./Helpers/Decryption";

const LoginTab = () => {
  const [email, setEmail] = useState("majidahmed@gmail.com");
  const [password, setPassword] = useState("sarfaraz123");
  const [togglePassword, setTogglePassword] = useState(false);

  const history = useNavigate();
  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", man);
    localStorage.setItem("Name", "Admin Walter");
  }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();
    const credentials = {
      email: "majidahmed@gmail.com",
      password: "sarfaraz123",
    };

    const cred = encryptData(credentials);
    axios
      .post("http://54.221.169.56:3004/api/user/login", { data: cred })
      .then((response) => {
        console.log(response);
        const decrypted = decryptData(response.data.data);
        console.log(decrypted);
      })
      .catch((err) => console.error(err));

    setValue(man);
    setName("Emay Walter");
    if (email !== "" && password !== "") {
      localStorage.setItem("login", JSON.stringify(true));
      history(`${process.env.PUBLIC_URL}/dashboard/default`);
    }
  };

  return (
    <Form className="theme-form">
      <H4>Sign In</H4>
      <P>{"Enter your email & password to login"}</P>
      <FormGroup>
        <Label className="col-form-label">{EmailAddress}</Label>
        <Input
          className="form-control"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormGroup>
      <FormGroup className="position-relative">
        <Label className="col-form-label">{Password}</Label>
        <div className="position-relative">
          <Input
            className="form-control"
            type={togglePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div
            className="show-hide"
            onClick={() => setTogglePassword(!togglePassword)}
          >
            <span className={togglePassword ? "" : "show"}></span>
          </div>
        </div>
      </FormGroup>
      <FormPassword />
      <div>
        <Btn
          attrBtn={{
            color: "primary",
            className: "d-block w-100 mt-2",
            onClick: (e) => loginAuth(e),
          }}
        >
          {SignIn}
        </Btn>
      </div>
    </Form>
  );
};

export default LoginTab;
