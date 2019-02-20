webpackJsonp([82],{406:function(n,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default='<p><a href="https://www.npmjs.com/package/@webpack-contrib/config-loader"><img src="https://img.shields.io/npm/v/@webpack-contrib/config-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org"><img src="https://img.shields.io/node/v/@webpack-contrib/config-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/config-loader"><img src="https://david-dm.org/webpack-contrib/config-loader.svg" alt="deps"></a>\n<a href="https://circleci.com/gh/webpack-contrib/config-loader"><img src="https://img.shields.io/circleci/project/github/webpack-contrib/config-loader.svg" alt="tests"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://img.shields.io/badge/gitter-webpack%2Fwebpack-brightgreen.svg" alt="chat"></a></p>\n<p>DEPRECATED. <code>webpack-command</code> is also deprecated. Please use <code>webpack-cli</code>. If any features were not implemented in <code>webpack-cli</code> feel free to create issue. </p>\n<p>Why deprecated <code>webpack-command</code> ?</p>\n<ul>\n<li><code>webpack-cli</code> is very stable and have more features.</li>\n<li>Two CLIs are misleading for developers.</li>\n<li>Hard to maintain two package with same purpose.</li>\n<li>The author stopped developing the package.</li>\n<li>Most of the features are already implemented in <code>webpack-cli</code>.</li>\n</ul>\n<p>Thanks for using <code>webpack</code>! We apologize for the inconvenience. In the future, we will avoid such situations.</p>\n<hr>\n<p>A webpack configuration loader.</p>\n<p>This module utilizes <a href="https://github.com/davidtheclark/cosmiconfig"><code>cosmiconfig</code></a>\nwhich supports declaring a webpack configuration in a number of different file\nformats including; <code>.webpackrc</code>, <code>webpack.config.js</code>, and a <code>webpack</code> property\nin a <code>package.json</code>.</p>\n<p><code>config-loader</code> supports configuration modules which export an <code>Object</code>, <code>Array</code>,\n<code>Function</code>, <code>Promise</code>, and <code>Function</code> which returns a <code>Promise</code>.</p>\n<p>The module also validates found configurations against webpack\'s options schema\nto ensure that the configuration is correct before webpack attempts to use it.</p>\n<h2 id="requirements">Requirements<a href="#requirements" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module requires a minimum of Node v6.9.0 and Webpack v4.0.0.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>config-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install @webpack-contrib/config-loader --save-dev\n</code></pre>\n<p>And get straight to loading a config:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@webpack-contrib/config-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">loader</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token comment">// result = { config: Object, configPath: String }</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<h2 id="extending-configuration-files">Extending Configuration Files<a href="#extending-configuration-files" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module supports extending webpack configuration files with\n<a href="https://eslint.org/docs/user-guide/configuring#extending-configuration-files">ESLint-style</a>\n<code>extends</code> functionality. This feature allows users to create a "base" config and\nin essence, "inherit" from that base config in a separate config. A bare-bones\nexample:</p>\n<pre><code class="hljs language-js"><span class="token comment">// base.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'base\'</span><span class="token punctuation">,</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'development\'</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token keyword">extends</span><span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">,</span> <span class="token string">\'base-config.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'dev\'</span></code></pre>\n<p>The resulting configuration object would resemble:</p>\n<pre><code class="hljs language-js"><span class="token comment">// result</span>\n<span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'dev\'</span><span class="token punctuation">,</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'development\'</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n<p>The <code>webpack.config.js</code> file will be intelligently extended with properties\nfrom <code>base.config.js</code>.</p>\n<p>The <code>extends</code> property also supports naming installed NPM modules which export\nwebpack configurations. Various configuration properties can also be filtered in\ndifferent ways based on need.</p>\n<p><a href="https://github.com/webpack-contrib/config-loader/blob/master/docs/EXTENDS.md">Read More about Extending Configuration Files</a></p>\n<h2 id="gotchas">Gotchas<a href="#gotchas" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="function-config-parameters">Function-Config Parameters<a href="#function-config-parameters" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>When using a configuration file that exports a <code>Function</code>, users of <code>webpack-cli</code>\nhave become accustom to the function signature:</p>\n<pre><code>function config (env, argv)\n</code></pre>\n<p><code>webpack-cli</code> provides any CLI flags prefixed with <code>--env</code> as a single object in\nthe <code>env</code> parameter, which is an unnecessary feature.\n<a href="https://en.wikipedia.org/wiki/Environment_variable#Syntax">Environment Variables</a>\nhave long served the same purpose, and are easily accessible within a\n<a href="https://nodejs.org/api/process.html#process_process_env">Node environment</a>.</p>\n<p>As such, <code>config-loader</code> does not call <code>Function</code> configs with the <code>env</code>\nparameter. Rather, it makes calls with only the <code>argv</code> parameter.</p>\n<h3 id="extending-configuration-files-in-symlinked-modules">Extending Configuration Files in Symlinked Modules<a href="#extending-configuration-files-in-symlinked-modules" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>When using <code>extends</code> to extend a configuration which exists in a different package, care must be taken to ensure you don\'t hit module resolution issues if you are developing with these packages with symlinks (i.e. with <code>npm link</code> or <code>yarn link</code>).</p>\n<p>By default, Node.js does not search for modules through symlinks, and so you may experience errors such as:</p>\n<p><code>module not found: Error: Can\'t resolve \'webpack-hot-client/client\'</code></p>\n<p>This can be fixed by using Node\'s <code>--preserve-symlinks</code> flag which will allow you to develop cross-module, without experiencing inconsistencies when comparing against a normal, non-linked install:</p>\n<p>For webpack-command:</p>\n<pre><code class="hljs language-console">node --preserve-symlinks ./node_modules/.bin/wp\n</code></pre>\n<p>For webpack-serve:</p>\n<pre><code class="hljs language-console">node --preserve-symlinks ./node_modules/.bin/webpack-serve\n</code></pre>\n<h2 id="supported-compilers">Supported Compilers<a href="#supported-compilers" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>This module can support non-standard JavaScript file formats when a compatible\ncompiler is registered via the <code>require</code> option. If the option is defined,\n<code>config-loader</code> will attempt to require the specified module(s) before the\ntarget config is found and loaded.</p>\n<p>As such, <code>config-loader</code> will also search for the following file extensions;\n<code>.js</code>, <code>.es6</code>, <code>.flow</code>, <code>.mjs</code>, and <code>.ts</code>.</p>\n<p>The module is also tested with the following compilers:</p>\n<ul>\n<li><a href="https://github.com/babel/babel/tree/6.x/packages/babel-register"><code>babel-register</code></a></li>\n<li><a href="https://github.com/flowtype/flow-remove-types"><code>flow-remove-types/register</code></a></li>\n<li><a href="https://www.npmjs.com/package/ts-node"><code>ts-node/register</code></a></li>\n</ul>\n<p><em>Note: Compilers are not part of or built-into this module. To use a specific compiler, you\nmust install it and specify its use by using the <code>--require</code> CLI flag.</em></p>\n<h2 id="api">API<a href="#api" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="loaderoptions">loader([options])<a href="#loaderoptions" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Returns a <code>Promise</code>, which resolves with an <code>Object</code> containing:</p>\n<h4 id="config"><code>config</code><a href="#config" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Type: <code>Object</code></p>\n<p>Contains the actual configuration object.</p>\n<h4 id="configpath"><code>configPath</code><a href="#configpath" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Type: <code>String</code></p>\n<p>Contains the full, absolute filesystem path to the configuration file.</p>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="allowmissing"><code>allowMissing</code><a href="#allowmissing" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Type: <code>Boolean</code><br>\nDefault: <code>false</code></p>\n<p>Instructs the module to allow a missing config file, and returns an <code>Object</code>\nwith empty <code>config</code> and <code>configPath</code> properties in the event a config file was\nnot found.</p>\n<h3 id="configpath-1"><code>configPath</code><a href="#configpath-1" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code>\nDefault: <code>undefined</code></p>\n<p>Specifies an absolute path to a valid configuration file on the filesystem.</p>\n<h3 id="cwd"><code>cwd</code><a href="#cwd" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code>\nDefault: <code>process.cwd()</code></p>\n<p>Specifies an filesystem path from which point <code>config-loader</code> will begin looking\nfor a configuration file.</p>\n<h3 id="require"><code>require</code><a href="#require" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String | Array[String]</code>\nDefault: <code>undefined</code></p>\n<p>Specifies compiler(s) to use when loading modules from files containing the\nconfiguration. For example:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'@webpack-contrib/config-loader\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> require<span class="token punctuation">:</span> <span class="token string">\'ts-node/register\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">loader</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>See\n<a href="https://github.com/webpack-contrib/config-loader#supported-compilers">Supported Compilers</a>\nfor more information.</p>\n<h3 id="schema"><code>schema</code><a href="#schema" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Object</code>\nDefault: <code>undefined</code></p>\n<p>An object containing a valid\n<a href="http://json-schema.org/latest/json-schema-validation.html">JSON Schema Definition</a>.</p>\n<p>By default, <code>config-loader</code> validates your webpack config against the\n<a href="https://github.com/webpack/webpack/blob/master/schemas/WebpackOptions.json">webpack config schema</a>.\nHowever, it can be useful to append additional schema data to allow configs,\nwhich contain properties not present in the webpack schema, to pass validation.</p>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<h4 id="contributing-1"><a href="https://github.com/webpack-contrib/config-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a><a href="#contributing-1" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h4 id="mit"><a href="https://github.com/webpack-contrib/config-loader/blob/master/LICENSE">MIT</a><a href="#mit" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n'}});