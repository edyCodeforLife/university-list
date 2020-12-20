import React, { memo } from 'react';
import "../app.scss";
import { Row, Col } from 'antd';

function _Header(props) {
    const { style = {}, userName } = props;
    return (
		<header className="headerPage">
			<Row style={{width: '100%'}}>
				<Col md={12} xs={12}>
					<Row style={{width: '100%', fontSize: 20}}>
						<Col md={4} xs={8}>
							<div className="headerSection">Home</div>
						</Col>

						<Col md={4} xs={8}>
							<div className="headerSection">News</div>
						</Col>

						<Col md={4} xs={8}>
							<div className="headerSection">About</div>
						</Col>


					</Row>
				</Col>

				<Col md={12} xs={12}>
					<div className="userWelcome">
						Hi,
						<span className="userStyle">{userName}</span>
					</div>
				</Col>
			</Row>
		</header>
	)
}

export default memo(_Header);
export const Header = memo(_Header);
