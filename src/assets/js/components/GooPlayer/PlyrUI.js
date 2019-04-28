import Plyr from 'plyr';

/**
 * Player UI
 * Inits plyr instances and adds custom Player UI
 */
const PlyrUI = (() => {

  /**
   * Audio Instance
   * Replaces default audio player with Plyr instance
   */
  var audioEl = '.js-audio'

  return {

    /**
     * Init Player, pass in custom controls
     */
    init() {
      const controls = this.controls()
      const player = new Plyr(
        audioEl, {
          controls: controls
        }
      )
    },

    /**
     * Controls UI
     */
    controls() {
      return `
        <section class="plyr__controls">
          <div class="plyr__song-info">
            <span class="plyr__song-name js-song-title"></span>
            <span class="plyr__song-artist js-song-artist"></span>
          </div>
          <div class="plyr__utils">
            <button type="button" class="plyr__control" data-plyr="restart">
              <svg role="presentation"><use xlink:href="#plyr-restart"></use></svg>
              <span class="plyr__tooltip" role="tooltip">Restart</span>
            </button>
            <button type="button" class="plyr__control" data-plyr="rewind">
              <svg role="presentation"><use xlink:href="#plyr-rewind"></use></svg>
              <span class="plyr__tooltip" role="tooltip">Rewind {seektime} secs</span>
            </button>
            <button type="button" class="plyr__control js-play" aria-label="Play, {title}" data-plyr="play">
              <svg class="icon--pressed" role="presentation">
                <use xlink:href="#plyr-pause"></use>
              </svg>
              <svg class="icon--not-pressed" role="presentation">
                <use xlink:href="#plyr-play"></use>
              </svg>
              <span class="label--pressed plyr__tooltip" role="tooltip">Pause</span>
              <span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span>
            </button>
            <button type="button" class="plyr__control" data-plyr="fast-forward">
              <svg role="presentation">
                <use xlink:href="#plyr-fast-forward"></use>
              </svg>
              <span class="plyr__tooltip" role="tooltip">Forward {seektime} secs</span>
            </button>
            <div class="plyr__progress">
              <input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek">
              <progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress>
              <span role="tooltip" class="plyr__tooltip">00:00</span>
            </div>
            <div class="plyr__times">
              <div class="plyr__time plyr__time--current" aria-label="Current time">00:00</div>
              <div class="plyr__time plyr__time--duration" aria-label="Duration">00:00</div>
            </div>
          </div>
          <div class="plyr__sounds">
            <button type="button" class="plyr__control" aria-label="Mute" data-plyr="mute">
              <svg class="icon--pressed" role="presentation">
                <use xlink:href="#plyr-muted"></use>
              </svg>
              <svg class="icon--not-pressed" role="presentation">
                <use xlink:href="#plyr-volume"></use>
              </svg>
              <span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span>
              <span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span>
            </button>
            <div class="plyr__volume">
              <input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume">
            </div>
          </div>
        </section>`;
    }
  }
})()

export default PlyrUI
