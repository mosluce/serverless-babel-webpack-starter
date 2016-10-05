# Serverless Babel Webpack Starter Kit
Babel(ES7) + Webpack + Serverless Framework

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### 說明
Write AWS Lambda Functions with ES7(async/await is available)

### 主要套件
- [serverless](https://github.com/serverless) ＠1.0.0-rc.2
- [serverless-webpack](https://github.com/elastic-coders/serverless-webpack) @1.0.0-rc.2

### 參考資源 - 範例
- [include-external-npm-packages](https://github.com/elastic-coders/serverless-webpack/tree/master/examples/include-external-npm-packages)
- [multiple-entries](https://github.com/elastic-coders/serverless-webpack/tree/master/examples/multiple-entries)

### 使用說明
```sh
git clone https://github.com/mosluce/serverless-babel-webpack-starter.git
npm install
```

### Roadmap
- 補完 package.json 的 scripts 部分 (√)

### 待解決問題
- serverless 目前版本無法設定 request/response model
- serverless webpack local 端測試會發生錯誤: Cannot read property 'call' of undefined