
const spinner = function () {
    let arr = ["|", "/", "-", "\\", "|"];
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            process.stdout.write(`\r${arr[i]}`);
            if (i === arr.length - 1) {
                process.stdout.write(`\r${arr[i]} \n`);
            }
          }, 200 * i);
    }  
}
spinner();

