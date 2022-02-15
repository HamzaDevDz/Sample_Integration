import React from 'react'
import "./View.css"
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import Button from "@mui/material/Button";
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import IconButton from "@mui/material/IconButton";
import VideocamOffOutlinedIcon from '@mui/icons-material/VideocamOffOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import OnlinePredictionOutlinedIcon from '@mui/icons-material/OnlinePredictionOutlined';

function View() {
    return (
        <div className={"main__view"}>
            <div className="main__view__container">
                <div className="main__view__container__screen">
                    <div className="main__view__container__screen__title">
                        <p className="main__view__container__screen__title__text1">
                            Powered by
                        </p>
                        <p className="main__view__container__screen__title__text2">
                            <span className="main__container__view__screen__title__text2__e">E</span>ngage
                        </p>
                    </div>
                    <Button className="main__screen__container__extend" aria-label="delete">
                        <OpenInFullIcon className="main__screen__container__extend__icon" />
                    </Button>
                </div>
                <div className="main__view__container__options">
                    <div className="main__view__container__options__option">
                        <GridViewSharpIcon className={"main__view__container__options__option__icon"}/>
                        <p className="main__view__container__options__option__text">
                            Add guests or screenshot to explore layouts
                        </p>
                    </div>
                    <div className="main__view__container__options__buttons">
                        <div className="main__view__container__options__buttons__button">
                            <IconButton className={"main__view__container__options__buttons__button__iconButton"}>
                                <MicOffOutlinedIcon className={"main__view__container__options__buttons__button__iconButton__icon"}/>
                            </IconButton>
                            <p className="main__view__container__options__buttons__button__text">
                                Unmute
                            </p>
                            <p className={"main__view__container__options__buttons__button__triangle"}>
                                &#9650;
                            </p>
                        </div>
                        <div className="main__view__container__options__buttons__button">
                            <IconButton className={"main__view__container__options__buttons__button__iconButton"}>
                                <VideocamOffOutlinedIcon className={"main__view__container__options__buttons__button__iconButton__icon"}/>
                            </IconButton>
                            <p className="main__view__container__options__buttons__button__text">
                                Start Video
                            </p>
                            <p className={"main__view__container__options__buttons__button__triangle"}>
                                &#9650;
                            </p>
                        </div>
                        <div className="main__view__container__options__buttons__button">
                            <IconButton className={"main__view__container__options__buttons__button__iconButton"}>
                                <DesktopWindowsOutlinedIcon className={"main__view__container__options__buttons__button__iconButton__icon"}/>
                            </IconButton>
                            <p className="main__view__container__options__buttons__button__text">
                                Share
                            </p>
                            <p className={"main__view__container__options__buttons__button__triangle"}>
                                &#9650;
                            </p>
                        </div>
                        <div className="main__view__container__options__buttons__button main__view__container__options__buttons__buttonRecord">
                            <IconButton className={"main__view__container__options__buttons__button__iconButton"}>
                                <RadioButtonCheckedIcon className={"main__view__container__options__buttons__button__iconButton__icon"}/>
                            </IconButton>
                            <p className="main__view__container__options__buttons__button__text">
                                Record
                            </p>
                        </div>
                        <div className="main__view__container__options__buttons__button">
                            <IconButton className={"main__view__container__options__buttons__button__iconButton main__view__container__options__buttons__iconButtonLive"}>
                                <OnlinePredictionOutlinedIcon className={"main__view__container__options__buttons__button__iconButton__icon"}/>
                            </IconButton>
                            <p className="main__view__container__options__buttons__button__text">
                                Go Live
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default View;