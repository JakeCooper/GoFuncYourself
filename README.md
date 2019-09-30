# GoFuncYourself

GoFuncYourself is a library that converts proper JavaScript code into tuple return, Golang-style functions.

## Installing

`npm install go-func-yourself`

## How it works

It's as easy as

```
import gfy from 'go-func-yourself'

const resRunner = () => {
  let { res, err } = gfy(() => {
    // ... your func
  });
  if (err) {
    // ... do error
  }
  // ... do success
};
```

## Contributing

Don't

## Liscense
MIT
