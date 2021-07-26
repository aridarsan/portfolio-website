import React from "react";
import { Grid } from "@material-ui/core";


const Footer = () => {
	return(
		<React.Fragment>
			<div className="wave2" style={{ padding: "5rem 0 2rem"}}>
				<Grid container justifyContent="center" style={{textAlign: "center"}}>
					<Grid item>
						<h4 style={{color: "#4f4f4f"}}>
							Build With Pride and Big Effort
						</h4>

						<h5 style={{color: "#ffff"}}>
							by <a href="https://instagram.com/ari_darsan" target="_blank" rel="noreferrer">  @ari_darsan </a>  using <a href="https://reactjs.org" target="_blank" rel="noreferrer">React JS </a> and <a href="https://material-ui.com/" target="_blank" rel="noreferrer"> Material UI </a>
						</h5>

						<p>
							Illustration by <a href="https://storyset.com" target="_blank" rel="noreferrer"> Storyset </a>
						</p>
					</Grid>
				</Grid>
			</div>
		</React.Fragment>
	)
}

export default Footer;