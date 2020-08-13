# 赋值运算符


class CMyString(object):
    def __init__(self, v):
        self.v = v
        print("this step goes after __new__")

# In general, you shouldn't need to override __new__ 
# unless you're subclassing an immutable type like str, int, unicode or tuple.
    def __new__(self, v):
        print("called first")
        pass

    
    def __add__(self, v):
        pass



    pass

