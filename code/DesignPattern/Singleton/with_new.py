class Singleton:
  def __new__(cls, *args, **kw):
    if not hasattr(cls, '_instance'):
      orig = super(Singleton, cls)
      cls._instance = orig.__new__(cls, *args, **kw)
    return cls._instance

class MyClass(Singleton):
  a = 1