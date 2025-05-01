import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  PhoneOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

const menuItems = [
  {
    key: "home",
    icon: <HomeOutlined style={{ color: "white" }} />,
    label: <span style={{ color: "white" }}>Beranda</span>,
  },
  {
    key: "about",
    icon: <InfoCircleOutlined style={{ color: "white" }} />,
    label: <span style={{ color: "white" }}>Tentang</span>,
  },
  {
    key: "contact",
    icon: <PhoneOutlined style={{ color: "white" }} />,
    label: <span style={{ color: "white" }}>Kontak</span>,
  },
  {
    key: "structure",
    icon: <TeamOutlined style={{ color: "white" }} />,
    label: <span style={{ color: "white" }}>Struktur Organisasi</span>,
  },
];

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
          background: "#1f5120",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="/images/Background@2x.png"
            alt="Logo"
            style={{ height: 32, marginRight: 8 }}
          />
          <span style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Rohis Kab. Tegal
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Menu
            theme="dark"
            mode="horizontal"
            items={menuItems}
            style={{ background: "#1f5120" }}
          />
        </div>

        {/* Mobile Hamburger */}
        <div className="mobile-menu">
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleMenu}
            style={{ color: "white" }}
          />
        </div>
      </Header>

      {/* Mobile Menu Shown Below Navbar */}
      {showMobileMenu && (
        <div className="mobile-menu-panel">
          <Menu
            mode="vertical"
            items={menuItems}
            style={{
              background: "#1f5120",
              border: "none",
              padding: "8px 16px",
            }}
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
      )}

      <style>{`
        .desktop-menu {
          display: none;
        }
        .mobile-menu {
          display: block;
        }
        @media (min-width: 768px) {
          .desktop-menu {
            display: block;
          }
          .mobile-menu {
            display: none;
          }
          .mobile-menu-panel {
            display: none;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Navbar;
