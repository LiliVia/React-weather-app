export const toHtml = string => {
  const template = document.createElement('template');
  template.innerHTML = string.trim();

  return template.content;
};

export const clearChildren = node => {
  node.innerHTML = '';
  return node;
};

export const appendChildren = (node, child) => {
  if (typeof child === 'string') {
    node.insertAdjacentHTML('beforeend', child)
  } else if (Array.isArray(child)) {
    child.forEach(elem => {
      (typeof elem === 'string') ? node.insertAdjacentHTML('beforeend', elem) : node.append(elem)
    })
  } else {
    node.append(child);
  }
  return node;
};

export const bindAll = (context, ...names) => {
  names.forEach(name => {
    if (typeof context[name] === 'function') {
      context[name] = context[name].bind(context);
    } else {
      throw Error(
        `Expected function ${name}. Instead received: ${typeof context[name]}`
      );
    }
  });
};

export const srcIcon = icon => `https://www.weatherbit.io/static/img/icons/${icon}.png`;

export const getWeekday = datetime => {
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let date = new Date(datetime).getDay();
  return weekday[date];
};

const storageCity = (key, city) => {

  let arr = JSON.parse(localStorage.getItem(key)) || [];
  city = city.toLowerCase();

  if (arr.indexOf(city) === -1) {
    arr.push(city);
  } else if (arr.length > 5) {
    arr.shift();
  }

  localStorage.setItem(key, JSON.stringify(arr));
}

export const recentStorage = (city) => storageCity('recent', city);
export const favoriteStorage = (city) => storageCity('favorite', city)
