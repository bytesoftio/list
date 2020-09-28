# @bytesoftio/list

## Installation

`yarn add @bytesoftio/list` or `npm install @bytesoftio/list`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Usage](#usage)
- [createList](#createlist)
- [ObservableList](#observablelist)
- [Usage in React](#usage-in-react)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

Similar to packages [@bytesoftio/value](https://github.com/bytesoftio/value) and [@bytesoftio/store](https://github.com/bytesoftio/store), except this one is optimized for use with arrays. Thanks to the [@bytesoftio/use-list](https://github.com/bytesoftio/use-list) package, this library allows you to write lists that can be used in any environment as well as inside React through hooks.

## Usage

## createList

Creates a new instance of `ObservableList` .

```ts
import { createList } from "@bytesoftio/list"

// create a new list from initial state
const list = createList(['some', 'data'])
```

## ObservableList

A very simple observable like object.

```ts
import {createList} from "@bytesoftio/list"

const list = createList(["apple", "tomato"])

// get the underlying list value, read only
list.get()

// replace list state
list.set(["mango", "potato"])

// add some new values
list.add("oranges", "beans")

// remove a value from state
list.remove("beans")

// check if a value is present in state
list.has("oranges")

// get value at index
list.getAt(0)
// set value at index
list.setAt(1, "chili")
// check if there is a value at given index
list.hasAt(1)
// remove value at a specific index
list.removeAt(1)
// get index of a value in list
list.indexOf("oranges")

// get a filtered copy of values in list
list.filter((value, index) => true)
// get a mapped copy of values in list
list.map((value, index) => newValue)
// iterate the list
list.forEach((value, index) => {})

// reset list back to initial state ["apple", "tomato"]
list.reset()

// reset list state and change its initial value
list.reset(["kiwi"])

// listen to state changes outside
list.listen(state => console.log(state))
```

## Usage in React

To learn how to use this package inside React, please refer to the [@bytesoftio/use-list](https://github.com/bytesoftio/use-list) package.
