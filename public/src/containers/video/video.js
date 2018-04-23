import React from 'react';
// import equal from 'deep-equal';
import update from 'immutability-helper';
// import { addEventListener } from '../../utils/event';
import './video.scss';

class Video extends React.Component
{
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            classes: {
                ad: 'ad',
                skip: 'skip'
            },
            reciprocalSeconds: 5
        };

        this.skipAd = this.skipAd.bind(this);
    }

    componentDidMount()
    {
        this.videoPlayer = videojs(this.video);
        this.videoPlayer.src({ type: 'video/mp4', src: '/public/asset/video/iu.mp4' });
        this.videoPlayer.play();

        setTimeout(() => {
            this.startAd();
        }, 2000);
    }

    startAd()
    {
        this.reciprocalSeconds = 5;
        this.id = setInterval(() => {
            this.reciprocalSeconds -= 1;
            this.setState(update(this.state, {
                reciprocalSeconds: { $set: this.reciprocalSeconds },
                classes: {
                    ad: { $set: 'ad show' },
                    skip: { $set: (this.reciprocalSeconds === 0) ? 'skip active' : 'skip' }
                }
            }), () => {
                if (!this.videoPlayer.paused())
                {
                    this.videoPlayer.pause();
                }
            });
        }, 1000);
    }

    skipAd()
    {
        this.setState(update(this.state, {
            classes: {
                ad: { $set: 'ad' },
                skip: { $set: 'skip' }
            }
        }), () => {
            clearInterval(this.id);
            this.videoPlayer.play();
        });
    }

    renderReciprocal()
    {
        const { classes, reciprocalSeconds } = this.state;
        if (this.reciprocalSeconds === 0)
        {
            clearInterval(this.id);
            return <div onClick={this.skipAd} className={classes.skip}>Skip this ad</div>;
        }
        else
        {
            return <div className={classes.skip}>Skip this ad in {reciprocalSeconds} seconds</div>;
        }
    }

    render()
    {
        return (
            <div className="c_video">
                <video className="video-js vjs-default-skin" ref={(video) => { this.video = video; }} autoPlay controls />
                <div className={this.state.classes.ad}>
                    <div>
                        <div className="content">
                            <div>
                                <span onClick={this.skipAd}>like</span>
                                <span onClick={this.skipAd}>dislike</span>
                            </div>
                        </div>
                        {this.renderReciprocal()}
                    </div>
                </div>
            </div>
        );
    }
}

Video.propTypes = {};

export default Video;
