# ember-cli-pushy

This ember-cli addon turns [pushy 0.9.2](https://github.com/christophery/pushy/tree/0.9.2)
(responsive off-canvas navigation menu) into an ember component.

## Installation

```
npm install --save-dev ember-cli-pushy
```

## Usage

```html
{{#pushy-left}}
  <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
  </ul>
{{/pushy-left}}

<div class="site-overlay"></div>

<div id="container">
  <div class="menu-btn">&#9776; Menu</div>
</div>
```

See [pushy 0.9.2](https://github.com/christophery/pushy/tree/0.9.2) for tips and
browser compatibility

## Configuration

At the moment, this addon does not offer any configuration, just like
[pushy 0.9.2](https://github.com/christophery/pushy/tree/0.9.2) doesn't either.
