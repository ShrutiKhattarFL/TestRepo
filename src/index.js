import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {DemoProject} from 'demo-project';

@Component({
  selector: 'main'
})

@View({
  directives: [DemoProject],
  template: `
    <demo-project></demo-project>
  `
})

class Main {

}

bootstrap(Main);
