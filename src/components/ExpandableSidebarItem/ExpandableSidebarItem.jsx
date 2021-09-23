import React, {useState} from "react";
import {Collapse, List} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {useHistory} from "react-router";
import {
  ListItemButton,
  ListItemTitle,
  ListItem,
  expandableSidebarItemStyles,
} from "./ExpandableSidebarItemStyles";

export const ExpandableSidebarItem = ({title, items}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const history = useHistory();
  return (
    <List sx={expandableSidebarItemStyles}>
      <ListItemButton component="a" onClick={handleClick}>
        <ListItemTitle>{title}</ListItemTitle>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.map((item, index) => {
          return (
            <List disablePadding key={index}>
              <ListItem
                onClick={() => {
                  history.push(item.path);
                }}>
                {item.text}
              </ListItem>
            </List>
          );
        })}
      </Collapse>
    </List>
  );
};
