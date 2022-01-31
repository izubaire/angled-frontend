import React from "react";
import ResponsiveDrawer from "../sidenav/SideNav";
import Header from "../header/Header";

export default function NavigationPanel() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Header handleDrawerToggle={() => handleDrawerToggle()} />
      <ResponsiveDrawer
        mobileOpen={mobileOpen}
        handleDrawerToggle={() => handleDrawerToggle()}
      />
    </>
  );
}
