const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the primo ${chalk.red('ge react-component')} generator!`));

    const prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What will the name of your component be?',
      default: 'Component'
    },
    {
      type: 'confirm',
      name: 'stateful',
      message: 'Will your component be stateful?',
      default: true
    }];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let componentTemplatePath;
    let testTemplatePath;
    if (this.props.stateful) {
      componentTemplatePath = 'component-stateful.js';
      testTemplatePath = 'component-stateful.tests.js';
    } else {
      componentTemplatePath = 'component-stateless.js';
      testTemplatePath = 'component-stateless.tests.js';
    }

    this.fs.copyTpl(
      this.templatePath(componentTemplatePath),
      this.destinationPath(`src/components/${this.props.componentName}/${this.props.componentName}.jsx`),
      {componentName: this.props.componentName}
    );
    this.fs.copyTpl(
      this.templatePath('component-stateful.scss'),
      this.destinationPath(`src/components/${this.props.componentName}/${this.props.componentName}.scss`),
      {componentName: this.props.componentName}
    );
    this.fs.copyTpl(
      this.templatePath(testTemplatePath),
      this.destinationPath(`src/components/${this.props.componentName}/__dev__/${this.props.componentName}.test.js`),
      {componentName: this.props.componentName}
    );
  }
};
