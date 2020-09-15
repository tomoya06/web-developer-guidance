from queue import Queue
from threading import Thread
import time

def producer(out_q):
  i = 1
  while True:
    print('produced: ', i)
    out_q.put(i)
    time.sleep(2)
    i += 1


def consumer(in_q):
  while True:
    data = in_q.get()
    if data is not None:
      print('consumed: ', data)


q = Queue()

t1 = Thread(target=producer, args=(q, ))
t2 = Thread(target=consumer, args=(q, ))
t3 = Thread(target=producer, args=(q, ))
t1.start()
t2.start()
t3.start()

