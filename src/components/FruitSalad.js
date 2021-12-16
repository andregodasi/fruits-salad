import React from "react";

export default class FruitSalad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.fruits,
      listSearch: [],
      search: "",
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddFruit = this.handleAddFruit.bind(this);
  }

  componentDidMount() {
    this.setState({ listSearch: this.state.list });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      this.setState({
        listSearch: this.state.search
          ? this.state.list.filter((text) => text.includes(this.state.search))
          : this.state.list,
      });
    }
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value,
    });
  }

  handleAddFruit(e) {
    e.preventDefault();
    this.setState({
      list: [...this.state.list, this.state.search],
      search: "",
    });
  }

  render() {
    return (
      <div>
        <h1>Salada de frutas 🥗</h1>
        <input value={this.state.search} onChange={this.handleSearchChange} />
        {this.state.listSearch.length <= 0 && (
          <button type="button" onClick={this.handleAddFruit}>
            Adicionar fruta
          </button>
        )}
        <ul>
          {this.state.listSearch.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
  }
}
