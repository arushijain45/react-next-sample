import Layout from '../components/Layout';
import Post from '../components/Post';
import _ from 'lodash';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

export default class Home extends React.Component {
  render () {
    const {posts} = this.props;
    return (
      <Layout>
        <div>
          {posts && (
            _.map(posts, (post, index) => <Link key={index} as={`/post/${post.id}`} href={`/post?id=${post.id}`}><a><Post data={post} /></a></Link>)
          )}
        </div>
      </Layout>
    );
  }
}

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('http://dnitestapp-env.us-west-2.elasticbeanstalk.com/api/feeds')
  const json = await res.json()
  return { posts: json.feeds }
}
