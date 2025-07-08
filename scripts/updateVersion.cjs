const fs = require('fs');
const path = require('path');

// 确认版本号为三位数，比如1.0.0
function getNewVersion(arr) {
  const [major, minor, patch] = arr.map((item) => Number(item));
  if (patch < 99) {
    // 修订号递增
    return `${major}.${minor}.${patch + 1}`;
  }
  if (minor < 9) {
    // 次版本号递增，修订号归零
    return `${major}.${minor + 1}.0`;
  }
  // 主版本号递增，次版本号和修订号归零
  return `${major + 1}.0.0`;
}

function main() {
  // 获取版本号
  // 读取npm包的package.json文件，获取版本号

  const packageJsonPath = path.join(__dirname, '../npm/package.json');
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf-8');
  const obj = JSON.parse(packageJsonContent);
  const arr = obj.version.split('.');
  // 生成版本
  if (arr.length !== 3) {
    throw new Error('版本号必须是三位数，比如1.0.0');
  }
  // 生成版本号文件
  const newVersion = getNewVersion(arr);
  console.log(newVersion, 'newVersion');
  const data = JSON.stringify({ ...obj, version: newVersion }, null, 2);
  // 写入版本号文件
  fs.writeFileSync(path.join(__dirname, '../npm/package.json'), data);
}

main();
