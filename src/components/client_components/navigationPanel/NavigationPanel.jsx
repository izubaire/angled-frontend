import React from "react";
import ResponsiveDrawer from "../../client_components/sidenav/SideNav";
import Header from "../../client_components/header/Header";

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
