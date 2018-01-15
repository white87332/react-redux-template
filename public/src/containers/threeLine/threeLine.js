import React from 'react';
import { connect } from 'react-redux';
// import { translate } from 'react-i18next';
// import PropTypes from 'prop-types';

class ThreeLine extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
        this.threeInit = this.threeInit.bind(this);
        this.animate = this.animate.bind(this);
        this.onDocumentMouseMove = this.onDocumentMouseMove.bind(this);
        this.onDocumentTouchMove = this.onDocumentTouchMove.bind(this);
        this.onDocumentTouchStart = this.onDocumentTouchStart.bind(this);
        this.onWindowResize = this.onWindowResize.bind(this);
    }

    componentDidMount()
    {
        this.mouseX = 0;
        this.mouseY = 0;
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.particle = null;

        this.threeInit();
        this.animate();
    }

    onDocumentMouseMove(event)
    {
        this.mouseX = event.clientX - this.windowHalfX;
        this.mouseY = event.clientY - this.windowHalfY;
    }

    onDocumentTouchMove(event)
    {
        if (event.touches.length === 1)
        {
            event.preventDefault();
            this.mouseX = event.touches[0].pageX - this.windowHalfX;
            this.mouseY = event.touches[0].pageY - this.windowHalfY;
        }
    }

    onDocumentTouchStart(event)
    {
        if (event.touches.length > 1)
        {
            event.preventDefault();
            this.mouseX = event.touches[0].pageX - this.windowHalfX;
            this.mouseY = event.touches[0].pageY - this.windowHalfY;
        }
    }

    onWindowResize()
    {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    threeInit()
    {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 750;

        this.scene = new THREE.Scene();

        this.renderer = new THREE.CanvasRenderer();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.threeContainer.appendChild(this.renderer.domElement);

        // particles
        let PI2 = Math.PI * 2;
        let material = new THREE.SpriteCanvasMaterial({
            color: 0xffffff,
            program: (context) => {
                context.beginPath();
                context.arc(0, 0, 0.5, 0, PI2, true);
                context.fill();
            }
        });

        let geometry = new THREE.Geometry();
        for (let i = 0; i < 180; i += 1)
        {
            this.particle = new THREE.Sprite(material);
            this.particle.position.x = (Math.random() * 2) - 1;
            this.particle.position.y = (Math.random() * 2) - 1;
            this.particle.position.z = (Math.random() * 2) - 1;
            this.particle.position.normalize();
            this.particle.position.multiplyScalar((Math.random() * 10) + 450);
            this.particle.scale.x = 3.5;
            this.particle.scale.y = 3.5;
            this.scene.add(this.particle);
            geometry.vertices.push(this.particle.position);
        }

        // lines
        this.line = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xffffff, opacity: 0.5 }));
        this.scene.add(this.line);
        document.addEventListener('mousemove', this.onDocumentMouseMove, false);
        document.addEventListener('touchstart', this.onDocumentTouchStart, false);
        document.addEventListener('touchmove', this.onDocumentTouchMove, false);
        window.addEventListener('resize', this.onWindowResize, false);
    }

    animate()
    {
        requestAnimationFrame(this.animate);
        this.scene.rotation.x += 0.003;
        this.scene.rotation.y += 0.003;
        this.threeRender();
    }

    threeRender()
    {
        this.camera.position.x += (this.mouseX - this.camera.position.x) * 0.05;
        this.camera.position.y += ((-this.mouseY + 200) - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
    }

    render()
    {
        // const { t } = this.props;
        return (
            <div className="co_threeLine">
                <div ref={(div) => { this.threeContainer = div; }} />
            </div>
        );
    }
}

ThreeLine.defaultProps = {
    // t: () => {},
};

ThreeLine.propTypes = {
    // t: PropTypes.func
};

export default connect()(ThreeLine);
