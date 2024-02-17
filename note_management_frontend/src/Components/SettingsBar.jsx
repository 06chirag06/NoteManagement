import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { settingsBar, fontSize, fontStyles } from "../data/settingsBarData";
import "../Style/SettingsBar.css";

export default function SettingsBar(props) {
  const handleMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "rgb(255, 255, 255)";
    e.currentTarget.style.color = "rgb(0,0,0)";
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = "#f8f9fa";
  };

  return (
    <Navbar className="bg-dark border-bottom border-1">
      <div className="container-fluid text-light pt-2 pb-2 ps-4 pe-4">
        {settingsBar.map((setting) =>
          setting.isDropdown ? (
            setting.isFontSize ? (
              <NavDropdown
                title={setting.icon}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="rounded-2 p-1"
              >
                {fontSize.map((font) => (
                  <NavDropdown.Item
                    key={font.size}
                    className="text-light"
                    style={{ fontSize: `${font.size}` }}
                  >
                    {font.size}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            ) : (
              <NavDropdown
                title={setting.icon}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="rounded-2 p-1"
              >
                {fontStyles.map((font) => (
                  <NavDropdown.Item
                    key={font.fontFamily}
                    className="text-light"
                    style={{ fontFamily: `${font.fontFamily}` }}
                  >
                    {font.fontFamily}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            )
          ) : (
            <Nav.Item
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={props.handleBoldClick}
              className="p-1 rounded-2"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              title={setting.title}
              role="button"
              key={setting.title}
            >
              {setting.icon}
            </Nav.Item>
          )
        )}
      </div>
    </Navbar>
  );
}
