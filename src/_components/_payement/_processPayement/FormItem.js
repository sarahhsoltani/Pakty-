import { Form } from "react-bootstrap";
import { Image, Input } from "antd";
import {useState} from "react";
import "../index.css";
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";
import React from "react";
export const FormItem = ({ item }) => {

  const [value, setValue] = useState() 
  
  switch (item.type) {
    case "img":
      return (
        <div className="d-flex justify-content-center  mb-2">
          <Image
            preview={false}
            className="item rounded text-align-center"
            alt="img"
            src={require("../../../assets/img/download.png")}
          ></Image>
        </div>
      );

    case "para":
      return (
        <div className="d-flex justify-content-center ">
          <p className="text-align-center para_drag_drop">{item.label}</p>
          <p type="para" id={item.label}>
            {" "}
          </p>
        </div>
      );

    case "paraP":
      return (
        <div className="d-flex justify-content-center">
          <p className="text-align-center para_type_filee ">{item.labell}</p>
          <p type="paraP" id={item.label}>
            {" "}
          </p>
        </div>
      );

    case "file":
      return (
        <div className="file-input d-flex justify-content-center">
          <input
            type="file"
            name="file-input"
            id="file-input"
            className="file-input__input select-file"
          />
          <label className="file-input__label" for="file-input">
            <span>Select file</span>
          </label>
        </div>
      );
      break;
    case "input_1":
      return (
        <div>
          <Input className="input_1" type="input" placeholder="Adress" />
        </div>
      );
      break;
    case "select":
      return (
        <div className="mt-2 bg-none">
          <PhoneInput
            placeholder="11111111"
            value={value}
            defaultCountry='TN'
            onChange={setValue}
          />

          {/* <Form.Select aria-label={item.label} className="select_pays">
            {item.options.map((opt, index) => {
              return (
                <option key={index} value={opt}>
                  {opt}
                </option>
              );
            })}
          </Form.Select> */}
        </div>
      );

    case "textArea":
      return (
        <div className="textArea_description">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="description"
              className="mt-2"
            />
          </Form.Group>
        </div>
      );
  }
};
