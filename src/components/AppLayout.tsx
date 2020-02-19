import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, BackTop, Icon } from "antd";
import Logo from "../static/logo.png";

interface IProps {
    defaultSelectedKeys?: Array<string>;
}

const AppLayout: React.FC<IProps> = props => (
    <Layout>
        <BackTop />
        <Layout.Sider collapsible breakpoint="lg">
            <Menu theme="dark" mode="inline" defaultSelectedKeys={props.defaultSelectedKeys}>
                <img className="layout__logo" src={Logo} alt="Logo Giphy" />
                <Menu.Item key="home">
                    <Link to="/giphy-api-interface">
                        <Icon type="home" />
                        <span>Page d'accueil</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="search">
                    <Link to="/giphy-api-interface/search">
                        <Icon type="search" />
                        <span>Recherche de GIF</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout.Sider>
        <Layout>
            <Layout.Content>{props.children}</Layout.Content>
            <Layout.Footer>
                ©2020 Created by{" "}
                <a href="https://github.com/kevinhuang78/" rel="noreferrer noopener" target="_blank">
                    Kévin Huang
                </a>
            </Layout.Footer>
        </Layout>
    </Layout>
);

export default AppLayout;
