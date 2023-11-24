class Queue
  def initialize
    @data = []
  end

  def enqueue(item)
    @data.push(item)
  end

  def dequeue
    @data.shift
  end
end

q = Queue.new
n = 100000

puts "enqueue"
start_time = Time.now
for i in 1..n do
  q.enqueue(i)
end
end_time = Time.now
puts "Time taken: #{end_time - start_time} seconds"

puts "dequeue"
start_time = Time.now
for i in 1..n do
  q.dequeue
end
end_time = Time.now
puts "Time taken: #{end_time - start_time} seconds"