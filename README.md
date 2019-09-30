# GoFuncYourself

GoFuncYourself is a library that converts proper JavaScript code into tuple return, Golang-style functions.

## Installing

`npm install go-func-yourself`

## How it works

It's as easy as

```
import gfy from 'go-func-yourself'

let { res, err } = gfy(() => {
  // ... your func
});
if (err) {
  // ... do error
}
// ... do success

```

## Contributing

Open a PR and I probably won't review it

## Liscense
MIT
