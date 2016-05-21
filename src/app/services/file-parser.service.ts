import {Injectable} from 'angular2/core';

import * as _ from 'lodash';

@Injectable()
export class FileParserService {

  private lines = [];

  //var source = Rx.Observable.from(array);

  constructor() {
    this.lines = new Array<string>();
  }

  private addLines(lines): void {
    _.forEach(lines, (line) => {
      if (line.trim().length > 0) {
        this.lines.push(line.replace(/\s+/g, ' ').trim());
      }
    });
  }

  public parseFile(fileContent: string): Array<string> {

    this.lines.length = 0;
    let space = fileContent.split(' ');
    let tab = fileContent.split(/\r\n|\r|\n/g);

    // If file contains single domain in file
    if ((space.length === 1 && tab.length === 1)) {
      this.lines.push(fileContent);
    } else {

      if (space.length > 1) {
        this.addLines(space);
      }

      if (tab.length > 1) {
        this.addLines(tab);
      }
    }

    return this.lines;
  }

}
