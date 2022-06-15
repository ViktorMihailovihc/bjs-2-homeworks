function cachingDecoratorNew(func) {
  const cache = [];

  return (...args) => {
    const hash = args.join(',');
    const index = cache.findIndex((item) => item.hash === hash);
    let result;

    if (index !== -1) {
      result = 'Из кэша: ' + cache[index].value;
    } else {
      const value = func(...args);
      cache.push({ hash, value });
      if (cache.length > 5) { 
        cache.shift();
      }
      result = 'Вычисляем: ' + value; 
    }

    console.log(result);
    return result;
  }
}


function debounceDecoratorNew(func, time) {
  let flag = false;
  let timerId;

  return (...args) => {
    clearTimeout(timerId);

    if (!flag) {
      func(...args);
      flag = true;
    }

    timerId = setTimeout(() => flag = false, 2000);
  }
}

function debounceDecorator2(func, time) {
  let flag = false;
  let timerId;

  const wrapper = (...args) => {
    clearTimeout(timerId);

    if (!flag) {
      func(...args);
      wrapper.count++;
      flag = true;
    }

    timerId = setTimeout(() => flag = false, time);
  }

  wrapper.count = 0;
  return wrapper;
}
