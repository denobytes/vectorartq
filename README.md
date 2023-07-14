
[![Latest version](https://deno.land/badge/vectorartq/version)](https://deno.land/x/vectorartq)

# vectorartq

**vectorartq** is a deno cli vectorartai query tool

query for vectorartai images

## usage

to run:

```sh
deno run --allow-net 'https://deno.land/x/vectorartq/cli.ts' <search term>
```

example:

```
deno run --allow-net 'https://deno.land/x/vectorartq/cli.ts' dino
┌──────────────────────────────────────────────┬───────────────────────────────┐
│ urlpath                                      │ description                   │
├──────────────────────────────────────────────┼───────────────────────────────┤
│ /xE-VtsYZUS2Y8MtLMcbXAg/4e53b5cb23e721568ba2 │ cute dino, big cute eyes,     │
...
...
...
```

## install

Requires [deno](https://deno.land/manual@v1.33.2/getting_started/installation)

```
deno install -n vectorartq --allow-net https://deno.land/x/vectorartq/cli.ts
```

## license

Copyright 2023 **denobytes**.\
See [LICENCE](LICENSE) file to get more infomation.

