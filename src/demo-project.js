import {Component, View} from 'angular2/core';

@Component({
  selector: 'demo-project'
})

@View({
  templateUrl: 'demo-project.html'
})

export class DemoProject {

  constructor() {
    console.info('DemoProject Component Mounted Successfully');
  }

}
