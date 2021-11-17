import React, { useState } from "react";

// style
import "./Directory.style.scss";

// components
import MenuItem from "../MenuItem/MenuItem.component";

const Directory = () => {
  const [sections] = useState([
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      linkUrl: "hats",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      linkUrl: "hats",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      linkUrl: "hats",
    },
    {
      id: 4,
      title: "women",
      imageUrl:
        "https://images.unsplash.com/photo-1608912215571-61b7d5914b35?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      size: "large",
      linkUrl: "hats",
    },
    {
      id: 5,
      title: "men",
      imageUrl:
        "https://images.unsplash.com/photo-1610384104075-e05c8cf200c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      size: "large",
      linkUrl: "hats",
    },
  ]);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem
          key={id}
          {...otherSectionProps}
        />
      ))}
    </div>
  );
};

export default Directory;
