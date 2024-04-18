import AuthScript from './scripts';

export default function Head() {
  return (
    <>
      <title>FOODAGE</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="나만의 음식 발자취'" name="description" />
      <link href="/favicon.ico" rel="icon" />
      <AuthScript />
    </>
  );
}
