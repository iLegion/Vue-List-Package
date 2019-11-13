# Vue List Package

##Installation

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

###Props

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

`styles.class`: 'default' | 'materialize' | 'bootstrap' (default) | null;
   
Ready-made styles for the list.
   
`styles.listType`: See [this](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) | null;
   
`styles.colorActive`: 

For bootstrap: 'primary' (default) | 'secondary' | 'success' | 'danger' | null;

For materialize: 'primary' (default) | 'red' | 'purple' | null;
   
Color for active element.

`active`: String | null;

The number or property name of the active element.
   
`disabled`: String | null

The number or property name of the disabled element.

`config`: Object | null,

`config.emptyListMsg` is object with config for message if list is empty.

`config.emptyListMsg.class`: String | null

ID for div element.

`config.emptyListMsg.class`: String | Array | null;

Classname for div element.

`config.emptyListMsg.isComponent`: Boolean | null;

Is the message component.

`config.emptyListMsg.componentName`: 'String' | null;

Contains a correct globally registered component name.

`config.emptyListMsg.text`: 'String' | null;

Contains a message. If `config.emptyListMsg.isComponent` and` config.emptyListMsg.componentName` are true, the message will be inserted into the slot. 

###Methods

Default callback life cycle: beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed. See [this](https://vuejs.org/v2/guide/instance.html).