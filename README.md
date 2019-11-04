# Vue List Package

**Props**

`listType`: 'ul' (default) | 'ol' | null;

`header`: String | null (default);

`dataItems`: Array | Object | null;

If `dataItems` is empty return message (emptyListMsg).

`emptyListMsg`: String | null;

Message if list is empty.

`styles`: Object | null;

   `class`: 'default' | 'bootstrap' (default);
   
   `listType`: See https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type ;
   
   `colorActive`: 'primary' (default) | 'secondary' | 'success' | 'danger';
