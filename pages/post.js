import Layout from '../components/Layout';
import PostLayout from '../components/Post';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'

export default class Post extends React.Component {
  render () {
    return (
      <Layout>
        {this.props.post && (
          <div>
            <Head>
              <title>{this.props.post.description}</title>
              <meta name="description" content={this.props.post.description} />
              <meta name="image" content={this.props.post.thumbnailUrl} />
              <meta name="og:title" content={this.props.post.description} />
              <meta name="og:description" content={this.props.post.description} />
              <meta name="og:image" content={this.props.post.thumbnailUrl} />
              <meta name='twitter:card' content='summary'/>
              <meta name="twitter:title" content={this.props.post.description} />
              <meta name="twitter:description" content={this.props.post.description} />
              <meta name="twitter:image" content={this.props.post.thumbnailUrl} />
            </Head>
            <PostLayout data={this.props.post}/>
        </div>
        )}
      </Layout>
    );
  }
}

Post.getInitialProps = async (context) => {
  const {id} = context.query;
  const res = await fetch(`http://dnitestapp-env.us-west-2.elasticbeanstalk.com/api/feeds/${id}`)
  const json = await res.json()
  console.log("Data fetched"+JSON.stringify(json));
  return { post: json }
}
