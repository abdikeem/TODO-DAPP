get in touch with Consensys Diligence
[ 🌐 📩 🔥 ]


Thanks for using Solidity Visual Developer 🤜🤛

ℹ️ Customize this extension to fit your needs! Show/Hide/Enable/Disable features in Preference → Settings → Solidity Visual Developer: solidity-va.*, select one of the customized security-aware color themes in Preferences → Color Themes.

What's New?
The complete changelog can be found here.

v0.1.2
new: decorate/highlight immutable state vars (#9932cc) - #97 (thanks @RomiRand) image

update: dependencies (surya@0.4.6)

new: configuration option to enable the surya.mdreport "negative Modifiers" feature, see surya#162

enabling solidity-va.tools.surya.option.negModifiers will list all modifiers observed in the file with the ones that are not being used with the listed method being ~~striked-through~~
image

Note that the report can be generated either via the report codelense or by selecting files in the Solidity Visual Developer View → right-click → Surya: generate report.

image

image

fix: typos & links to placeholder[.]com - #93 #91 (thanks @almndbtr)
v0.1.1 - ❄️🎄🏂🎄❄️
fix: type resolving and declaration link for inherited statevars

update: move language specific logic to a web compatible extension

https://github.com/tintinweb/vscode-solidity-language (https://marketplace.visualstudio.com/items?itemName=tintinweb.vscode-solidity-language)
The language ships with three security centered Color Themes that can be selected from the Solidity Language & Themes (only) extension page or Code → Preferences → Color Themes
image

update: support for latest solidity parser (extension + surya) #84

v0.1.0 - with a lot of new features 🥳
new: 🥳 major parser refactoring #67 and we published the parser as standalone lib "solidity-workspace"

new: ⚠️ annotations for potential external calls (yellow gutter icon)

best effort - might miss some external calls depending on whether it is possible to easily resolve them (e.g. accessing addresses in nested structures/mappings).
new: cockpit view that lists external calls in the currently selected contract (click into a contract in the editor for the view to update)

image

new: we can now resolve inherited names (hover: declaration link)

image

new: we now decorate identifiers that are storage references (treating them like state-vars)

new: unit-test stub/template for Hardhat/Ethers #70 (preferences → Settings → Solidity Visual Developer: solidity-va.test.defaultUnittestTemplate)

new: (debug) option to enable/disable stacktraces for parser errors (preferences → Settings → Solidity Visual Developer: solidity-va.debug)

new: show codelenses (inline actions) for abstract contracts

new: customize which codelenses to show or hide (preferences → Settings → Solidity Visual Developer: solidity-va.codelens.*) #76

new: expose new command solidity-va.surya.graphThis #76

new: use internal ("dumb" lexical) flattener by default. Optionally allow to select truffle-flattener (preferences → Settings → Solidity Visual Developer: solidity-va.flatten.mode)

update: enable draw.io csv export codelens by default

fix: misplaced decoration when document changes

fix: function selector is incorrect if there's a comment in the function signature definition #68

update: code cleanup; refactored decoration logic and moved it to its own submodule

Note: This notification is only shown once per release. Disable future notification? settings → solidity-va.whatsNew.disabled : true

Thinking about smart contract security? We can provide training, ongoing advice, and smart contract auditing. Contact us.