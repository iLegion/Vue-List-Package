# Vue List Package

**Props**

`listType`: 'ul' (default) | 'ol' | null;

`listType` contains type for list in HTML.
See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul and 
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol .

If `listType` does not match any of the types above, then the default value will be set.

`header`: String | null (default);

`header` contains header for list.

`items`: Array | Object | null;

`items` must be contains only single-level array (['one', 'two']) or 
object ({ 'vuelistpackage': 'test', 'lorem': 'ipsum'}).

If `items` is empty return message (emptyListMsg).

If `items` is Object, it must have prop **name** or **title** for view.

`emptyListMsg`: String | null;

If list is empty, show this message.

`styles`: Object | null;

   `styles.class`: 'default' | 'bootstrap' (default);
   
   Ready-made styles for the list.
   
   `styles.listType`: See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type ;
   
   `styles.colorActive`: 'primary' (default) | 'secondary' | 'success' | 'danger';
   
   Color for active element.
