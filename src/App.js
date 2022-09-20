import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';

class App extends Component {
    state = { displayBio: false }
    
    /*constructor() {
        super();

        this.toggleBio = this.toggleBio.bind(this);
    }*/

    toggleBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Kevin Jackson. I am an IoT Specialist</p>
                <p>This paragraph is used to tell you a little about myself...</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Atlanta Georgia, and code for work.</p>
                            <p>My favorite language is JavaScript, as I am a React.js developer.</p>
                            <p>My favorite hobby is biking.</p>
                            <button onClick={ this.toggleBio }>Close Bio</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={ this.toggleBio }>Read Bio</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <SocialProfiles />
            </div>
        );
    }
}

export default App;