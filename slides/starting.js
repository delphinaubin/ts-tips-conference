import ora from 'ora';
import * as fs from 'fs';

const spinner = ora('Starting slide framework...').start();
spinner.color = 'yellow';

if (fs.existsSync('.run')) {
    setTimeout(() => {
        spinner.succeed('Slide framework started.');
    }, 1000);
} else {
    fs.writeFileSync('.run', '');

    setTimeout(() => {
        spinner.fail('Slide framework failed to start.');
    }, 4000);
}