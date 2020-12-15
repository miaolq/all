const { construct } = require('core-js/fn/reflect')
const { add } = require('lodash')

class Link {
  construct(node) {
    this.head = node || null
  }

  class Node {
      constructor(val,next){
        this.val = val
        this.next = next
      }
  }

  add(node){
      if(!this.head){
          this.head = node
          return 
      }
    let cur = this.head
    while(cur){
        if(cur.next){
            cur = cur.next
        }
    }
    ur.next = node

  
  }

}
