# nixexpr

JavaScript is great as a programming language, but sometimes it can be
really inconvenient when you are using it as a way to write
configuration data. nixexpr allows you to use [Nix](https://nixos.org)
syntax to make dealing with complicated configuration that much
easier.

To get started, install the package `@xeserv/nixexpr`:

```
npm install --save @xeserv/nixexpr
```

And then import it from your code:

```
import { nix } from "@xeserv/nixexpr";
```

Then use it like you would any other tagged template:

```
const highlight = nix`{
  pre_tags = [ "em" ];
  post_tags = [ "</em>" ];
  require_fields_match = false;
  fields.body_content.fragment_size = 200;
  fields.body_content.number_of_fragments = 1;
}
```

## Why?

Consider the differences between these two snippets of code:

```js
{
  highlight: {
    pre_tags: ['<em>'],
    post_tags: ['</em>'],
    require_field_match: false,
    fields: {
      body_content: {
        fragment_size: 200,
        number_of_fragments: 1,
      },
    },
  },
}
```

vs

```nix
highlight = {
  pre_tags = [ "em" ];
  post_tags = [ "</em>" ];
  require_fields_match = false;
  fields.body_content.fragment_size = 200;
  fields.body_content.number_of_fragments = 1;
};
```

The one on the bottom has a lot less boilerplate and is overall a lot
easier to deal with.

## Disclaimer

If you use this in production and have issues with it, please
reconsider your life decisions. If you still think it's a good idea to
use this library, [get in contact](https://xeiaso.net/contact) to
arrange a consulting meeting to help optimize the library for your
unique needs.
