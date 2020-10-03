let idCnt = 0;

export default class TodoItem {
  id;

  desc;

  done;

  editing;

  constructor(desc) {
    this.id = idCnt;
    idCnt += 1;
    this.desc = desc;
    this.done = false;
    this.editing = false;
  }
}
