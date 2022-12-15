export default class Analtyics {
  constructor() {
    this.pageType = 'marketing';
    this.checkLinkTags();
  }

  checkLinkTags() {
    document.querySelectorAll('[data-link-tag]').forEach((element) => {
      element.addEventListener('click', (event) => {
        this.fireLinkTag(event.target.getAttribute('data-link-tag'));
      });
    });
  }

  fireLinkTag(tag) {
    try {
      window.utag.link({
        event_name: tag,
      });
    } catch (e) {
      console.log(`bloomies-150: ${e}`);
    }
  }

  fireViewTag(tag) {
    try {
      window.utag.view({
        page_type: this.pageType,
        event_name: tag,
      });
    } catch (e) {
      console.log(`bloomies-150: ${e}`);
    }
  }
}
