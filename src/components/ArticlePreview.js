import React, { Component } from 'react';
import Higher from '../hoc/Higher'

class ArticlePreview extends Component {
  state = {
    title: undefined,
    description: undefined
  }

  componentDidMount() {
    const { title, description } = this.props;
    this.setState({ title, description });
  }

  loadMore = () => {
    const pr = this.props.getData();
    pr
      .then((response) => this.setState({ content: response.data.value }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="article-preview">
        <h3>{this.state.title ? this.state.title : null}</h3>
        <p>{this.state.description ? this.state.description : null}</p>

        {
          this.state.content
            ? <p>{this.state.content}</p>
            : <div className="fade"> <button className="btn-more" onClick={this.loadMore}>More</button> </div>
        }

      </div>
    )
  }
}

export default Higher(ArticlePreview);
