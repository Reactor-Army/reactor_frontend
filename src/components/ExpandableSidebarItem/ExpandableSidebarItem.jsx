import React, {useState} from "react";
import {Collapse, List} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {
  ListItemButton,
  ListItemTitle,
  ListItem,
  expandableSidebarItemStyles,
} from "./ExpandableSidebarItemStyles";

export const ExpandableSidebarItem = ({title, items, onItemClick}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={expandableSidebarItemStyles}>
      <ListItemButton component="a" onClick={handleClick}>
        <ListItemTitle>{title}</ListItemTitle>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.map((item, index) => (
          <List disablePadding key={index}>
            <ListItem
              onClick={() => {
                onItemClick(item.path);
                handleClick();
              }}>
              {item.text}
            </ListItem>
          </List>
        ))}
      </Collapse>
    </List>
  );
};
