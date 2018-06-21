import { browser, by, element } from 'protractor';

export class EditorPage {
  navigateTo() {
    return browser.get('/');
  }

  getEditorComponent() {
    return element(by.tagName('trumbowyg-ngx-editor'));
  }

  getRenderedEditor(id: string) {
    return element(by.id(id)).element(by.css('.trumbowyg-editor'));
  }

  getValueContainer() {
    return element(by.tagName('h1'));
  }
}
