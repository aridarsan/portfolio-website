import React from "react";
import { Grid } from "@material-ui/core";


const Footer = () => {
	return(
		<div style={{backgroundColor: "#23A036", padding: "2rem 0"}}>
			<Grid container justifyContent="center" style={{textAlign: "center"}}>
				<Grid item>
					<h4 style={{color: "#4f4f4f"}}>
						Buid With Pride and Big Effort
					</h4>

					<h5 style={{color: "#ffff"}}>
						by <a href="https://instagram.com/ari_darsan" target="_blank" rel="noreferrer">  @ari_darsan </a>  using <a href="https://reactjs.org" target="_blank" rel="noreferrer">React JS </a> and Material UI
					</h5>

					<p>
						Illustration by Storyset
					</p>
				</Grid>
			</Grid>

		</div>
	)
}

export default Footer;