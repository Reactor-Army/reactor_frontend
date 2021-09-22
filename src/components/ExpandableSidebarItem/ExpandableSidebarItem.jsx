import React, {useState} from "react";
import {List} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import {Collapse} from "@material-ui/core";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import {appColors} from "../../common/styles";
import {useHistory} from "react-router";

export const ExpandableSidebarItem = ({
  title,
  items,
  backgroundColor,
  textColor,
}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const history = useHistory();
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: backgroundColor || appColors.primary,
        color: textColor || appColors.white,
      }}>
      <div onClick={handleClick}>
        <ListItemText primary={title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.map((item, index) => {
          return (
            <List disablePadding key={index}>
              <div>
                <ListItemText
                  primary={item.text}
                  onClick={() => {
                    history.push(item.path);
                  }}
                />
              </div>
            </List>
          );
        })}
      </Collapse>
    </List>
  );
};
