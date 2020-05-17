import React, { Component } from 'react';


class ArticlePreview extends Component {
  state = {
    title: undefined,
    description: undefined
  }

  componentDidMount() {
    const { title, description } = this.props;
    this.setState({ title, description });
  }


  render() {
    return (
      <div className="article-preview" style={{ background: this.props.color }}>
        <h3>{this.state.title ? this.state.title : null}</h3>
        <p>{this.state.description ? this.state.description : null}</p>

        <div className="fade"></div>
      </div>
    )
  }
}

export default ArticlePreview;
