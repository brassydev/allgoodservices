"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Popover, List, ListItem, ListItemText, ListItemIcon, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MessageIcon from "@mui/icons-material/Message";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

export default function Home_Banner() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleContactClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="container">
        <div className="home_banner">
          <div className="parent_container">
            <div className="home_container">
              <div className="white_line p-4 mx-3"></div>
              <h1 className="text-white px-3 py-3 font-weight-600">
                We Care about <br /> Your Health & <br />Wealth
              </h1>
              <div className="d-flex">
                <Link href={'/health-insurance'}>
                  <button
                    className="btn banner-btn bg-white text-dark m-3 border-0"
                  >
                    <b>Apply Today</b>
                  </button>
                </Link>
                <button
                  className="btn banner-btn bg-white text-dark m-3 border-0"
                  onClick={handleContactClick}
                >
                  <b>Contact Us</b>
                </button>

                {/* Popover with options */}
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <List>
                    <ListItem button component="a" href="https://wa.me/16823763299">
                      <ListItemIcon>
                        <WhatsAppIcon />
                      </ListItemIcon>
                      <ListItemText  className="text-blue" primary="WhatsApp" />
                    </ListItem>
                    <ListItem button component="a" href="tel:16823763299">
                      <ListItemIcon>
                        <PhoneIcon />
                      </ListItemIcon>
                      <ListItemText  className="text-blue" primary="Call" />
                    </ListItem>
                    <ListItem button component="a" href="mailto:info@allgoodservices.net">
                      <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText className="text-blue" sx={{fontWeight:800}} primary="Mail" />
                    </ListItem>
                  </List>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
