const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the primo ${chalk.red('generate-react-component')}component generator!`));

    const prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What will the name of your component be?',
      default: 'Component'
    }
];

    return this.prompt(prompts).then((props) => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    let componentTemplatePath = 'component-stateless.tsx';
    let storyTemplatePath = 'component.stories.tsx';
    let stylesTemplatePath = 'component.styles.ts';
    let testTemplatePath = 'component-stateless.tests.tsx';

    this.fs.copyTpl(
      this.templatePath(componentTemplatePath),
      this.destinationPath(`src/components/${this.props.componentName}/${this.props.componentName}.tsx`),
      {componentName: this.props.componentName}
    );
    this.fs.copyTpl(
      this.templatePath(testTemplatePath),
      this.destinationPath(`src/components/${this.props.componentName}/__dev__/${this.props.componentName}.test.tsx`),
      {componentName: this.props.componentName}
    );
    this.fs.copyTpl(
      this.templatePath(storyTemplatePath),
      this.destinationPath(`src/components/${this.props.componentName}/__dev__/${this.props.componentName}.stories.tsx`),
      {componentName: this.props.componentName}
    );
    this.fs.copyTpl(
      this.templatePath(stylesTemplatePath),
      this.destinationPath(`src/components/${this.props.componentName}/${this.props.componentName}.styles.ts`),
      {componentName: this.props.componentName}
    );
  }
};
