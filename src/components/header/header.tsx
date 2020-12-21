import React, { memo } from 'react';
import "../app.scss";
import { Row, Col, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { isMobile } from '../../global/function/global-function';

function _Header(props) {
	const { history, userName } = props;

	const redirectTo = (route) => {
		history.push(route);
	}

	const handleDropdownClick = () => {
		history.push("/login");
	}

	const menu = (
		<Menu>
			<Menu.Item>
				<div onClick={() => handleDropdownClick()}>
					Log Out
				</div>
			</Menu.Item>
		</Menu>
	);



    return (
		<header className="headerPage">
			<Row style={{width: '100%'}}>
				<Col md={12} xs={12}>
					<Row style={{width: '100%', fontSize: isMobile() ? 16 : 20}}>
						<Col md={4} xs={6}>
							<div onClick={() => {redirectTo("/home")}} className="headerSection">Home</div>
						</Col>

						<Col md={4} xs={12}>
							<div onClick={() => {redirectTo("/newsletter")}} className="headerSection">NewsLetter</div>
						</Col>

						<Col md={4} xs={6}>
							<div onClick={() => {redirectTo("/about")}} className="headerSection">About</div>
						</Col>


					</Row>
				</Col>

				<Col md={12} xs={12}>
					<div className="userWelcome">
						Hi,
						<span className="userStyle">{userName}</span>
						<Dropdown overlay={menu} placement="bottomRight">
							<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
								<DownOutlined />
							</a>
						</Dropdown>
					</div>
				</Col>
			</Row>
		</header>
	)
}

export default memo(_Header);
export const Header = memo(_Header);
