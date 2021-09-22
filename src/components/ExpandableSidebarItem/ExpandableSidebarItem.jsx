import React, {useState} from "react";
import {ListItemText, Collapse, List} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {appColors} from "../../common/styles";
import {useHistory} from "react-router";
import {
  ListItemButton,
  ListItemTitle,
  ListItem,
} from "./ExpandableSidebarItemStyles";

export const ExpandableSidebarItem = ({title, items}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const history = useHistory();
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: appColors.primary,
        color: appColors.white,
      }}>
      <ListItemButton component="a" onClick={handleClick}>
        <ListItemTitle>{title}</ListItemTitle>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.map((item, index) => {
          return (
            <List disablePadding key={index}>
              <ListItem>
                <ListItemText
                  primary={item.text}
                  onClick={() => {
                    history.push(item.path);
                  }}
                />
              </ListItem>
            </List>
          );
        })}
      </Collapse>
    </List>
  );
};
