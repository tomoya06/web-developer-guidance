// ==> ES6 version
class Parent {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Children extends Parent {
  constructor(props) {
    super(props);
  }
}

// ==> ES5 version

function OldParent(name) {
  this.name = name;
}

OldParent.prototype.getName = function() {
  return this.name;
}

function OldChildren(name) {
  Parent.call(this, name);
}

OldChildren.prototype = new OldParent();
OldChildren.prototype.constructor = OldChildren;
