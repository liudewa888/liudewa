// 3. 深拷贝

function isObject(val) {
  return val && typeof val === 'object'
}

function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) return obj;
  if (hash.has(obj)) {
    return hash.get(obj)
  }

  let target = Array.isArray(obj) ? [] : {};
  hash.set(obj, target)

  Reflect.ownKeys(obj).forEach(item => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash)
    } else {
      target[item] = obj[item]
    }
  })
  return target
}

const obj1 = { age: 18, children: [1, 2, 3], fn: (a, b) => a + b, reg: null }

const obj2 = deepClone(obj1)
// console.log(obj1.reg,obj2.reg)


// 6. 柯里化 

function currying(fn, ...args) {
  const length = fn.length;
  let allArgs = [...args]

  const res = (...newArgs) => {
    allArgs = [...allArgs, ...newArgs];
    if (allArgs.length === length) {
      return fn(...allArgs);
    } else {
      return res;
    }
  }
  return res
}

// const add = (a,b,c)=>a + b + c

// const fn = currying(add)

// console.log(fn(1)(2,3));

// 8. 数组扁平化

function flatter(arr) {
  if (!arr.length) return;
  return arr.reduce((pre, cur) => {
    if (Array.isArray(cur)) {
      return [...pre, ...flatter(cur)]
    } else {
      return [...pre, cur]
    }

  }, [])
}

function flatter1(arr) {
  if (!arr.length) return;
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// console.log(flatter1([1, 2, [3, 4]]))

// 11. 模版字符串

function newStrTemplate(str) {
  return str.replace(/\$\{(.*?)\}/g, (match, key) => {
    return eval(key)
  })
}

// const str1 ='vue'

// const str = '${str1}'

// const res = newStrTemplate(str)

// console.log(res)


