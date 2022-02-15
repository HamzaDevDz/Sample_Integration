import React from 'react'
import "./Side.css"
import PeopleIcon from '@mui/icons-material/People';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

function Side() {
    return (
        <div className="main__side">
            <Button className="main__side__invite">
                <p className="main__side__invite__text">
                    Invite Guest
                </p>
                <PeopleIcon fontSize="large" />
            </Button>
            <div className="main__side__stream">
                <Button className="main__side__stream__text">
                    Show on stream
                </Button>
            </div>
            <div className="main__side__footer">
                <div className="main__side__footer__icons">
                    <IconButton className={"main__side__footer__icons__btn"}>
                        <LinkedInIcon className={"main__side__footer__icons__btn__icon"} fontSize={"small"} sx={{ color: "gray" }}/>
                    </IconButton>
                    <IconButton className={"main__side__footer__icons__btn"}>
                        <FacebookIcon className={"main__side__footer__icons__btn__icon"} fontSize={"small"} sx={{ color: "gray" }}/>
                    </IconButton>
                    <IconButton className={"main__side__footer__icons__btn"}>
                        <TwitterIcon className={"main__side__footer__icons__btn__icon"} fontSize={"small"} sx={{ color: "gray" }}/>
                    </IconButton>
                    <IconButton className={"main__side__footer__icons__btn"}>
                        <YouTubeIcon className={"main__side__footer__icons__btn__icon"} fontSize={"small"} sx={{ color: "gray" }}/>
                    </IconButton>
                </div>
                <div className="main__side__footer__help">
                    <Button className="main__side__footer__help__text">
                        Need help?
                    </Button>
                    <Button className="main__side__footer__help__text">
                        Shortcuts
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Side;