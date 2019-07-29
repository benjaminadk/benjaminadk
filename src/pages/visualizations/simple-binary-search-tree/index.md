---
title: Simple Binary Search Tree
description: A Visualization of a Binary Search Tree using JavaScript and D3
date: '2019-07-23'
featured: featured.png
---

Check out the [source code](https://observablehq.com/@benjaminadk/simple-binary-search-tree) at _Observable_.

This visualization implements a _Binary Search Tree_ using _JavaScript_. As values are added to the _Binary Search Tree_ new _nodes_ are created. Each node has a `value`, `left` and `right` property. The `left` and `right` properties are other nodes in the tree. The only rule is that the `left` node's `value` must be less than or equal to the parent node's value and the `right` node's value must be greater than or equal to the parent's value. This rule makes finding a value for efficient than the linear alternative. Imagine a linear search as checking one value at a time sequencially.

Using _Big O_ notation the linear search is `O(n)` and the _Binary Search Tree_ is `O(log n)`.

Here is my implementation of a _Binary Search Tree_ that includes logic to return the path of the search.

```js
class BinarySearchTree {
  constructor() {
    this.root = null
    this.path = []
  }

  insert(value) {
    var newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  remove(value) {
    this.root = this.removeNode(this.root, value)
  }

  removeNode(node, key) {
    if (node === null) {
      return null
    } else if (key < node.value) {
      node.left = this.removeNode(node.left, key)
      return node
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      if (node.left === null && node.right === null) {
        node = null
        return node
      }
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }
      var aux = this.findMinNode(node.right)
      node.value = aux.value
      node.right = this.removeNode(node.right, aux.value)
      return node
    }
  }

  findMinMode(node) {
    if (node.left === null) {
      return node
    } else {
      return this.findMinNode(node.left)
    }
  }

  getRootNode() {
    return this.root
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left)
      console.log(node.value)
      this.inorder(node.right)
    }
  }

  search(node, value, initial = false) {
    if (initial) {
      this.path = []
    }
    if (node === null) {
      return null
    } else if (value < node.value) {
      this.path.push(node.value)
      return this.search(node.left, value)
    } else if (value > node.value) {
      this.path.push(node.value)
      return this.search(node.right, value)
    } else {
      this.path.push(node.value)
      return node
    }
  }

  getPath() {
    return this.path
  }

  getSearchPath(value) {
    this.search(this.root, value, true)
    return this.getPath()
  }
}
```

```js
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
```

The more items in the inital _Array_ the greater the disparity between search iterations needed to find the value and the clearer the difference between the two efficiencies becomes. Learn more about _Big O_ notation on [Wikipedia](https://en.wikipedia.org/wiki/Big_O_notation).
