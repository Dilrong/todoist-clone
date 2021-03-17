import React from "react";
import { FaPlus } from "react-icons/fa";

export const Header = () => {
  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li>
              <FaPlus />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
