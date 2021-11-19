import React from "react";

// style
import "./Directory.style.scss";

// components
import MenuItem from "../MenuItem/MenuItem.component";

// redux
import { useSelector } from "react-redux";

const Directory = () => {
  const sections = useSelector((state) => state.directory.sections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
