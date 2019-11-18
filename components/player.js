import { Player } from 'bitmovin-player'

 class BitmovinPlayer extends React.Component {
     state = {
         player: null,
     };
     playerConfig = {
         key: '85cf73ec-2b9e-4d8b-83cd-080d953e03bb',
         location: {
           ui: 'https://cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.js',
           ui_css: 'https://cdn.bitmovin.com/player/web/8/bitmovinplayer-ui.css',
         },
     };
     playerSource = {
         dash: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
         hls: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
         progressive: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4',
         poster: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/poster.jpg'
     };
     componentDidMount() {
         this.setupPlayer();
     }
     componentWillUnmount() {
         this.destroyPlayer();
     }
     setupPlayer() {
         const player = new Player(document.getElementById('player'), this.playerConfig);
         player.load(this.playerSource).then(() => {
             this.setState({
                 ...this.state,
                 player
             });
             console.log('Successfully loaded source');
         }, () => {
             console.log('Error while loading source');
         })
     }
     destroyPlayer() {
         if (this.state.player != null) {
             this.state.player.destroy();
             this.setState({
                 ...this.state,
                 player: null
             });
         }
     }
     render() {
         return <div id="player" />;
     }
 }

export default BitmovinPlayer

