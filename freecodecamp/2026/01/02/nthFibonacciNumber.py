def nth_fibonacci(n):
    if n == 0: return 0
    if n == 1: return 1

    prev = 0
    cur = 1

    for seq in range(2, n):
        prev, cur = cur, prev + cur

    return cur 

# nth_fibonacci(4)
print(nth_fibonacci(0))
print(nth_fibonacci(4))
print(nth_fibonacci(10))
print(nth_fibonacci(15))


