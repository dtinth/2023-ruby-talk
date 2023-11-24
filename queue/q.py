class Queue:
    def __init__(self):
        self.data = []

    def enqueue(self, item):
        self.data.append(item)

    def dequeue(self):
        return self.data.pop(0)

q = Queue()
n = 100000

import time

print("enqueue")
start_time = time.time()
for i in range(1, n + 1):
    q.enqueue(i)
end_time = time.time()
print("Time taken:", end_time - start_time, "seconds")

print("dequeue")
start_time = time.time()
for i in range(1, n + 1):
    q.dequeue()
end_time = time.time()
print("Time taken:", end_time - start_time, "seconds")
