import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from '@mui/icons-material/YouTube';
import  './footer.css'


const footer = () => {
  return (
		<div className="footer_outer_container">
			<div className="footer_inner_container">
				<div className="footer_icons">
					<FacebookOutlinedIcon />
					<InstagramIcon />
					<YouTubeIcon />
				</div>
				<div className="footer_data">
					<div>
						<ul>
							<li>Audio Descriptio</li>
							<li>Investor Relations</li>
							<li>Legal Notices</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default footer


