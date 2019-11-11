# Vue List Package

**Props**

`listType`: 'ul' (default) | 'ol' | 'div' | null;

`listType` contains type for list in HTML.
See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul and 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol .

If `listType` does not match any of the types above, then the default value will be set.

`header`: String | null (default);

`header` contains header for list.

`items`: Array | Object | null;

If `items` is empty return `emptyListMsg` message.

If `items` elements is Object, it must have prop **title**(priority) or **name** for view.

If `listType` is 'div', `items` property of links must contains **href**(priority) or **link** for the link.

For badges, add property `badge` for `items` elements if have this.

`emptyListMsg`: String | null;

If list is empty, show this message.

`styles`: Object | null;

   `styles.class`: 'default' | 'bootstrap' (default) | null;
   
   Ready-made styles for the list.
   
   `styles.listType`: See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type | null;
   
   `styles.colorActive`: 'primary' (default) | 'secondary' | 'success' | 'danger' | null;
   
   Color for active element.
   
 `disabled`: String | Array | null

Number disabled element.
