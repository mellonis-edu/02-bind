import bind from './assignment';

describe('bind', () => {
  test('bind is a function', () => {
    expect(bind instanceof Function).toBe(true);
  });

  test('bind returns a function', () => {
    // eslint-disable-next-line prefer-arrow-callback
    const bindedFunc = bind(function func() {});

    expect(bindedFunc instanceof Function).toBe(true);
  });

  test('bindedFunc remembers a binded context', () => {
    const context = {};

    // eslint-disable-next-line prefer-arrow-callback
    const bindedFunc = bind(function func() {
      return this;
    }, context);

    expect(bindedFunc()).toBe(context);
  });

  test('bindedFunc remembers binded arguments', () => {
    const context = {};

    // eslint-disable-next-line prefer-arrow-callback
    const bindedFunc = bind(function func(...args) {
      return args;
    }, context, 'a', 'b', 'c');

    expect(bindedFunc()).toEqual(['a', 'b', 'c']);
  });

  test('bindedFunc recieves actual arguments', () => {
    const context = {};

    // eslint-disable-next-line prefer-arrow-callback
    const bindedFunc = bind(function func(...args) {
      return args;
    }, context, 'a', 'b', 'c');

    expect(bindedFunc('d')).toEqual(['a', 'b', 'c', 'd']);
  });
});
