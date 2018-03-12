const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
    prompting() {
        // Have Yeoman greet the user.
        this.log(yosay(`Welcome to the primo ${chalk.red('generator-react-component')} generator!`));

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
        this.fs.copyTpl(
            this.templatePath('component-stateful.js'),
            this.destinationPath(`src/components/${this.props.componentName}/${this.props.componentName}.jsx`),
            { componentName: this.props.componentName }
        ),
        this.fs.copyTpl(
            this.templatePath('component-stateful.scss'),
            this.destinationPath(`src/components/${this.props.componentName}/${this.props.componentName}.scss`),
            { componentName: this.props.componentName }
        ),
        this.fs.copyTpl(
            this.templatePath('component-stateful.tests.js'),
            this.destinationPath(`src/components/${this.props.componentName}/tests/${this.props.componentName}.js`),
            { componentName: this.props.componentName }
        );
    }
};
