import ora from 'ora';

const spinner = ora('Starting slide framework...')
    .start();

spinner.color = 'yellow';

setTimeout(() => {
    spinner.info('Slide framework ready!');
}, 4000);
