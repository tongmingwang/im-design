const { exec } = require('child_process');
const path = require('path');

// 定义目标目录（这里是 'npm' 文件夹）
const targetDir = path.join(__dirname, '..', 'npm');

// 执行命令的函数
function runCommand(command, cwd) {
  return new Promise((resolve, reject) => {
    exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        console.error(`执行错误: ${error}`);
        return reject(error);
      }
      console.log(stdout);
      console.error(stderr);
      resolve();
    });
  });
}

// 主函数
async function main() {
  try {
    console.log(`切换到目录: ${targetDir}`);
    console.log('执行 npm version patch...');

    await runCommand('npm version patch', targetDir);
    console.log('版本号更新成功！');

    await runCommand('npm publish', targetDir);
  } catch (err) {
    console.error('脚本执行失败:', err);
    process.exit(1);
  }
}

main();
