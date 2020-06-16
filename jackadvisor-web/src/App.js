import React from "react";
import { Row, Col, Card, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import detectBrowserLanguage from "detect-browser-language";
import "./App.css";
import { changeLanguage } from "./data/langaugeUtil";
import text from "./data/text";

class App extends React.Component {
  componentDidMount() {
    if (
      !localStorage.getItem("language") ||
      localStorage.getItem("language") === "null"
    ) {
      localStorage.setItem("language", detectBrowserLanguage());
    }
  }

  render() {
    return (
      <div className="listing-container">
        <h1 className="listing-header">{text.listingTitle}</h1>
        <div className="listing-cards-container">
          <Row>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title={text.timerTitle}
                extra={
                  <a href="/timer">
                    <Button type="primary" shape="circle">
                      <RightOutlined />
                    </Button>
                  </a>
                }
              >
                <p>{text.timerLine1}</p>
                <p>{text.timerLine2}</p>
                <p>{text.timerLine3}</p>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card
                className="card-container"
                title={text.colorTitle}
                extra={
                  <a href="/color">
                    <Button type="primary" shape="circle">
                      <RightOutlined />
                    </Button>
                  </a>
                }
              >
                <p>{text.colorLine1}</p>
                <p>{text.colorLine2}</p>
                <p>{text.colorLine3}</p>
              </Card>
            </Col>
          </Row>
        </div>
        <Button
          type="default"
          shape="circle"
          size="large"
          className="lang-button"
          onClick={changeLanguage}
        >
          {localStorage.getItem("language") === "zh-CN" ? "EN" : "中"}
        </Button>
      </div>
    );
  }
}

export default App;
