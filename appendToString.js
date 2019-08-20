function appendToString(string1, string2) {
  return (string1 + string2);
};
console.log(appendToString("Hello", " World!")); // "Hello World!"
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
