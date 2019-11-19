# Vue List Package

![Logo](https://i.ibb.co/Khdzp57/Vue-List-Package-Logo.png)

## Installation

    git clone https://github.com/iLegion/Vue-List-Package.git 
    cd Vue-List-Package
    npm run build

This will create some builds in the dist directory.
- UMD : vuelistpackage.umd.js and vuelistpackage.umd.min.js
- CommonJS: vuelistpackage.common.js

You can add `vuelistpackage` as an npm dependency:
    
    npm i vuelistpackage
    
For use import a component globally or as an subcomponent.

    import VueListPackage from 'vuelistpackage';

### Properties

`listType`: 'ul' (default) | 'ol' | 'div' | null;

`listType` contains type for list in HTML.
See [ul](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) and 
[ol](ttps://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol).

If `listType` does not match any of the types above, then the default value will be set.

`header`: String | null (default);

`header` contains header for list.

`items`: Array | Object | null;

If `items` is empty return `emptyListMsg` message.

If `items` elements is Object, it must have prop **title**(priority) or **name** for view.

If `listType` is 'div', `items` property of links must contains **href**(priority) or **link** for the link.

For badges, add property `badge` for `items` elements if have this.

`styles`: Object | null;

| Prop | Type | Description |
| ---- | ---- | ----------- |
| class | default, materialize, bootstrap (default), null | Ready-made styles for the list. |
| listType | String, null | See [this](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) |
| colorActive | For bootstrap: primary (default), secondary, success, danger, null | Color for active element |
| | For materialize: primary (default), red, purple, null | Color for active element |
   
`active`: String | null;

The number or property name of the active element.
   
`disabled`: String | null

The number or property name of the disabled element.

`config`: Object | null

| Prop | Type | Description |
| ---- | ---- | ----------- |
| mode | String | Mode fo list. 'horizontal' for horizontal list and 'vertical' for vertical list. | 
| emptyListMsg | Object | Config for message if list is empty. |
| emptyListMsg.class | String, null | ID for div element. |
| emptyListMsg.class | String, Array, null | Classname for div element. |
| emptyListMsg.isComponent | Boolean, null | Is the message component. |
| emptyListMsg.componentName | String, null | Contains a correct globally registered component name. |
| emptyListMsg.text | String, null | Contains a message. If `config.emptyListMsg.isComponent` and `config.emptyListMsg.componentName` are true, the message will be inserted into the slot. |

`animations`: Object | null

| Prop | Type | Description |
| ---- | ---- | ----------- |
| start | String | Class for start animation. You can use custom css libraries |
| end | String | Class for end animation. You can user custom css libraries. |

**`All properties is reactive.`**

### Methods

Default callback life cycle: `beforeCreate`, `created`, `beforeMount`, `mounted`, `beforeUpdate`, `updated`, `beforeDestroy`, `destroyed`. See [this](https://vuejs.org/v2/guide/instance.html).

`listUpdated`:

Called after list is updated.

`clickOnItem`:

Called after click event.