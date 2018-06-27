import React from 'react';

class Nizar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			emailAddress: ''
		};
	}

	handleSubmit = e => {
		e.preventDefault();

		alert('submitting');
	};

	isSubmitDisabled = errors => {
		return Object.values(errors).some(errMsg => {
			return errMsg;
		});
	};

	validate = (firstName, lastName, emailAddress) => {
		const errors = {
			firstName: /^[a-zA-Z]+$/.test(firstName)
				? ''
				: 'you can have only alphabetic characters',
			lastName: /^[a-zA-Z]*$/.test(lastName)
				? ''
				: 'you can have only alphabetic characters',
			emailAddress: /^\w+@\w+\.\w{2,3}$/.test(emailAddress)
				? ''
				: 'an invalid email address'
		};

		return errors;
	};

	render() {
		const { firstName, lastName, emailAddress } = this.state;
		const errors = this.validate(firstName, lastName, emailAddress);

		return (
			<form className="App" onSubmit={this.handleSubmit}>
				<h1>Forms</h1>

				<label htmlFor="firstName">First name:</label>
				<input
					id="firstName"
					className={errors.firstName ? 'invalid' : ''}
					onChange={e => this.setState({ firstName: e.target.value })}
					value={firstName}
				/>
				<span className="err-msg">{errors.firstName}</span>

				<br />

				<label htmlFor="lastName">Last name:</label>
				<input
					id="lastName"
					className={errors.lastName ? 'invalid' : ''}
					onChange={e => this.setState({ lastName: e.target.value })}
					value={lastName}
				/>
				<span className="err-msg">{errors.lastName}</span>

				<br />

				<label htmlFor="emailAddress">Email:</label>
				<input
					id="emailAddress"
					className={errors.emailAddress ? 'invalid' : ''}
					onChange={e => this.setState({ emailAddress: e.target.value })}
					value={emailAddress}
				/>
				<span className="err-msg">{errors.emailAddress}</span>

				<br />

				<button type="submit" disabled={this.isSubmitDisabled(errors)}>
					submit
				</button>
			</form>
		);
	}
}

export default Nizar;