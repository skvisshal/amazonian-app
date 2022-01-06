import React from 'react';

import { Link, Route } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = Object.assign({}, this.state);
        if (e.target.localName === "button") {
            user = {
                email: 'demo@gmail.com',
                password: '123456',
                name: 'Demo User'
            };
        }
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const formTypeText = this.props.formType === 'login' ? 'Sign-In' : 'Create account';
        const alternateFormPromptText = this.props.formType === 'login' ? 'New to Amazonian??' : 'Already have an account?';
        return (
            <div className="session-page">
                <div className="session-form">
                    <Link to="/">
                        <img className="logo session-logo" src={window.logoURL} />
                    </Link>
                    <form className="session-form-section" onSubmit={this.handleSubmit}>
                        <div className="session-form-heading">{formTypeText}</div>
                        {this.renderErrors()}
                        <div className="session-form-inputs">
                            {this.props.formType === 'signup' ? (
                                <>
                                    <label className="auth-input-label">Your name</label>
                                    <input
                                        className="auth-input"
                                        type="text"
                                        value={this.state.name}
                                        onChange={this.update('name')}
                                    />
                                </>
                            ) : (<></>)
                            }
                            <label className="auth-input-label">Email</label>
                            <input
                                className="auth-input"
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                            />
                            <label className="auth-input-label">Password</label>
                            <input
                                className="auth-input"
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                            />
                            <input className="auth-submit-button" type="submit" value={formTypeText} />
                            {this.props.formType === 'login' ? (
                                <button className="auth-submit-button" onClick={this.handleSubmit}>Guest</button>
                            ) : (<></>)
                            }
                            <div className="auth-disclaimer">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</div>
                        </div>
                    </form>
                    <div className="session-form-divider">
                        <div className="alt-form-prompt">{alternateFormPromptText}</div>
                    </div>
                    {this.props.navLink}
                </div>
            </div>
        );
    }
}

export default SessionForm;
