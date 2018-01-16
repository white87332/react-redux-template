import React from 'react';
import PropTypes from 'prop-types';
import equal from 'deep-equal';
import update from 'immutability-helper';
import { addEventListener } from '../../utils/event';
import './video.scss';

class Video extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            classes: {
                play: 'action play',
                pause: 'action',
                end: 'action',
                progress: 0
            }
        };
    }

    componentDidMount()
    {
        this.video.addEventListener('playing', () => {
            this.setState(update(this.state, {
                classes: {
                    play: { $set: 'action' },
                    pause: { $set: 'action pause' },
                    end: { $set: 'action' },
                    progress: { $set: `${(this.video.currentTime / this.video.duration) * 100}%` }
                }
            }));
        });

        this.video.addEventListener('pause', () => {
            this.setState(update(this.state, {
                classes: {
                    play: { $set: 'action play' },
                    pause: { $set: 'action' },
                    end: { $set: 'action' },
                    progress: { $set: `${(this.video.currentTime / this.video.duration) * 100}%` }
                }
            }));
        });

        this.video.addEventListener('timeupdate', () => {
            this.setState(update(this.state, {
                classes: {
                    progress: { $set: `${(this.video.currentTime / this.video.duration) * 100}%` }
                }
            }));
        });

        this.video.addEventListener('ended', () => {
            this.setState(update(this.state, {
                classes: {
                    play: { $set: 'action' },
                    pause: { $set: 'action' },
                    end: { $set: 'action end' },
                    progress: { $set: 0 }
                }
            }));
        });
    }

    render()
    {
        const { classes } = this.state;
        return (
            <div className="c_video">

                <video ref={(video) => { this.video = video; }} id="video" autoPlay={false} preload="auto" src="/public/asset/video/iu.mp4"/>

                <div className="controlBar">
                    <div className="progressContain">
                        <div className="progress" style={{ width: classes.progress }} />
                    </div>

                    <div className="buttons">
                        <div className={classes.play} onClick={() => { this.video.play(); }} />
                        <div className={classes.pause} onClick={() => { this.video.pause(); }} />
                        <div className={classes.end} onClick={() => { this.video.play(); }} />
                        <div className="volume">
                            <i className="fas fa-volume-up" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Video.propTypes = {};

export default Video;
