class helloword extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({ mode: 'open' });
    let wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');
    let icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);
    let info = document.createElement('span');
    info.setAttribute('class', 'info');
    let text = this.getAttribute('text');
    info.textContent = text;

    let imgUrl;
    if (this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }
    let img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    let style = document.createElement('style');
    style.textContent = '.wrapper {' +

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// https://ponyfoo.com/articles/es6-modules-in-depth

/** 1 */
export default helloword

/** 2 */
// export { helloword }

/** 3 */
// const name = 'zfx'
// export { name, helloword }

/** 4 */
// const name = 'zfx'
// export { name, helloword as default }