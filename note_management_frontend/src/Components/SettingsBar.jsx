import React from "react";
import { Nav, NavDropdown, Navbar} from "react-bootstrap";
import { settingsBar, fontSize, fontStyles } from "../data/settingsBarData";
import "../Style/SettingsBar.css";

export default function SettingsBar() {
  return (
    <Navbar className="bg-dark border-bottom border-1">
      <div className="container-fluid text-light pt-2 pb-2 ps-4 pe-4">
        {settingsBar.map((setting) =>
          setting.isDropdown ? (
            setting.isFontSize ? (
              <NavDropdown title={setting.icon} className="border border-1">
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
              <NavDropdown title={setting.icon} className="border border-1">
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
            <Nav.Item className="border border-1" data-bs-toggle="tooltip" data-bs-placement="bottom" title={setting.title} role="button">{setting.icon}</Nav.Item>
          )
        )}
      </div>
    </Navbar>
  );
}
