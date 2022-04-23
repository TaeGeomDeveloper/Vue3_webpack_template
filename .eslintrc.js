
module.exports = {
  env : {
    // 동작 코드 검사
    browser: true,
    node: true
  },
  // 코드검사를 할 규칙
  estends: [
    // vue
    //'plugin:vue/vue3-essential',              // 1
    'plugin:vue/vue3-strongly-recommended',     // 2
    //'plugin:vue/vue3-recommended',            // 3

    // js
    'eslint:recommended'
  ],
  parserOptions: {
    // 바벨 구버전에서 동작 가능하게 해준다.
    parser : 'babel-eslint'
  },
  rules : {
    "vue/html-closing-bracket-newline" : ["error", {
      "singleline":"never",
      "multline": "never"
    }]
  }
}