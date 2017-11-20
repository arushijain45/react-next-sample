
class Post extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="column">
        <img src={data.thumbnailUrl} alt={data.description} />
        <scan>{data.description}</scan>
        <style jsx>{`
          img {
            width: 200px;
            height: 200px;
            border-radius: 3px;
          }

          scan {
            text-decoration: none;
            color: #747474;
          }
       `}</style>
      </div>
    );
  }
}

export default Post;
