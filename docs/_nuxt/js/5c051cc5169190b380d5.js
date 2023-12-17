(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{366:function(n,e,t){"use strict";t.r(e),e.default="# Document Editing Guidelines\n\n## Adding a Markdown File\n\nAdd a markdown file to the `contents/zh/` (Chinese posts) or `contents/en/` (English posts) directories, up to three levels. Update the path and title information in `contents/zh/posts.yml` or `contents/en/posts.yml`.\n\nLowercase markdown file names.\n\n## Using Prettier to Automatically Format Code\n\nBefore you start, we recommend installing the [prettier VSCode plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), which will automatically format the code for you when you save it.\n\nIf you feel that the automatic formatting is breaking your code block, you can add the following comment to prevent `prettier` from formatting the code inside the block\n\n```markdown\n\x3c!-- prettier-ignore-start --\x3e\n\x3c!-- prettier-ignore-end --\x3e\n```\n\nIf you find blocks of code that are not formatted, check first for syntax errors in the code.\n\n## Built-in Variables\n\n- `optionPath`\n- `mainSitePath`\n- `exampleViewPath`\n- `exampleEditorPath`\n- `lang`\n\nUsage:\n\n```\n${xxxxx}\n```\n\n## Link to Other Articles\n\n```markdown\n[Get Apache ECharts](${lang}/basics/download)\n```\n\n[Get Apache ECharts](${lang}/basics/download)\n\n## Embedding Code\n\n### Basic Usage\n\n\x3c!-- prettier-ignore-start --\x3e\n\n```markdown\n```js\noption = {\n    series: [{\n        type: 'bar',\n        data: [23, 24, 18, 25, 27, 28, 25]\n    }]\n};\n\\```\n```\n\n\x3c!-- prettier-ignore-end --\x3e\n\n```js\noption = {\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n### Recommended Way of Writing Code\n\nIn order to allow the tool to help us format the code, we should try to avoid syntactically problematic writing styles.\n\nFor example, the comment `...`\n\n```js\noption = {\n  series: [\n    {\n      type: 'bar'\n      // ...\n    }\n  ]\n};\n```\n\n### Live Preview and Editing\n\n> Currently only preview of Option code is supported\n\n\x3c!-- prettier-ignore-start --\x3e\n```markdown\n\\```js live\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n\\```\n```\n\n\x3c!-- prettier-ignore-end --\x3e\n\n```js live\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n### More Preview Layouts\n\n#### Left to Right\n\n\x3c!-- prettier-ignore-start --\x3e\n\n```markdown\n```js live {layout: 'lr'}\noption = {\n  ...\n};\n\\```\n```\n\n\x3c!-- prettier-ignore-end --\x3e\n\n```js live {layout: 'lr'}\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n#### Right to left\n\n\x3c!-- prettier-ignore-start --\x3e\n\n```markdown\n```js live {layout: 'rl'}\noption = {\n  ...\n};\n\\```\n```\n\n\x3c!-- prettier-ignore-end --\x3e\n\n```js live {layout: 'rl'}\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n#### Down to Up\n\n\x3c!-- prettier-ignore-start --\x3e\n\n```markdown\n```js live {layout: 'bt'}\noption = {\n  ...\n};\n\\```\n```\n\n\x3c!-- prettier-ignore-end --\x3e\n\n```js live {layout: 'bt'}\noption = {\n  xAxis: {\n    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n### Highlighting Lines of Code and Adding Filenames\n\nUse.\n\n\x3c!-- prettier-ignore-start --\x3e\n\n```markdown\n```js{1,3-5}[option.js]\noption = {\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n\\```\n```\n\n\x3c!-- prettier-ignore-end --\x3e\n\nEffects.\n\n```js{1,3-5}[option.js]\noption = {\n  series: [\n    {\n      type: 'bar',\n      data: [23, 24, 18, 25, 27, 28, 25]\n    }\n  ]\n};\n```\n\n## Embedding Images\n\nSource images are stored under `static/images/`.\n\n```markdown\n![image description](images/demo.png)\n```\n\n### Set the Image Height and Width\n\nFor the temporary style of the current page, you can just write html.\n\n```markdown\n<img data-src=\"images/demo.png\" style=\"width: 50px\" />\n```\n\n## Add Example Iframe\n\n`src` is the string after `?c=` in the https://echarts.apache.org/examples/en/editor.html?c=line-simple address\n\nUse:\n\n```markdown\n<md-example src=\"doc-example/getting-started\" width=\"100%\" height=\"300\"></md-example>\n```\n\nResult:\n<md-example src=\"doc-example/getting-started\" width=\"100%\" height=\"300\"></md-example>\n\n## Add Link to Option Item\n\nUse:\n\n```markdown\n<md-option link=\"series-bar.itemStyle.color\"></md-option>\n```\n\nResult:\n<md-option link=\"series-bar.itemStyle.color\"></md-option>\n\n## More Component Usage\n\nThe documentation supports the use of globally registered `markdown` components. In addition to the `md-example` component just described, the following components are also available\n\n### md-alert\n\nPrompt components\n\n```markdown\n<md-alert type=\"info\">\nThis is an info alert.\n</md-alert>\n```\n\n<md-alert type=\"info\">\nThis is an info alert.\n</md-alert>\n\n```markdown\n<md-alert type=\"success\">\nThis is a success alert.\n</md-alert>\n```\n\n<md-alert type=\"success\">\nThis is a success alert.\n</md-alert>\n\n```markdown\n<md-alert type=\"warning\">\nThis is a warning alert.\n</md-alert>\n```\n\n<md-alert type=\"warning\">\nThis is a warning alert.\n</md-alert>\n\n```markdown\n<md-alert type=\"danger\">\nThis is a danger alert.\n</md-alert>\n```\n\n<md-alert type=\"danger\">\nThis is a danger alert.\n</md-alert>\n"}}]);