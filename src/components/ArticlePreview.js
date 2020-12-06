import React, { Component } from 'react';


class ArticlePreview extends Component {
  state = {
    title: undefined,
    description: undefined,
    
  }

  componentDidMount() {
    const { title, description } = this.props;
    this.setState({ title, description });
  }


  loadMore = () => {
    this.setState({ content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, nihil iste itaque eum fuga autem neque nemo qui inventore voluptas! Delectus dicta aliquam sint a! Aut voluptates laboriosam vitae repellendus." })
  }


  render() {
    return (
      <div className="article-preview" style={{ background: '#CDDFFF' }}>
        <h3>{this.state.title ? this.state.title : null}</h3>
        <p>{this.state.description ? this.state.description : null}</p>

          {
            this.state.content
              ? <p>{this.state.content}</p>
              : <div className="fade">
                  <button className="btn-more" onClick={this.loadMore}>More</button>
                </div>
          }
      </div>
    )
  }
}

export default ArticlePreview;
