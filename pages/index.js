import dynamic from 'next/dynamic'

const Player = dynamic(import('../components/player'), {
  ssr: false,
  loading: () => <p>Loading player...</p>,
});

export default () => (
  <Player />
);
