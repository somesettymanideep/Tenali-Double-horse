import React, { Component } from 'react';
import $ from 'jquery'; // Import jQuery

class Container extends Component {
    componentDidMount() {
        this.rotateInterval = window.setInterval(this.rotate, 4000);
    }

    componentWillUnmount() {
        clearInterval(this.rotateInterval);
    }

    rotate = () => {
        const lastChild = $('.slider-activities div:last-child').clone();
        $('.slider-activities div').removeClass('firstSlide');
        $('.slider-activities div:last-child').remove();
        $('.slider-activities').prepend(lastChild);
        $(lastChild).addClass('firstSlide');
    };

    render() {
        return (
            <div className="container-ac">
        <h2 className='title text-center pt-5'>Notable Activities</h2>
                <div className="slider-activities">
                    <div className="box1-activities firstSlide"></div>
                    <div className="box2-activities"></div>
                    <div className="box3-activities"></div>
                    <div className="box4-activities"></div>
                    <div className="box5-activities"></div>
                    <div className="box6-activities"></div>
                    <div className="box7-activities"></div>
                </div>
            </div>
        );
    }
}

class TestDiv extends Component {
    render() {
        return (
            <div id="test"></div>
        );
    }
}

class Instagram extends Component {
    render() {
        return (
            <div>
                <Container />
                <TestDiv />
            </div>
        );
    }
}

export default Instagram;
