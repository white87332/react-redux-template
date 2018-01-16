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
                play: 'action',
                pause: 'action pause',
                end: 'action',
                progress: 0
            }
        };

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }

    componentDidMount()
    {
        addEventListener('timeupdate', this.video, () => {
            this.setState(update(this.state, {
                classes: {
                    progress: { $set: `${(this.video.currentTime / this.video.duration) * 100}%` }
                }
            }));
        });

        addEventListener('ended', this.video, () => {
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

    play()
    {
        this.video.play();
        this.setState(update(this.state, {
            classes: {
                play: { $set: 'action' },
                pause: { $set: 'action pause' },
                end: { $set: 'action' },
                progress: { $set: `${(this.video.currentTime / this.video.duration) * 100}%` }
            }
        }));
    }

    pause()
    {
        this.video.pause();
        this.setState(update(this.state, {
            classes: {
                play: { $set: 'action play' },
                pause: { $set: 'action' },
                progress: { $set: `${(this.video.currentTime / this.video.duration) * 100}%` }
            }
        }));
    }

    render()
    {
        const { classes } = this.state;
        return (
            <div className="c_video">

                <video id="video" autoPlay={false} preload="auto" src="/public/asset/video/iu.mp4"/>

                <div className="controlBar">
                    <div className="progressContain">
                        <div className="progress" style={{ width: classes.progress }} />
                    </div>

                    <div className="buttons">
                        <div className={classes.play} onClick={this.play} />
                        <div className={classes.pause} onClick={this.pause} />
                        <div className={classes.end} onClick={this.play} />
                    </div>
                </div>
            </div>
        );
    }
}

Video.propTypes = {};

export default Video;
