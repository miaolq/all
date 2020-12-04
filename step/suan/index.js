/* eslint-disable vars-on-top */
/* eslint-disable no-plusplus */
/* eslint-disable no-var */
// 两数相加
var addTwoNumbers = function (l1, l2) {
  let node1 = l1
  let node2 = l2
  let jinwei = 0
  let head = null
  let pre = head
  while (node1 || node2 || jinwei) {
    let var1 = node1 ? node1.val : 0
    let var2 = node2 ? node2.val : 0
    const newNode = { val: (var1 + var2 + jinwei) % 10, next: null }
    jinwei = var1 + var2 + jinwei >= 10 ? 1 : 0
    node1 = node1 ? node1.next : null
    node2 = node2 ? node2.next : null
    if (head === null) {
      pre = head = newNode
    } else {
      pre.next = newNode
      pre = newNode
    }
  }
  return head
}

// 反转链表的两数相加
function addTwo(l1, l2) {
  const stack1 = []
  const stack2 = []
  let node1 = l1
  let node2 = l2
  while (node1 !== null) {
    stack1.push(node1.val)
    node1 = node1.next
  }
  while (node2 !== null) {
    stack2.push(node2.val)
    node2 = node2.next
  }
  let jinwei = 0
  const stack3 = []
  while (stack1.length || stack2.length) {
    let var1 = stack1.pop() || 0
    let var2 = stack2.pop() || 0
    stack3.push((var1 + var2 + jinwei) % 10)
    jinwei = var1 + var2 >= 10 ? 1 : 0
  }

  let head = null
  let prev = head
  while (stack3.length) {
    let node = { val: stack3.pop(), next: null }
    if (prev) {
      prev.next = node
    } else {
      head = node
    }
    prev = node
  }
  return head
}

// 判断是否是回文字符串 1. reverse之后不变 2. 暴力：双指针头尾同时遍历
// leet5 最长回文 (动态规划)
var test =
  'anugnxshgonmqydttcvmtsoaprxnhpmpovdolbidqiyqubirkvhwppcdyeouvgedccipsvnobrccbndzjdbgxkzdbcjsjjovnhpnbkurxqfupiprpbiwqdnwaqvjbqoaqzkqgdxkfczdkznqxvupdmnyiidqpnbvgjraszbvvztpapxmomnghfaywkzlrupvjpcvascgvstqmvuveiiixjmdofdwyvhgkydrnfuojhzulhobyhtsxmcovwmamjwljioevhafdlpjpmqstguqhrhvsdvinphejfbdvrvabthpyyphyqharjvzriosrdnwmaxtgriivdqlmugtagvsoylqfwhjpmjxcysfujdvcqovxabjdbvyvembfpahvyoybdhweikcgnzrdqlzusgoobysfmlzifwjzlazuepimhbgkrfimmemhayxeqxynewcnynmgyjcwrpqnayvxoebgyjusppfpsfeonfwnbsdonucaipoafavmlrrlplnnbsaghbawooabsjndqnvruuwvllpvvhuepmqtprgktnwxmflmmbifbbsfthbeafseqrgwnwjxkkcqgbucwusjdipxuekanzwimuizqynaxrvicyzjhulqjshtsqswehnozehmbsdmacciflcgsrlyhjukpvosptmsjfteoimtewkrivdllqiotvtrubgkfcacvgqzxjmhmmqlikrtfrurltgtcreafcgisjpvasiwmhcofqkcteudgjoqqmtucnwcocsoiqtfuoazxdayricnmwcg'

var test2 = 'babad'
// 暴力法： 1. 双指针遍历所有子串。  2. 从最长str.length开始遍历子串长度，结合滑尺
var longestPalindrome = function (s) {
  let max = ''
  function reverse(str) {
    return str.split('').reverse().join('')
  }
  for (let i = 0; i < s.length; ++i) {
    for (let j = i; j <= s.length; ++j) {
      // 优化
      if (j - i < max.length) {
        continue
      }
      let str = s.substring(i, j)
      if (str === reverse(str)) {
        max = str.length > max.length ? str : max
      }
    }
  }
  return max
}

var longestPalindrome2 = function (s) {
  let max = ''
  function reverse(str) {
    return str.split('').reverse().join('')
  }
  for (let i = s.length; i > 0; --i) {
    for (let j = 0; j + i <= s.length; ++j) {
      var str = s.substr(j, i)
      if (str === reverse(str)) {
        max = str.length > max.length ? str : max
      }
    }
  }
  return max
}

// console.log(longestPalindrome2(test))

// 反转连标
function reverseList(head) {
  let pre = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

function reverseList2(head) {
  if (head === null) return head
  function reverse(node, pre) {
    const next = node.next
    node.next = pre
    pre = node
    node = next
    if (node !== null) {
      return reverse(node, pre) //  此处加上return toknow
    }
    return pre
  }
  return reverse(head, null)
}

// var b = { val: 2, next: null }
// var a = { val: 1, next: b }

// console.log(reverseList2(a))

// 中位数

var findMedianSortedArrays = function (nums1, nums2) {
  // 奇index Math.floor(length/2)   偶index  length/2   length/2-1
  const l1 = nums1.length
  const l2 = nums2.length
  const len = l1 + l2
  const first = Math.floor(len / 2)
  let pre = 0
  let next = 0
  let j = 0
  let k = 0
  function push(val) {
    pre = next
    next = val
  }
  while (j + k <= first) {
    // toknow 注意数组越界
    if (nums1[j] > nums2[k] || j > l1 - 1) {
      push(nums2[k++])
    } else if (nums1[j] <= nums2[k] || k > l2 - 1) {
      push(nums1[j++])
    }
  }
  return len % 2 === 0 ? (pre + next) / 2 : next
}

console.log(findMedianSortedArrays([1, 5], [3]))

// leet25 k个一组反转连标
var reverseKGroup = function (head, k) {
  const linkArr = []
  let i = 0
  let node = head
  while (node && i < k) {
      let cur = node
  }

  function reverseLink(head) {
    let pre = null
    let cur = head
    while (cur) {
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    return pre
  }
}
