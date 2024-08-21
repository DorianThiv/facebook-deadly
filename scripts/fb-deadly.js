console.log('Start Facebook deadly...');

exec();

function exec() {
    const main = document.querySelector('[role="main"]');
    if (main) {
        main.remove();
    }
}