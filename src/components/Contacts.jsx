import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {

	render() {
		const hasData = this.props.hasOwnProperty('data');

		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<article className="contact">
						<span className="contact__avatar"></span>
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</article>
					{hasData ? this.props.data.map(contact => {
						return( 
							<Contact data={contact} />
						)}
					) : null}
				</section>
			</div>
		);
	}
}

export default Contacts;
