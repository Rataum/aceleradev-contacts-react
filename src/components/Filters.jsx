import React from 'react';

class Filters extends React.Component {
	
	constructor(props) {
		super(props);
		this.parentHandler = props.parentHandler;
		this.handleChange = this.handleChange.bind(this);
		this.handleSort = this.handleSort.bind(this);
	}

	handleChange(event) {
		const query = event.target.value;
		let filtered = [];

		if (this.props.data.length < this.props.originalData.length) {
			filtered = this.props.originalData;
		} else {
			filtered = this.props.data;
		}

		filtered = filtered.filter(contact => {
			const name = contact.name.toLowerCase();
			return name.indexOf(query.toLowerCase()) !== -1;
		});
		this.parentHandler(filtered);
	}

	handleSort(property) {
		const sort = this.props.data.sort((first, second) => 
			first[property] < second[property] ? -1 : first[property] > second[property] ? 1 : 0
		);
		this.parentHandler(sort);
	}

	render() {
		return (
			<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={this.handleChange}/>

						<button className="filters__search__icon">
							<i className="fa fa-search"/>
						</button>
					</div>

					<button className="filters__item is-selected" onClick={() => this.handleSort('name')}>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" onClick={() => this.handleSort('country')}>
						País <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" onClick={() => this.handleSort('company')}>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button className="filters__item" onClick={() => this.handleSort('department')}>
						Departamento <i className="fas fa-sort-down"/>
					</button>

					<button className="filters__item" onClick={() => this.handleSort('admissionDate')}>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
				</section>
			</div>
		);
	}
}

export default Filters;
