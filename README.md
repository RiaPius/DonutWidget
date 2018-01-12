# DonutWidget jQuery Plugin

DonutWidget is a simple jquery donut widget 


## Installation

1. Download the files
2. Load jquery.DonutWidget.min.css and jquery.DonutWidget.min.js


## Prerequisites
Since DonutWidget is a jquery plugin, jquery should be loaded before the plugin.

## Initalization
DonutWidget can be initialized in 2 ways

### jQuery Implementation
```
$(selector).DonutWidget(options);
```

### Implemneting using function

```
var widget = DonutWidget.draw($(selector), options);
```

## Redrawing widgets
You can update one or more properties and redraw the widget

### Using jQuery
To update a property:
```
$(selector).data("$donut").options.value = 20;
```
To redraw the widget
```
$(selector).DonutWidget();
```
or you can pass the updated properties directly as
```
$(selector).DonutWidget(options);
```

### Using variable
You can pass the updated property in ```redraw``` function
```
widget.redraw(options); 
```


Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/paulgeorge92/DonutWidget/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://help.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
