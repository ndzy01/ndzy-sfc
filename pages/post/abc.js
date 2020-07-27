import Router, { useRouter } from 'next/router';
// /post/abc?foo=bar 路由参数
const Post = () => {
  const router = useRouter();
  const { foo } = router.query;

  return (
    <p>
      Post: {foo}
      <div>
        Click <span onClick={() => Router.push('/about')}>to about</span>
      </div>
    </p>
  );
};

export default Post;
