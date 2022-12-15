export default class Brightcove {
  constructor() {
    this.bcAccountId = 75934411001;
    this.bcPolicyKey = 'BCpkADawqM0NvUfP8kau23tpJMWdg09UoT0lqv-Aoqc98Q-ug4rTtp17hA99TA9yLT4-SJm-oIpkYExCvnGqb1fpbxMZM1Y8Yy1Hol4HdRpWGuJHGskT_7155ak';
  }

  getBrightcoveVideoData(videoID) {
    const path = `https://edge.api.brightcove.com/playback/v1/accounts/${this.bcAccountId}/videos/${videoID}`;
    return new Promise((resolve, reject) => {
      fetch(path, {
        method: 'GET',
        cache: 'no-cache',
        headers: {
          Accept: `application/json;pk=${this.bcPolicyKey}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(result => resolve({ video: this.getBrightcoveVideoSource(result), poster: result.poster }))
        .catch(err => reject(err));
    });
  }

  getBrightcoveVideoSource(data) {
    const sourcesArr = data.sources.filter(source => source.src.startsWith('https') && source.container === 'MP4');
    return sourcesArr[0].src;
  }
}
