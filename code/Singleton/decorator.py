def singleton(cls):
  instance = {}
  def getinstance(*args, **kw):
    if cls not in instance:
      instance[cls] = cls(*args, **kw)
    return instance[cls]
  return getinstance

@singleton
class MyClass:
  a = 1